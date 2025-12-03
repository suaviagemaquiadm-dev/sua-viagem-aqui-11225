"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SignupFormViajante } from '@/components/auth/signup-form-viajante';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default function CadastroViajantePage() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'plus'>('plus');

  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <Header />
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Sua Jornada Começa <span className="text-gradient-gold">Agora</span>
            </h1>
            <p className="text-xl text-slate-300">Escolha seu plano, desbloqueie ferramentas incríveis e comece a planejar viagens inesquecíveis.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Free */}
            <div
              className={cn(
                "bg-slate-800/60 backdrop-blur-md border rounded-3xl p-8 text-center cursor-pointer transition-all duration-300",
                selectedPlan === 'free' ? "border-2 border-cyan-500 shadow-cyan-500/20 shadow-lg scale-105" : "border-slate-700 hover:border-slate-600"
              )}
              onClick={() => setSelectedPlan('free')}
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">Viajante Free</h3>
              <p className="text-5xl font-black text-white mb-2">Grátis</p>
              <p className="text-slate-400 mb-6">O essencial para começar a explorar.</p>
              <ul className="text-left text-slate-300 space-y-3 mb-8 list-disc list-inside">
                <li>Acesso à plataforma e busca de parceiros</li>
                <li>Criar lista de desejos</li>
                <li>Salvar roteiros e passeios</li>
                <li className="line-through text-slate-500">Construtor de Roteiros com IA</li>
              </ul>
              <Button 
                variant={selectedPlan === 'free' ? 'default' : 'secondary'} 
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl transition h-auto text-base"
                aria-selected={selectedPlan === 'free'}
              >
                {selectedPlan === 'free' ? 'Plano Selecionado' : 'Começar Gratuitamente'}
              </Button>
            </div>

            {/* Plano Plus */}
            <div
              className={cn(
                "bg-slate-800/60 backdrop-blur-md border rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 relative overflow-hidden",
                selectedPlan === 'plus' ? "border-2 border-amber-400 shadow-amber-400/20 shadow-lg scale-105" : "border-slate-700 hover:border-slate-600"
              )}
              onClick={() => setSelectedPlan('plus')}
            >
              <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 px-8 py-1 text-sm font-bold shadow-lg transform rotate-45 translate-x-12 translate-y-6">
                <Star className="h-4 w-4 inline-block -mt-1 mr-1" />
                Popular
              </div>
              <h3 className="text-3xl font-bold text-amber-400 mb-4">Viajante Plus</h3>
              <p className="text-5xl font-black text-white mb-2">R$ 19,90<span className="text-xl font-normal text-slate-400">/mês</span></p>
              <p className="text-slate-400 mb-6">Desbloqueie o poder total da IA para viagens perfeitas.</p>
              <ul className="text-left text-slate-300 space-y-3 mb-8 list-disc list-inside">
                <li>Todos os benefícios do plano Free</li>
                <li className="font-bold text-amber-300">Construtor de Roteiros com IA ilimitado</li>
                <li className="font-bold text-amber-300">Suporte prioritário via chat</li>
                <li className="font-bold text-amber-300">Acesso a ofertas exclusivas de parceiros</li>
              </ul>
               <Button 
                variant={selectedPlan === 'plus' ? 'default' : 'secondary'} 
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-xl transition h-auto text-base"
                aria-selected={selectedPlan === 'plus'}
              >
                {selectedPlan === 'plus' ? 'Plano Selecionado' : 'Assinar Viajante Plus'}
              </Button>
            </div>
          </div>

          {/* Formulário Unificado */}
          <SignupFormViajante plan={selectedPlan} />

           <div className="text-center mt-8">
                <Link href="/anunciar" className="text-amber-400 font-medium hover:underline">
                    É uma agência ou parceiro? Cadastre-se aqui.
                </Link>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
