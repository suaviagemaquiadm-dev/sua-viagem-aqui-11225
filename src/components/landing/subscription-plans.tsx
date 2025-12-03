"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Free Trial",
        price: "Grátis",
        period: "/30 dias",
        description: "Teste a plataforma e comece a receber contatos.",
        features: ["Perfil na plataforma", "Até 3 fotos na galeria", "Visibilidade nas buscas", "Receba contatos de viajantes"],
        microcopy: "✅ Sem cartão de crédito • ✅ Cadastro rápido",
        buttonLabel: "Comece Agora",
        buttonVariant: "secondary" as const,
        highlight: false,
        planId: "free",
        href: "/login?redirect=/painel-anunciante",
        className: "border-slate-700",
        titleColor: "text-cyan-400"
    },
    {
        name: "Pro",
        price: "R$ 97",
        period: "/mês",
        description: "Máxima visibilidade, destaque e ferramentas de performance.",
        features: ["Tudo do Free Trial, e mais:", "Perfil em destaque na plataforma", "Destaque na página principal", "Galeria com até 20 fotos e vídeos", "Link para seu site e redes sociais", "Relatórios de desempenho do anúncio", "Suporte prioritário"],
        microcopy: "✅ Pagamento seguro via Mercado Pago • ✅ Cancele quando quiser",
        buttonLabel: "Assinar Plano Pro",
        buttonVariant: "default" as const,
        highlight: true,
        planId: "pro",
        href: "/login?redirect=/painel-anunciante",
        className: "border-primary",
        titleColor: "text-primary"
    },
]

export function SubscriptionPlans() {
  return (
    <section id="planos" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Planos de Assinatura para Parceiros</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Escolha o plano ideal para divulgar seu negócio e alcançar mais viajantes. Simples e direto.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
            <Card key={plan.name} className={cn("bg-slate-800 rounded-2xl p-2 border-2 flex flex-col relative", plan.className, plan.highlight && "shadow-primary/20 shadow-2xl")}>
                {plan.highlight && (
                     <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">MAIS POPULAR</div>
                )}
                <CardHeader className="pt-8 text-center">
                    <CardTitle className={cn("text-3xl font-bold", plan.titleColor)}>{plan.name}</CardTitle>
                     <div className="my-4">
                        <span className="text-5xl font-black text-white">{plan.price}</span>
                        <span className="text-xl font-normal text-slate-400">{plan.period}</span>
                    </div>
                    <CardDescription className="text-slate-400 pt-2 min-h-[40px]">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                     <ul className="space-y-3 text-slate-300">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle2 className="text-green-500 mr-3 mt-1 h-4 w-4 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter className="flex-col">
                     <p className="text-xs text-slate-500 h-8 text-center">{plan.microcopy}</p>
                     <Button asChild className={cn("w-full mt-2 font-bold py-3 text-base h-auto", plan.buttonVariant === 'default' ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-slate-700 hover:bg-slate-600')}>
                        <Link href={plan.href}>{plan.buttonLabel}</Link>
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </div>
    </section>
  );
}
