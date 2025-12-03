"use client";

import { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { categories } from '@/lib/data';
import { MapPin, CalendarDays, Search, Tags, Filter, ChevronDown, Loader2 } from "lucide-react";
import Link from 'next/link';

type HeroSectionProps = {
  onSearch: (params: { destino: string; categoria: string; local: string; }) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [destino, setDestino] = useState('');
  const [data, setData] = useState('');
  const [categoria, setCategoria] = useState('todos');
  const [local, setLocal] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  const handleSearchClick = async (type: 'destino' | 'categoria') => {
    setIsSearching(true);
    const searchParams = {
        destino: type === 'destino' ? destino : '',
        categoria: type === 'categoria' ? categoria : 'todos',
        local: type === 'categoria' ? local : '',
    };
    await onSearch(searchParams);
    setIsSearching(false);
  };
  
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-black/70 to-slate-900/90 z-10"></div>
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="w-full h-full object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="animate-slide-in-up">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            A plataforma definitiva para <span className="text-gradient-gold">agências de viagens</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light">
            Eleve a experiência dos seus clientes com ferramentas exclusivas e acesso a pacotes premium.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-3xl p-8 shadow-2xl flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 text-left">Buscar Eventos e Passeios</h3>
              <div className="space-y-6 flex-grow">
                <div className="relative">
                  <Label htmlFor="destino-input" className="block text-white text-sm font-semibold mb-3 text-left flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> Para onde quero ir
                  </Label>
                  <Input type="text" id="destino-input" placeholder="Ex: Rio de Janeiro, Praia, Aventura" value={destino} onChange={(e) => setDestino(e.target.value)} className="bg-slate-800 border-slate-600 rounded-xl px-4 py-4 focus:bg-slate-700 focus:border-primary transition-all h-12 text-base" />
                </div>
                <div className="relative">
                   <Label htmlFor="data-input" className="block text-white text-sm font-semibold mb-3 text-left flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4" /> Quando?
                  </Label>
                  <Input type="date" id="data-input" value={data} onChange={(e) => setData(e.target.value)} className="bg-slate-800 border-slate-600 rounded-xl px-4 py-4 focus:bg-slate-700 focus:border-primary transition-all h-12 text-base" />
                </div>
              </div>
              <Button onClick={() => handleSearchClick('destino')} disabled={isSearching} className="btn-modern animate-pulse-glow w-full mt-8 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-xl text-lg shadow-xl h-14">
                {isSearching ? (
                  <span className="flex items-center justify-center"><Loader2 className="mr-3 h-6 w-6 animate-spin" /> Buscando...</span>
                ) : (
                  <span className="flex items-center justify-center"><Search className="mr-3 h-6 w-6" /> Buscar</span>
                )}
              </Button>
            </div>

            <div className="glass-effect rounded-3xl p-8 shadow-2xl flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 text-left">Encontrar por Categoria</h3>
              <div className="space-y-6 flex-grow">
                <div className="relative">
                  <Label className="block text-white text-sm font-semibold mb-3 text-left flex items-center">
                    <Tags className="mr-2 h-4 w-4" /> Qual tipo de serviço?
                  </Label>
                  <Select value={categoria} onValueChange={setCategoria}>
                    <SelectTrigger className="w-full bg-slate-800 border-slate-600 rounded-xl px-4 py-4 focus:bg-slate-700 focus:border-primary transition-all h-12 text-base">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value} className="focus:bg-slate-700">
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <Label htmlFor="local-input" className="block text-white text-sm font-semibold mb-3 text-left flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> Em qual local?
                  </Label>
                  <Input type="text" id="local-input" placeholder="Ex: São Paulo" value={local} onChange={(e) => setLocal(e.target.value)} className="bg-slate-800 border-slate-600 rounded-xl px-4 py-4 focus:bg-slate-700 focus:border-primary transition-all h-12 text-base" />
                </div>
              </div>
              <Button onClick={() => handleSearchClick('categoria')} disabled={isSearching} variant="secondary" className="btn-modern w-full mt-8 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-xl h-14">
                {isSearching ? (
                   <span className="flex items-center justify-center"><Loader2 className="mr-3 h-6 w-6 animate-spin" /> Filtrando...</span>
                ) : (
                  <span className="flex items-center justify-center"><Filter className="mr-3 h-6 w-6" /> Filtrar</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#como-funciona" className="text-white/80 hover:text-white transition-colors">
          <ChevronDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
}
