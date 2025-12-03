"use client";

import { useState, useRef, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { createSubscription } from '@/ai/flows/create-subscription';
import { useAuth, useFirestore } from '@/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const preferenciasViagem = [
    { id: "praia", label: "Praia" },
    { id: "aventura", label: "Aventura" },
    { id: "cultura", label: "Cultura" },
    { id: "gastronomia", label: "Gastronomia" },
    { id: "luxo", label: "Luxo" },
    { id: "ecoturismo", label: "Ecoturismo" },
    { id: "familia", label: "Família" },
    { id: "romance", label: "Romance" },
];

type SignupFormViajanteProps = {
  plan: 'free' | 'plus';
};

export function SignupFormViajante({ plan }: SignupFormViajanteProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string>('https://picsum.photos/seed/avatar-placeholder/150/150');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const [formTitle, setFormTitle] = useState("Formulário de Cadastro");
  
  const auth = useAuth();
  const firestore = useFirestore();

  useEffect(() => {
    setFormTitle(plan === 'plus' ? "Complete seu Cadastro Plus" : "Complete seu Cadastro Free");
  }, [plan]);

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCepBlur = async (e: ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setCidade(data.localidade);
          setEstado(data.uf);
        } else {
            toast({ variant: 'destructive', title: 'CEP não encontrado.' });
        }
      } catch (error) {
        toast({ variant: 'destructive', title: 'Erro ao buscar CEP.' });
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current || !auth || !firestore) {
        toast({
            variant: "destructive",
            title: "Erro de Configuração",
            description: "Serviços de autenticação ou banco de dados não estão disponíveis.",
        });
        setLoading(false);
        return;
    }
    
    const formData = new FormData(formRef.current);
    const email = formData.get('email') as string;
    const password = formData.get('senha') as string;
    const displayName = formData.get('nome') as string;
    const preferences = preferenciasViagem.filter(p => formData.get(p.id)).map(p => p.label);

    try {
      // 1. Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update Auth profile
      await updateProfile(user, {
          displayName: displayName,
          photoURL: preview // Note: photoURL needs to be a real URL, data URI might not persist in Auth profile but is fine for Firestore
      });


      // 2. Create user profile in Firestore
      const userProfile: { [key: string]: any } = {
          uid: user.uid,
          email: user.email,
          displayName: displayName,
          photoURL: preview,
          plan: plan,
          preferences: preferences,
          createdAt: serverTimestamp(),
      };

      if (plan === 'free') {
        userProfile.trialStartDate = new Date().toISOString();
      }

      const userDocRef = doc(firestore, 'users', user.uid);
      await setDoc(userDocRef, userProfile, { merge: true });

      // 3. Handle payment for 'plus' plan
      if (plan === 'plus') {
        toast({
            title: "Redirecionando para pagamento...",
            description: "Você será levado ao Mercado Pago para finalizar a assinatura.",
        });
        const result = await createSubscription({
          userEmail: user.email!,
          price: 19.90, // Updated price
          reason: 'Assinatura Viajante Plus'
        });

        if (result.init_point) {
          window.location.href = result.init_point;
        } else {
          throw new Error("Link de pagamento não recebido.");
        }
      } else {
        // For 'free' plan, just show success and redirect
        toast({
            title: "Cadastro realizado com sucesso!",
            description: `Seu plano Free foi ativado. Você será redirecionado.`,
        });
        router.push('/painel'); // Redirect to dashboard
      }
    } catch (error: any) {
        console.error("Signup error:", error);
        let errorMessage = "Ocorreu um erro durante o cadastro.";
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = "Este e-mail já está sendo utilizado por outra conta.";
                break;
            case 'auth/weak-password':
                errorMessage = "A senha é muito fraca. Ela deve ter pelo menos 6 caracteres.";
                break;
            case 'auth/invalid-email':
                errorMessage = "O formato do e-mail fornecido é inválido.";
                break;
            default:
                errorMessage = error.message || 'Falha ao se comunicar com o serviço de autenticação.';
                break;
        }
        toast({
            variant: "destructive",
            title: "Erro no Cadastro",
            description: errorMessage,
        });
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 md:p-12 transition-all duration-500">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {formTitle}
        </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-amber-400 mb-4 shadow-lg">
            <Image id="preview" src={preview} alt="Preview" width={128} height={128} className="w-full h-full object-cover" />
          </div>
          <input type="file" id="foto" name="foto" accept="image/*" className="hidden" onChange={handleFotoChange} />
          <label htmlFor="foto" className="cursor-pointer text-amber-400 hover:underline font-medium">Escolher foto de perfil</label>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <div className='space-y-2'>
                <Label htmlFor='nome' className="block text-sm font-medium text-slate-300">Nome completo *</Label>
                <Input type="text" id="nome" name="nome" required className="bg-slate-700 border-slate-600 rounded-lg px-4 py-3 h-auto" />
            </div>
            <div className='space-y-2'>
                <Label htmlFor='telegram' className="block text-sm font-medium text-slate-300">Telegram (opcional)</Label>
                <Input type="text" id="telegram" name="telegram" placeholder="@seuusuario" className="bg-slate-700 border-slate-600 rounded-lg px-4 py-3 h-auto" />
            </div>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='email' className="block text-sm font-medium text-slate-300">E-mail *</Label>
          <Input type="email" id="email" name="email" required className="bg-slate-700 border-slate-600 rounded-lg px-4 py-3 h-auto" />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='senha' className="block text-sm font-medium text-slate-300">Senha *</Label>
          <Input type="password" id="senha" name="senha" required minLength={6} className="bg-slate-700 border-slate-600 rounded-lg px-4 py-3 h-auto" />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='cep' className="block text-sm font-medium text-slate-300">CEP *</Label>
          <Input type="text" id="cep" name="cep" required maxLength={9} placeholder="00000-000" onBlur={handleCepBlur} className="bg-slate-700 border-slate-600 rounded-lg px-4 py-3 h-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor='cidade' className="block text-sm font-medium text-slate-300">Cidade</Label>
            <Input type="text" id="cidade" name="cidade" placeholder="Cidade" readOnly value={cidade} className="bg-slate-800/50 border-slate-600 rounded-lg px-4 py-3 text-slate-400 cursor-not-allowed h-auto" />
          </div>
          <div className="space-y-2">
            <Label htmlFor='estado' className="block text-sm font-medium text-slate-300">Estado</Label>
            <Input type="text" id="estado" name="estado" placeholder="Estado" readOnly value={estado} className="bg-slate-800/50 border-slate-600 rounded-lg px-4 py-3 text-slate-400 cursor-not-allowed h-auto" />
           </div>
        </div>

        <div>
          <Label className="block text-sm font-medium text-slate-300 mb-4">Quais são seus interesses de viagem?</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {preferenciasViagem.map(pref => (
                <Label key={pref.id} className="flex items-center space-x-2 text-slate-300 font-normal p-2 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer">
                    <Checkbox id={pref.id} name={pref.id} value={pref.id} className="border-slate-500" />
                    <span>{pref.label}</span>
                </Label>
            ))}
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <div className="flex items-center">
            <Checkbox id="termos" name="termos" required />
            <Label htmlFor="termos" className="text-sm text-slate-400 ml-3 font-normal">
              Eu li e aceito os <a href="#" className="text-amber-400 underline hover:text-amber-300">termos de uso</a> e a <a href="#" className="text-amber-400 underline hover:text-amber-300">política de privacidade</a>.
            </Label>
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 h-auto rounded-xl transition text-lg flex items-center justify-center shadow-lg hover:shadow-amber-500/30">
            {loading ? (
              <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Processando...</>
            ) : ( plan === 'plus' ? 'Ir para Pagamento (R$ 19,90)' : 'Finalizar Cadastro Gratuito')}
          </Button>
        </div>
      </form>
      <div id="wallet_container" className="mt-6"></div>
    </div>
  );
}
