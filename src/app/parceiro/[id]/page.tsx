
"use client";

import { useParams } from 'next/navigation';
import { useFirestore, useDoc } from '@/firebase';
import { doc } from 'firebase/firestore';
import type { Partner } from '@/lib/types';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Loader2, MapPin, Tag, Phone, Globe, Send, User, Mail, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMemo, useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { sendTelegramMessage } from '@/ai/flows/send-telegram-message';

export default function PartnerDetailPage() {
  const params = useParams();
  const { id } = params;
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const partnerDocRef = useMemo(() => {
    if (!firestore || !id) return null;
    return doc(firestore, 'partners', id as string);
  }, [firestore, id]);

  const { data: partner, isLoading } = useDoc<Partner>(partnerDocRef);

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const leadMessage = `
Novo Lead Recebido!
-------------------------
**Parceiro:** ${partner?.businessName}
**Interessado:** ${name}
**Email:** ${email}
**Mensagem:**
${message}
    `;

    try {
      const result = await sendTelegramMessage(leadMessage);
      if (result.success) {
        toast({
          title: "Mensagem Enviada!",
          description: "Seu contato foi enviado ao parceiro. Em breve eles responderão você.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Failed to send contact message:", error);
      toast({
        variant: 'destructive',
        title: "Erro ao Enviar",
        description: "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-slate-900 text-white items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-amber-500" />
        <p className="ml-4 text-xl">Carregando informações do parceiro...</p>
      </div>
    );
  }

  if (!partner) {
    return (
      <div className="flex min-h-screen bg-slate-900 text-white items-center justify-center">
        <p className="text-xl">Parceiro não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <Image
              src={partner.image || 'https://picsum.photos/seed/partner-detail/1200/400'}
              alt={partner.businessName}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h1 className="text-5xl font-black text-white">{partner.businessName}</h1>
              <Badge className="mt-2 text-base" variant="secondary">{partner.category.replace(/_/g, ' ')}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="glass-effect p-8 rounded-2xl">
                <CardHeader className='p-0 pb-4'>
                    <CardTitle className="text-2xl font-bold text-white">Sobre o Parceiro</CardTitle>
                </CardHeader>
                <CardContent className='p-0'>
                    <p className="text-slate-300 leading-relaxed">{partner.description || "Nenhuma descrição fornecida."}</p>
                </CardContent>
              </Card>

              {partner.galleryImages && partner.galleryImages.length > 0 && (
                <Card className="glass-effect p-8 rounded-2xl">
                   <CardHeader className='p-0 pb-4'>
                        <CardTitle className="text-2xl font-bold text-white">Galeria de Fotos</CardTitle>
                    </CardHeader>
                  <CardContent className='p-0'>
                   <Carousel className="w-full -mx-4">
                      <CarouselContent className="ml-0">
                        {partner.galleryImages.map((imgUrl, index) => (
                          <CarouselItem key={index} className="md:basis-1/2 pl-4">
                            <div className="p-1">
                               <Image src={imgUrl} alt={`${partner.businessName} - Imagem ${index + 1}`} width={500} height={350} className="rounded-lg object-cover w-full h-64" />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute top-1/2 -left-4 transform -translate-y-1/2" />
                      <CarouselNext className="absolute top-1/2 -right-4 transform -translate-y-1/2" />
                    </Carousel>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <Card className="glass-effect p-8 rounded-2xl">
                 <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-2xl font-bold text-white">Informações</CardTitle>
                </CardHeader>
                 <CardContent className="p-0">
                     <ul className="space-y-4 text-slate-300">
                        <li className="flex items-start">
                            <MapPin className="h-5 w-5 mr-3 mt-1 text-amber-400 shrink-0" />
                            <span>{partner.city}, {partner.state}</span>
                        </li>
                         {partner.contact && (
                            <li className="flex items-start">
                                <Phone className="h-5 w-5 mr-3 mt-1 text-amber-400 shrink-0" />
                                <span>{partner.contact}</span>
                            </li>
                         )}
                         {partner.link && (
                             <li className="flex items-start">
                                <Globe className="h-5 w-5 mr-3 mt-1 text-amber-400 shrink-0" />
                                <a href={partner.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors break-all">{partner.link}</a>
                            </li>
                         )}
                     </ul>
                 </CardContent>
              </Card>

              <Card className="glass-effect p-8 rounded-2xl sticky top-28">
                <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-2xl font-bold text-white">Entre em Contato</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name" className="flex items-center gap-2 mb-1"><User className="h-4 w-4"/>Seu Nome</Label>
                            <Input type="text" name="name" id="name" required className="bg-slate-700 border-slate-600"/>
                        </div>
                        <div>
                            <Label htmlFor="email" className="flex items-center gap-2 mb-1"><Mail className="h-4 w-4"/>Seu E-mail</Label>
                            <Input type="email" name="email" id="email" required className="bg-slate-700 border-slate-600"/>
                        </div>
                        <div>
                            <Label htmlFor="message" className="flex items-center gap-2 mb-1"><MessageSquare className="h-4 w-4"/>Sua Mensagem</Label>
                            <Textarea name="message" id="message" required className="bg-slate-700 border-slate-600" rows={4}/>
                        </div>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                           {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <Send className="mr-2 h-4 w-4" />}
                           {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                        </Button>
                    </form>
                </CardContent>
              </Card>

               {partner.tags && partner.tags.length > 0 && (
                <Card className="glass-effect p-8 rounded-2xl">
                   <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-2xl font-bold text-white">Tags</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                       <div className="flex flex-wrap gap-2">
                            {partner.tags.map((tag, index) => (
                                 <Badge key={index} variant="outline" className="text-sm border-amber-400/50 text-amber-300">
                                    <Tag className="h-3 w-3 mr-2"/>
                                    {tag}
                                </Badge>
                            ))}
                       </div>
                    </CardContent>
                </Card>
               )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
