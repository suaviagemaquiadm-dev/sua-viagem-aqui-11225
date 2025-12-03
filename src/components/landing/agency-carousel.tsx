
"use client";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Partner } from "@/lib/types";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Link from 'next/link';

type AgencyCarouselProps = {
    agencies: Partner[];
    isLoading: boolean;
}

export function AgencyCarousel({ agencies, isLoading }: AgencyCarouselProps) {
  if (isLoading) {
    return (
        <section id="agencias" className="mb-20">
            <div className="text-center mb-12">
                <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
                <Skeleton className="h-6 w-1/2 mx-auto" />
            </div>
            <div className="relative max-w-6xl mx-auto">
                <div className="flex overflow-hidden">
                    {[...Array(3)].map((_, index) => (
                         <div key={index} className="p-1 md:basis-1/2 lg:basis-1/3 w-full">
                            <Card className="bg-slate-800 border-slate-700 h-full text-center">
                                <CardContent className="flex flex-col items-center justify-center p-8">
                                    <Skeleton className="w-20 h-20 rounded-full mb-6" />
                                    <Skeleton className="h-6 w-3/4 mb-2" />
                                    <Skeleton className="h-4 w-full" />
                                     <Skeleton className="h-4 w-5/6 mt-1" />
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
  }
  
  if (!agencies || agencies.length === 0) {
    return null; // Don't render the section if there are no agencies
  }

  return (
    <section id="agencias" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Nossas Agências Premium</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Conheça alguns dos nossos parceiros de elite que confiam em nossa plataforma.
        </p>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: agencies.length > 2,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {agencies.map((agency) => (
              <CarouselItem key={agency.id} className="md:basis-1/2 lg:basis-1/3">
                <Link href={`/parceiro/${agency.id}`} className="p-1 h-full block">
                  <Card className="bg-slate-800 border-slate-700 h-full text-center hover:border-primary transition-colors flex flex-col">
                    <CardContent className="flex flex-col items-center justify-center p-8 flex-grow">
                       <Image src={agency.image || 'https://picsum.photos/seed/agency-default/100/100'} alt={`Logo ${agency.businessName}`} width={80} height={80} className="mb-6 rounded-full object-cover border-2 border-slate-600" />
                      <h3 className="text-xl font-bold text-white">{agency.businessName}</h3>
                      <p className="text-slate-400 mt-2 text-sm line-clamp-3">{agency.description || `Serviços de ${agency.category.replace(/_/g, ' ')} em ${agency.city}`}</p>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -left-12 transform -translate-y-1/2" />
          <CarouselNext className="absolute top-1/2 -right-12 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
