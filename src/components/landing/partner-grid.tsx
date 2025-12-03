
"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Partner } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

type PartnerGridProps = {
  partners: Partner[] | null;
  isLoading: boolean;
};

export function PartnerGrid({ partners, isLoading }: PartnerGridProps) {
  const displayedPartners = partners?.slice(0, 8) ?? [];
  
  return (
    <section id="mais-agencias" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Mais Parceiros para seu Passeio</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Uma seleção de nossos parceiros para você descobrir.
        </p>
      </div>
      <div id="advertiser-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {isLoading ? (
          [...Array(8)].map((_, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden flex flex-col">
              <Skeleton className="w-full h-48" />
              <div className="p-4 flex flex-col flex-grow">
                <Skeleton className="h-5 w-4/5 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-1/3 mt-2" />
              </div>
            </div>
          ))
        ) : (
          displayedPartners.map((partner) => (
            <Link href={`/parceiro/${partner.id}`} key={partner.id} className="group block bg-slate-800 rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="overflow-hidden">
                  <Image src={partner.image || 'https://picsum.photos/seed/grid-default/400/300'} alt={partner.businessName} width={400} height={300} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white">{partner.businessName}</h3>
                <p className="text-sm text-primary capitalize">{partner.category.replace(/_/g, ' ')}</p>
                <p className="text-xs text-slate-400 mt-2 flex items-center">
                  <MapPin className="mr-2 h-3 w-3" />
                  {partner.city}, {partner.state}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
      { !isLoading && partners && partners.length === 0 && (
         <div className="text-center py-10 text-slate-400">Nenhum parceiro encontrado.</div>
      )}
      <div className="mt-8 text-center text-sm text-slate-500 italic max-w-4xl mx-auto">
        <p><strong>Aviso Importante:</strong> A plataforma Sua Viagem Aqui atua exclusivamente como uma vitrine para conectar viajantes a fornecedores de serviços. Toda a negociação, contratação, pagamento e execução dos pacotes e serviços são realizados diretamente com o parceiro anunciante, que é o único responsável pela transação.</p>
      </div>
    </section>
  );
}
