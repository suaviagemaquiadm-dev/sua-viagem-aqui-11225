
"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { Partner } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import Link from 'next/link';

type PartnerCarouselProps = {
  partners: Partner[];
  isLoading: boolean;
};

export function PartnerCarousel({ partners, isLoading }: PartnerCarouselProps) {
  if (isLoading) {
    return (
      <section id="parceiros-premium" className="mb-20">
         <div className="text-center mb-12">
            <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">
                <div className="bg-slate-800 rounded-2xl overflow-hidden h-full flex flex-col">
                  <Skeleton className="w-full h-48" />
                  <div className="p-4 flex flex-col flex-grow">
                    <Skeleton className="h-5 w-4/5 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/3 mt-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  if (!partners || partners.length === 0) {
    return null; // Do not render if no premium partners
  }

  // Create a seamless loop by duplicating the partners
  const duplicatedPartners = partners.length > 5 ? [...partners, ...partners] : partners;


  return (
    <section id="parceiros-premium" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Explore Nossos Parceiros Premium</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Experiências selecionadas para elevar a viagem dos seus clientes.
        </p>
      </div>
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-infinite-scroll group-hover:pause">
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">
              <Link href={`/parceiro/${partner.id}`} className="bg-slate-800 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 block">
                <div className="overflow-hidden">
                    <Image src={partner.image || 'https://picsum.photos/seed/partner-default/400/300'} alt={partner.businessName} width={400} height={300} className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white truncate">{partner.businessName}</h3>
                  <p className="text-sm text-slate-400 mb-2 capitalize">{partner.category.replace(/_/g, ' ')}</p>
                  <div className="flex items-center text-sm mt-auto">
                    {/* Placeholder for rating, as it's not in the Partner type */}
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} size={16} className={i < 4 ? 'text-primary fill-current' : 'text-slate-600'} />
                    ))}
                    <span className="text-xs text-slate-500 ml-2">(+50 avaliações)</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 pointer-events-none"></div>
      </div>
    </section>
  );
}
