import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Viajante Free",
        price: "Grátis",
        description: "O essencial para organizar suas viagens, sem custo.",
        features: [
            { text: "Busca e contato com parceiros", included: true },
            { text: "Crie sua lista de desejos", included: true },
            { text: "Salve seus roteiros favoritos", included: true },
            { text: "Construtor de Roteiros com IA", included: false, highlight: true },
        ],
        microcopy: "✅ Cadastro rápido • ✅ Comece a explorar agora",
        buttonLabel: "Cadastre-se grátis",
        buttonVariant: "secondary" as const,
        highlight: false,
        className: "border-slate-700",
        titleColor: "text-cyan-400",
        href: "/cadastro-viajante"
    },
    {
        name: "Viajante Plus",
        price: "R$ 19,90",
        period: "/mês",
        description: "Desbloqueie o poder da IA para viagens perfeitas.",
        features: [
            { text: "Todos os benefícios do plano Free", included: true },
            { text: "Acesso ilimitado ao Construtor de Roteiros com IA", included: true, highlight: true },
            { text: "Suporte prioritário via chat", included: true },
            { text: "Acesso a ofertas exclusivas de parceiros", included: true },
        ],
        microcopy: "🔐 Pagamento seguro • 📱 Acesso imediato • ✉️ Suporte prioritário",
        buttonLabel: "Assinar Viajante Plus",
        buttonVariant: "default" as const,
        highlight: true,
        className: "border-primary",
        titleColor: "text-primary",
        href: "/cadastro-viajante"
    }
]

export function TravelerPlans() {
  return (
    <section id="planos-viajante" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Planos para Viajantes</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Escolha o plano ideal para a sua jornada e comece a explorar.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
             <Card key={plan.name} className={cn("bg-slate-800 rounded-2xl p-2 border-2 flex flex-col relative", plan.className)}>
                {plan.highlight && (
                     <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">RECOMENDADO</div>
                )}
                <CardHeader className="pt-8">
                    <CardTitle className={cn("text-2xl font-bold", plan.titleColor)}>{plan.name}</CardTitle>
                    <CardDescription className="text-slate-400 pt-2 min-h-[40px]">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="my-6">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        {plan.period && <span className="text-lg font-normal text-slate-400">{plan.period}</span>}
                    </div>
                     <ul className="space-y-3 text-slate-300">
                        {plan.features.map((feature, i) => (
                            <li key={i} className={cn("flex items-start", feature.highlight && "font-bold text-amber-300")}>
                                {feature.included ? 
                                    (feature.highlight ? <Star className="text-amber-400 mr-3 mt-1 h-4 w-4 shrink-0 fill-current" /> : <CheckCircle2 className="text-green-500 mr-3 mt-1 h-4 w-4 shrink-0" />) : 
                                    <XCircle className="text-red-500 mr-3 mt-1 h-4 w-4 shrink-0" />
                                }
                                <span className={cn(!feature.included && "text-slate-500 line-through")}>{feature.text}</span>
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
