import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Handshake, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-10 w-10 text-primary mb-4" />,
    title: "1. Busque",
    description: "Use nossos filtros para encontrar exatamente o que você precisa para sua viagem."
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary mb-4" />,
    title: "2. Conecte-se",
    description: "Entre em contato direto com os melhores parceiros e agências do mercado."
  },
  {
    icon: <PlaneTakeoff className="h-10 w-10 text-primary mb-4" />,
    title: "3. Viaje",
    description: "Negocie e planeje sua viagem diretamente com o fornecedor, sem intermediários."
  }
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Como Funciona</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Conectamos viajantes a experiências únicas em 3 passos simples.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {steps.map((step) => (
          <Card key={step.title} className="bg-slate-800 border-slate-700">
            <CardContent className="p-8 flex flex-col items-center">
              {step.icon}
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
