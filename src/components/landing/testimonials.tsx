
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
import { testimonialsData } from "@/lib/data";
import Image from "next/image";

export function Testimonials() {
  return (
    <section id="depoimentos" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">O Que Dizem Sobre Nós</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Experiências reais de parceiros e viajantes que confiam na nossa plataforma.
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <Carousel
          opts={{ align: "start", loop: true, }}
          plugins={[ Autoplay({ delay: 6000 })]}
          className="w-full"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-2">
                  <Card className="bg-slate-800 border-slate-700 h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                        <p className="text-slate-300 flex-grow italic">"{testimonial.quote}"</p>
                        <div className="flex items-center mt-6">
                            <Image src={testimonial.img} alt={testimonial.alt} width={48} height={48} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="font-bold text-white">{testimonial.name}</p>
                                <p className="text-sm text-slate-400">{testimonial.title}</p>
                            </div>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
           <CarouselPrevious className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-slate-700/50 hover:bg-primary text-white hover:text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed" />
          <CarouselNext className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-slate-700/50 hover:bg-primary text-white hover:text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed" />
        </Carousel>
      </div>
    </section>
  );
}
