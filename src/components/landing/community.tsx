import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

const groups = [
    {
        name: "SVA | Alertas de Viagem",
        description: "Receba as melhores ofertas e alertas de pacotes diretamente no seu Telegram.",
        link: "https://t.me/SuaviagemaquiBot"
    },
    {
        name: "Parceiros de Sucesso SVA",
        description: "Grupo exclusivo para anunciantes trocarem experiências e receberem dicas.",
        link: "https://t.me/+gtw1opf1MsE4YjRh"
    },
    {
        name: "Exploradores SVA",
        description: "Para viajantes que amam compartilhar dicas, fotos e histórias de suas aventuras.",
        link: "https://t.me/+CtoX6DT5HdM4NmRh"
    }
]

export function Community() {
  return (
    <section id="comunidade" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Junte-se à Nossa Comunidade</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Conecte-se, receba dicas e fique por dentro das novidades em nossos grupos exclusivos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {groups.map((group) => (
          <Card key={group.name} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
            <CardContent className="p-0 flex flex-col items-center">
                <Send className="text-5xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white">{group.name}</h3>
                <p className="text-slate-400 mt-2 mb-4 flex-grow">{group.description}</p>
                 <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors mt-2">
                    <Link href={group.link} target="_blank">{`Entrar no Grupo`}</Link>
                </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
