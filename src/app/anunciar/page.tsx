
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SubscriptionPlans } from '@/components/landing/subscription-plans';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdvertiserSignUp() {

  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Alcance Milhares de Viajantes Qualificados
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              Destaque seu negócio na principal plataforma de conexão entre viajantes e os melhores serviços de turismo.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-auto py-4 px-12 rounded-xl mb-16">
                <Link href="/login?redirect=/painel-anunciante">Comece a Anunciar Agora</Link>
            </Button>
        </div>
        
        <SubscriptionPlans />
        
        <div className="text-center mt-20">
            <p className="text-slate-400">Já tem uma conta?</p>
            <Button asChild variant="link" className="text-amber-400 text-lg">
                <Link href="/login?redirect=/painel-anunciante">Acesse seu painel de anunciante</Link>
            </Button>
        </div>

      </main>
      <Footer />
    </div>
  );
}
