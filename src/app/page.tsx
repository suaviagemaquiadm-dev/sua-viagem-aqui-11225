
"use client";

import { useState, useMemo, useCallback } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { WeatherWidget } from '@/components/landing/weather-widget';
import { HowItWorks } from '@/components/landing/how-it-works';
import { AgencyCarousel } from '@/components/landing/agency-carousel';
import { PartnerCarousel } from '@/components/landing/partner-carousel';
import { PartnerGrid } from '@/components/landing/partner-grid';
import { Testimonials } from '@/components/landing/testimonials';
import { ItineraryBuilder } from '@/components/landing/itinerary-builder';
import { TravelerPlans } from '@/components/landing/traveler-plans';
import { Community } from '@/components/landing/community';
import type { Partner } from '@/lib/types';
import { useCollection, useFirestore } from '@/firebase';
import { collection, query, where, getDocs, or } from 'firebase/firestore';

export default function Home() {
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const firestore = useFirestore();

  const partnersCollectionQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'partners'), where('status', '==', 'aprovado'));
  }, [firestore]);

  const { data: partners, isLoading: isLoadingPartners } = useCollection<Partner>(partnersCollectionQuery);

  const agencies = useMemo(() => partners?.filter(p => p.category === 'agencias') ?? [], [partners]);
  const premiumPartners = useMemo(() => partners?.filter(p => p.plan === 'pro') ?? [], [partners]);

  const handleSearch = useCallback(async (searchParams: { destino: string; categoria: string; local: string }) => {
    // This function can be left for future implementation of a dedicated search results page
    // For now, it will do nothing to prevent the chunk loading error.
    if (!firestore) return;
    setIsLoadingSearch(true);

    const searchKeywords = [
        ...searchParams.destino.toLowerCase().split(' ').filter(Boolean),
        ...searchParams.local.toLowerCase().split(' ').filter(Boolean),
    ].filter((value, index, self) => self.indexOf(value) === index); // Unique keywords

    let results: Partner[] = [];
    
    // Firestore query (if keywords are provided)
    if (searchKeywords.length > 0) {
        const q = query(
            collection(firestore, 'partners'),
            where('status', '==', 'aprovado'),
            where('searchTerms', 'array-contains-any', searchKeywords)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() } as Partner);
        });
    }

    // Fallback client-side search
    if (results.length === 0 && partners) {
        const clientSideResults = partners.filter(partner => {
            const partnerText = [
                partner.businessName,
                partner.category.replace(/_/g, ' '),
                partner.city,
                partner.state,
                ...(partner.tags || [])
            ].join(' ').toLowerCase();

            const matchDestino = searchParams.destino ? partnerText.includes(searchParams.destino.toLowerCase()) : true;
            const matchCategoria = searchParams.categoria !== 'todos' ? partner.category === searchParams.categoria : true;
            const matchLocal = searchParams.local ? partnerText.includes(searchParams.local.toLowerCase()) : true;

            return matchDestino && matchCategoria && matchLocal;
        });
        results = clientSideResults;
    }
    
    console.log("Search complete, results:", results);
    alert(`Busca concluída. Encontrados ${results.length} parceiros. A exibição dos resultados em uma nova página pode ser implementada a seguir.`);

    setIsLoadingSearch(false);

  }, [firestore, partners]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <Header />
      <main className="flex-1">
        <HeroSection onSearch={handleSearch} />
        <div id="main-content" className="container mx-auto px-4 py-16">
          <WeatherWidget />
          <HowItWorks />
          <AgencyCarousel agencies={agencies} isLoading={isLoadingPartners} />
          <PartnerCarousel partners={premiumPartners} isLoading={isLoadingPartners} />
          <PartnerGrid partners={partners} isLoading={isLoadingPartners} />
          <Testimonials />
          <ItineraryBuilder />
          <TravelerPlans />
          <Community />
        </div>
      </main>
      <Footer />
    </div>
  );
}
