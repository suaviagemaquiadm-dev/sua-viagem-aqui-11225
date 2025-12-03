
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, User, Megaphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

type UserType = 'viajante' | 'anunciante';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState<UserType>('viajante');
  const auth = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem(userType === 'viajante' ? 'email-viajante' : 'email-anunciante') as HTMLInputElement).value;
    const password = (form.elements.namedItem(userType === 'viajante' ? 'senha-viajante' : 'senha-anunciante') as HTMLInputElement).value;

    if (!auth) {
      toast({
        variant: "destructive",
        title: "Erro de autenticação",
        description: "O serviço de autenticação não está disponível.",
      });
      setLoading(false);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast({
          title: "Login bem-sucedido!",
          description: "Você será redirecionado em breve.",
        });

        // Smart redirect logic
        const redirectUrl = searchParams.get('redirect');
        if (redirectUrl) {
          router.push(redirectUrl);
        } else {
          // Default redirect based on user type tab
          if (userType === 'viajante') {
            router.push('/painel');
          } else {
            router.push('/painel-anunciante');
          }
        }
      })
      .catch((error: any) => {
        console.error("Firebase Auth Error:", error);
        let errorMessage = "Ocorreu um erro ao fazer login.";
        switch (error.code) {
          case 'auth/user-not-found':
          case 'auth/invalid-credential':
            errorMessage = 'Nenhum usuário encontrado com estas credenciais. Verifique o e-mail e a senha.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Senha incorreta. Por favor, tente novamente.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'O formato do e-mail é inválido.';
            break;
          case 'auth/too-many-requests':
              errorMessage = 'Acesso bloqueado temporariamente devido a muitas tentativas. Tente novamente mais tarde.';
              break;
          default:
            errorMessage = 'Não foi possível fazer login. Verifique suas credenciais.';
            break;
        }
        toast({
          variant: "destructive",
          title: "Erro de Login",
          description: errorMessage,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card className="max-w-md w-full bg-slate-800/80 backdrop-blur-lg border border-slate-700">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">Login</CardTitle>
        <CardDescription>Acesse sua conta de viajante ou anunciante.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={userType} onValueChange={(value) => setUserType(value as UserType)} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-700/80">
            <TabsTrigger value="viajante">
              <User className="mr-2 h-4 w-4" /> Viajante
            </TabsTrigger>
            <TabsTrigger value="anunciante">
              <Megaphone className="mr-2 h-4 w-4" /> Anunciante
            </TabsTrigger>
          </TabsList>
          <TabsContent value="viajante">
            <form onSubmit={handleSubmit} className="space-y-6 pt-6">
              <div className="space-y-2">
                <Label htmlFor="email-viajante">E-mail</Label>
                <Input name="email-viajante" id="email-viajante" type="email" placeholder="viajante@email.com" required className="bg-slate-700 border-slate-600 rounded-lg px-4 py-3 h-auto" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="senha-viajante">Senha</Label>
                <Input name="senha-viajante" id="senha-viajante" type="password" placeholder="••••••••" required className="w-full bg-slate-700 border-slate-600 rounded-lg px-4 py-3 h-auto" />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg h-auto text-base">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Entrando...
                  </>
                ) : (
                  "Entrar como Viajante"
                )}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="anunciante">
            <form onSubmit={handleSubmit} className="space-y-6 pt-6">
              <div className="space-y-2">
                <Label htmlFor="email-anunciante">E-mail</Label>
                <Input name="email-anunciante" id="email-anunciante" type="email" placeholder="anunciante@email.com" required className="bg-slate-700 border-slate-600 rounded-lg px-4 py-3 h-auto" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="senha-anunciante">Senha</Label>
                <Input name="senha-anunciante" id="senha-anunciante" type="password" placeholder="••••••••" required className="w-full bg-slate-700 border-slate-600 rounded-lg px-4 py-3 h-auto" />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg h-auto text-base">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Entrando...
                  </>
                ) : (
                  "Entrar como Anunciante"
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <p className="text-center text-sm text-slate-400">
          Ainda não tem conta de {userType === 'viajante' ? 'viajante' : 'anunciante'}?{' '}
          <Link href={userType === 'viajante' ? "/cadastro-viajante" : "/anunciar"} className="text-amber-400 hover:underline font-semibold">
            Cadastre-se
          </Link>
        </p>
         <Link href={userType === 'viajante' ? "#" : "/"} className="text-sm text-slate-500 hover:underline">
            {userType === 'viajante' ? 'Esqueceu sua senha?' : ''}
        </Link>
      </CardFooter>
    </Card>
  );
}
