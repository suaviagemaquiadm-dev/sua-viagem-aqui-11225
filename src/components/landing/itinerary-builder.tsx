"use client";

import Image from 'next/image';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { generateItineraryAction } from '@/app/actions';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2, Lock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useUser, useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
import Link from 'next/link';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="btn-modern w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 rounded-xl text-lg shadow-lg transition-all h-auto">
      {pending ? (
        <span className="flex items-center justify-center">
          <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Criando proposta...
        </span>
      ) : (
        <span className="flex items-center justify-center">
          <Sparkles className="mr-2 h-6 w-6" /> Criar Roteiro
        </span>
      )}
    </Button>
  );
}

export function ItineraryBuilder() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [state, formAction] = useActionState(generateItineraryAction, { itinerary: undefined, error: undefined, success: undefined });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const aiImage = PlaceHolderImages.find(img => img.id === 'ai-builder-visual');

  useEffect(() => {
    if (state?.success && state?.itinerary && user && firestore) {
      setIsDialogOpen(true);

      const promptText = formRef.current?.querySelector<HTMLTextAreaElement>('textarea[name="prompt"]')?.value || '';

      const roteirosRef = collection(firestore, 'users', user.uid, 'roteiros');
      const roteiroData = {
          prompt: promptText,
          itineraryData: state.itinerary,
          userId: user.uid,
          createdAt: serverTimestamp(),
      };

      addDocumentNonBlocking(roteirosRef, roteiroData);
        // .then(() => {
        //     toast({
        //         title: "Roteiro Salvo!",
        //         description: "Seu novo roteiro foi salvo no seu painel.",
        //     });
        // })
        // .catch((error) => {
        //     console.error("Error saving itinerary to Firestore:", error);
        //     toast({
        //         variant: "destructive",
        //         title: "Erro ao Salvar",
        //         description: "Não foi possível salvar o roteiro no seu painel. Verifique suas permissões.",
        //     });
        // });

      formRef.current?.reset();
    }
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Erro ao gerar roteiro",
        description: state.error,
      });
    }
  }, [state, toast, user, firestore]);

  const isDisabled = !user && !isUserLoading;

  return (
    <>
      <section id="ferramentas" className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-block bg-slate-800 border border-slate-700 rounded-full px-6 py-2 mb-4">
            <span className="text-primary font-semibold text-sm">✨ FERRAMENTA EXCLUSIVA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Construtor de Roteiros com IA
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Crie itinerários completos em minutos com nossa IA. Exclusivo para membros Plus.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Descreva o perfil do cliente e da viagem</h3>
              <form ref={formRef} action={formAction} className="space-y-4">
                <Textarea
                  id="ai-prompt"
                  name="prompt"
                  rows={6}
                  className="w-full bg-slate-900 border-2 border-slate-600 rounded-xl p-4 text-white focus:border-primary focus:ring-primary resize-none transition-all disabled:cursor-not-allowed disabled:bg-slate-800/50"
                  placeholder="Ex: Casal em lua de mel, 10 dias na Itália. Buscam romance, gastronomia e passeios privativos. Orçamento elevado."
                  required
                  disabled={isDisabled}
                />
                 {isDisabled && (
                  <div className="text-sm text-amber-400 text-center bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 flex items-center justify-center gap-2">
                    <Lock className="h-4 w-4" />
                    <div>
                      Você precisa estar logado para usar o construtor.
                      <Link href="/login?redirect=/#ferramentas" className="font-bold underline ml-1">Fazer Login</Link> ou <Link href="/cadastro-viajante" className="font-bold underline">Cadastre-se</Link>.
                    </div>
                  </div>
                 )}
                 <div className={isDisabled ? 'relative' : ''}>
                    {isDisabled && <div className="absolute inset-0 bg-transparent z-10 cursor-not-allowed"></div>}
                    <SubmitButton />
                 </div>
              </form>
            </div>
            <div className="text-center">
              <div className="relative">
                {aiImage && (
                  <Image
                    src={aiImage.imageUrl}
                    alt={aiImage.description}
                    width={400}
                    height={400}
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-xl animate-float"
                    data-ai-hint={aiImage.imageHint}
                  />
                )}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  IA Ativa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">Seu Roteiro Personalizado está Pronto!</DialogTitle>
            <DialogDescription>
              Aqui está a sugestão de roteiro gerada pela nossa IA. Ele também foi salvo no seu painel de viajante para consulta futura.
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-invert prose-p:text-slate-300 prose-headings:text-white max-h-[60vh] overflow-y-auto rounded-md border border-slate-700 p-4 bg-slate-800/50">
             <pre className="text-wrap whitespace-pre-wrap font-sans">{state.itinerary}</pre>
          </div>
          <DialogFooter>
            <Button asChild variant="outline"><Link href="/painel">Ver no Painel</Link></Button>
            <Button onClick={() => {
              if (state.itinerary) {
                navigator.clipboard.writeText(state.itinerary);
                toast({ title: "Copiado!", description: "Roteiro copiado para a área de transferência." });
              }
            }}>Copiar Roteiro</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
