

"use client";

import { useState, useEffect, useRef, FormEvent, useMemo } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Bell,
  Plus,
  Menu,
  LayoutDashboard,
  Megaphone,
  Users,
  Settings,
  Eye,
  Star,
  Trash,
  Edit,
  Mail,
  BarChart,
  Loader2,
  AlertCircle,
  BadgeCheck,
  Upload,
  TrendingUp,
  Crown,
  Copy,
} from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, DoughnutController, PieController } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import { cn } from '@/lib/utils';
import { categories } from '@/lib/data';
import { useUser, useFirestore, useCollection, addDocumentNonBlocking, setDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase';
import { useRouter } from 'next/navigation';
import { collection, query, where, doc } from 'firebase/firestore';
import type { Partner } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { sendTelegramMessage } from '@/ai/flows/send-telegram-message';
import { getPerformanceData, getAudienceData } from '@/lib/performance-data';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, DoughnutController, PieController);

const chartOptions = (title: string) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
            labels: { color: 'hsl(var(--muted-foreground))' }
        },
        title: {
            display: false,
            text: title,
        },
    },
    scales: {
        x: { 
            ticks: { color: 'hsl(var(--muted-foreground))' },
            grid: { color: 'hsl(var(--border) / 0.5)'}
        },
        y: { 
            ticks: { color: 'hsl(var(--muted-foreground))' },
            grid: { color: 'hsl(var(--border) / 0.5)'}
        }
    }
});


const SidebarContent = () => (
    <nav className="flex flex-col space-y-2 p-4">
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg bg-slate-700/50">
            <LayoutDashboard className="mr-3 h-5 w-5" />
            <span>Dashboard</span>
        </Link>
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <Megaphone className="mr-3 h-5 w-5" />
            <span>Meus Anúncios</span>
        </Link>
         <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <BarChart className="mr-3 h-5 w-5" />
            <span>Desempenho</span>
        </Link>
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <Users className="mr-3 h-5 w-5" />
            <span>Contatos Recebidos</span>
        </Link>
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <Settings className="mr-3 h-5 w-5" />
            <span>Configurações</span>
        </Link>
    </nav>
);

export default function AdvertiserDashboardPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const router = useRouter();
    const { toast } = useToast();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAd, setEditingAd] = useState<Partner | null>(null);
    const [formState, setFormState] = useState<{
        category: string;
        plan: string;
    }>({ category: '', plan: 'free' });

    const formRef = useRef<HTMLFormElement>(null);
    const emailTemplateRef = useRef<HTMLPreElement>(null);
    
    const partnersCollectionQuery = useMemo(() => {
        if (!user || !firestore) return null;
        return query(collection(firestore, 'partners'), where('userId', '==', user.uid));
    }, [firestore, user]);

    const { data: ads, isLoading: isAdsLoading } = useCollection<Partner>(partnersCollectionQuery);

    const openModal = (ad: Partner | null = null) => {
        setEditingAd(ad);
        setFormState({
            category: ad?.category || '',
            plan: ad?.plan || 'free',
        });
        setIsModalOpen(true);
    };

    const handleCopyEmail = () => {
        if (emailTemplateRef.current) {
            navigator.clipboard.writeText(emailTemplateRef.current.innerText);
            toast({
                title: 'Texto Copiado!',
                description: 'O modelo de e-mail foi copiado para sua área de transferência.',
            });
        }
    };
    
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!firestore || !user) {
            toast({ variant: 'destructive', title: 'Erro', description: 'Você precisa estar logado para gerenciar anúncios.' });
            return;
        }

        const formData = new FormData(e.currentTarget);
        const [city, state] = (formData.get('localizacao') as string).split(',').map(s => s.trim());
        const businessName = formData.get('nome-negocio') as string;
        const description = formData.get('description') as string;
        const tags = (formData.get('tags') as string).split(',').map(t => t.trim()).filter(Boolean);
        const galleryImages = (formData.get('galleryImages') as string)
            .split('\n')
            .map(url => url.trim())
            .filter(Boolean);

        const categoryLabel = categories.find(c => c.value === formState.category)?.label || '';
        
        const searchTerms = [
            ...businessName.toLowerCase().split(' '),
            ...categoryLabel.toLowerCase().split(' '),
            city.toLowerCase(),
            state.toLowerCase(),
            ...tags.map(t => t.toLowerCase())
        ].filter((value, index, self) => self.indexOf(value) === index && value.length > 1);


        const adData: Omit<Partner, 'id' | 'userId' | 'image'> = {
            businessName,
            category: formState.category,
            city,
            state,
            status: editingAd ? editingAd.status : 'pendente',
            description,
            tags,
            galleryImages,
            searchTerms,
            plan: formState.plan,
        };

        if (editingAd) {
            const docRef = doc(firestore, 'partners', editingAd.id);
            setDocumentNonBlocking(docRef, adData, { merge: true });
            toast({ title: 'Sucesso!', description: 'Anúncio atualizado.'});
        } else {
            const partnersCollectionRef = collection(firestore, 'partners');
            const newAdData = {
                ...adData,
                userId: user.uid,
                image: `https://picsum.photos/seed/${Math.random()}/400/300`,
            };
            addDocumentNonBlocking(partnersCollectionRef, newAdData);
            toast({ title: 'Sucesso!', description: 'Novo anúncio criado e enviado para aprovação.'});
            
            if (newAdData.status === 'pendente') {
                sendTelegramMessage(`Novo anúncio pendente de aprovação: ${newAdData.businessName}`);
            }
        }
        setIsModalOpen(false);
        setEditingAd(null);
    };

    const deleteAd = async (id: string) => {
        if (!firestore || !user) return;
        const docRef = doc(firestore, 'partners', id);
        deleteDocumentNonBlocking(docRef);
        toast({ title: 'Anúncio removido', description: 'Seu anúncio foi removido da plataforma.' });
    };
    
    useEffect(() => {
        if (isModalOpen && formRef.current) {
            if (editingAd) {
                (formRef.current.elements.namedItem('nome-negocio') as HTMLInputElement).value = editingAd.businessName;
                (formRef.current.elements.namedItem('localizacao') as HTMLInputElement).value = `${editingAd.city}, ${editingAd.state}`;
                (formRef.current.elements.namedItem('description') as HTMLTextAreaElement).value = editingAd.description || '';
                (formRef.current.elements.namedItem('tags') as HTMLInputElement).value = (editingAd.tags || []).join(', ');
                (formRef.current.elements.namedItem('galleryImages') as HTMLTextAreaElement).value = (editingAd.galleryImages || []).join('\n');
            } else {
                formRef.current.reset();
                 setFormState({ category: '', plan: 'free' });
            }
        }
    }, [isModalOpen, editingAd]);
    
    // Add a default ad if user is loaded and has no ads
    useEffect(() => {
        if (!isAdsLoading && ads?.length === 0 && firestore && user) {
             const partnersCollectionRef = collection(firestore, 'partners');
             const exampleAd: Omit<Partner, 'id'> = {
                businessName: "Agência de Exemplo Aventura",
                category: "ecoturismo",
                city: "Qualquer Cidade",
                state: "QC",
                status: 'aprovado',
                userId: user.uid,
                plan: "pro",
                description: "Esta é uma descrição de exemplo para uma agência de ecoturismo e aventura. Oferecemos pacotes completos com trilhas, cachoeiras e muito mais!",
                image: `https://picsum.photos/seed/exemplo-aventura/400/300`,
                tags: ["trilha", "natureza", "aventura", "cachoeira"],
                galleryImages: [
                    `https://picsum.photos/seed/exemplo-galeria-1/500/350`,
                    `https://picsum.photos/seed/exemplo-galeria-2/500/350`,
                    `https://picsum.photos/seed/exemplo-galeria-3/500/350`,
                ],
                searchTerms: ["agência", "exemplo", "aventura", "ecoturismo", "qualquer", "cidade", "qc", "trilha", "natureza", "cachoeira"],
            };
            addDocumentNonBlocking(partnersCollectionRef, exampleAd);
        }
    }, [isAdsLoading, ads, firestore, user]);

    if (isUserLoading) {
        return (
            <div className="flex min-h-screen bg-slate-900 text-white items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-amber-500" />
                <p className="ml-4 text-xl">Carregando painel...</p>
            </div>
        );
    }

    if (!user) {
         router.push('/login?redirect=/painel-anunciante');
         return null;
    }

    const getStatusClass = (status?: string) => {
        switch (status) {
            case 'aprovado': return 'bg-green-500/20 text-green-400';
            case 'pendente': return 'bg-yellow-500/20 text-yellow-400';
            case 'rejeitado': return 'bg-red-500/20 text-red-400';
            default: return 'bg-slate-500/20 text-slate-400';
        }
    };
    
    const performanceData = useMemo(() => getPerformanceData(), []);
    const audienceData = useMemo(() => getAudienceData(), []);

    return (
        <div className="flex min-h-screen bg-slate-900 text-white">
            <aside className="hidden lg:block w-64 bg-slate-800/90 backdrop-blur-md border-r border-slate-700">
                 <div className="flex items-center p-4 mb-4 border-b border-slate-700">
                    <Megaphone className="text-amber-400 h-6 w-6 mr-3" />
                    <span className="text-xl font-bold text-white">Painel Anunciante</span>
                </div>
                <SidebarContent />
            </aside>
            <main className="flex-1 p-4 md:p-8">
                <header className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="bg-slate-800/90 backdrop-blur-md border-r border-slate-700 p-0">
                                 <SheetHeader className="p-4 mb-4 border-b border-slate-700">
                                    <SheetTitle className="flex items-center">
                                        <Megaphone className="text-amber-400 h-6 w-6 mr-3" />
                                        <span className="text-xl font-bold text-white">Painel Anunciante</span>
                                    </SheetTitle>
                                 </SheetHeader>
                                <SidebarContent />
                            </SheetContent>
                        </Sheet>
                        <h1 className="text-xl md:text-3xl font-bold text-white">Gerencie Seus Anúncios</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button onClick={() => openModal()} className="bg-amber-500 text-slate-900 hover:bg-amber-400">
                            <Plus className="mr-2 h-4 w-4" /> Novo Anúncio
                        </Button>
                        <div className="relative">
                            <Bell className="text-amber-400 h-6 w-6 cursor-pointer" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">2</span>
                        </div>
                        <Image src={user.photoURL || "https://picsum.photos/seed/advertiser-avatar/40/40"} alt="Perfil" width={40} height={40} className="rounded-full" />
                    </div>
                </header>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="glass-effect card-hover">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Anúncios Aprovados</CardTitle>
                            <BadgeCheck className="h-4 w-4 text-amber-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{ads?.filter(ad => ad.status === 'aprovado').length ?? 0}</div>
                            <p className="text-xs text-slate-400">de {ads?.length ?? 0} no total</p>
                        </CardContent>
                    </Card>
                     <Card className="glass-effect card-hover">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Visualizações de Busca</CardTitle>
                            <Eye className="h-4 w-4 text-amber-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">15k</div>
                            <p className="text-xs text-green-400">+10% este mês</p>
                        </CardContent>
                    </Card>
                    <Card className="glass-effect card-hover">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Conversão de Perfil</CardTitle>
                            <TrendingUp className="h-4 w-4 text-amber-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1.6%</div>
                            <p className="text-xs text-green-400">+0.1% este mês</p>
                        </CardContent>
                    </Card>
                     <Card className="glass-effect card-hover">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Contatos</CardTitle>
                            <Mail className="h-4 w-4 text-amber-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">250</div>
                             <p className="text-xs text-green-400">+15% este mês</p>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-effect p-6">
                        <CardTitle className="text-xl font-bold text-white mb-4">Desempenho dos Anúncios</CardTitle>
                        <div className="h-[300px]">
                           <Line data={performanceData} options={chartOptions('Tendências de Desempenho')} />
                        </div>
                    </Card>
                    <Card className="glass-effect p-6">
                        <CardTitle className="text-xl font-bold text-white mb-4">Distribuição de Audiência</CardTitle>
                         <div className="h-[300px] flex items-center justify-center">
                           <Pie data={audienceData} options={{...chartOptions('Distribuição de Audiência'), maintainAspectRatio: false, plugins: { legend: { position: 'right' as const, labels: { color: 'hsl(var(--muted-foreground))' } }}}} />
                        </div>
                    </Card>
                </div>

                <Card className="glass-effect mb-8">
                    <CardHeader className="flex flex-row justify-between items-start">
                        <div>
                            <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary" />
                                Modelo de E-mail para Convite
                            </CardTitle>
                            <CardDescription>Use este texto para convidar novos parceiros para a plataforma.</CardDescription>
                        </div>
                        <Button variant="outline" size="sm" onClick={handleCopyEmail}>
                            <Copy className="mr-2 h-4 w-4" />
                            Copiar Texto
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <pre ref={emailTemplateRef} className="text-sm text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-700 whitespace-pre-wrap font-sans">
                            {`Assunto: 🤝 Convite exclusivo: Seja um dos primeiros parceiros da Sua Viagem Aqui

Olá [Nome], tudo bem?

Meu nome é [Seu Nome], sou fundador da Sua Viagem Aqui — uma nova forma de viajantes encontrarem só quem realmente entrega em destinos como [Destino que eles atuam].

Vi seu trabalho com [mencione algo específico: ex: “os roteiros de ecoturismo em Chapada”] e pensei: “Esse é exatamente o tipo de parceiro que queremos.”

Queremos te convidar para ser um dos 10 primeiros parceiros, com:
✅ Perfil gratuito por 3 meses (plano Pro)
✅ Destaque na busca por “[Destino] + [Serviço]”
✅ Inclusão no nosso roteiro “Destinos Confiáveis”

Em troca? Só pedimos:
🔄 Um feedback rápido por semana (2 min, por WhatsApp)
📸 Uma foto sua no destino (para humanizar o perfil)

Interessado? Basta responder “✅ Sim” — e te envio o link de cadastro em 2 minutos.

Com admiração,
[Seu Nome]
Fundador | Sua Viagem Aqui
“Conectando viajantes a quem realmente conhece o caminho.”`}
                        </pre>
                    </CardContent>
                </Card>


                <Card className="glass-effect">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-white">Seus Anúncios</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isAdsLoading ? (
                            <div className="flex items-center justify-center h-40">
                                <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
                                <p className="ml-3 text-slate-400">Carregando seus anúncios...</p>
                            </div>
                        ) : ads && ads.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {ads.map(ad => (
                                    <Card key={ad.id} className="bg-slate-800 border-slate-700 overflow-hidden flex flex-col group">
                                        <div className="relative">
                                            <Image 
                                                src={ad.image || 'https://picsum.photos/seed/default-ad/400/300'} 
                                                alt={ad.businessName} 
                                                width={400} 
                                                height={200}
                                                className="w-full h-40 object-cover" 
                                            />
                                            <div className={cn("absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold", getStatusClass(ad.status))}>
                                                {ad.status}
                                            </div>
                                            {ad.plan === 'pro' && (
                                                <div className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold bg-amber-500 text-slate-900 flex items-center gap-1">
                                                    <Crown className="w-3 h-3"/> PRO
                                                </div>
                                            )}
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="truncate">{ad.businessName}</CardTitle>
                                            <CardDescription className="capitalize">{ad.category.replace(/_/g, ' ')}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-slate-400">{ad.city}, {ad.state}</p>
                                        </CardContent>
                                        <CardFooter className="p-4 bg-slate-800/50 flex justify-end gap-2">
                                            <Button variant="outline" size="icon" className="h-8 w-8 border-slate-600 hover:bg-slate-700" onClick={() => openModal(ad)}>
                                                <Edit className="h-4 w-4 text-amber-400" />
                                            </Button>
                                             <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="destructive" size="icon" className="h-8 w-8">
                                                        <Trash className="h-4 w-4" />
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent className="bg-slate-800 border-slate-700">
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Essa ação não pode ser desfeita. Isso irá remover permanentemente o anúncio "{ad.businessName}".
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => deleteAd(ad.id)}>Deletar</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-slate-800/50 rounded-lg">
                                <AlertCircle className="mx-auto h-12 w-12 text-slate-500 mb-4" />
                                <h3 className="text-xl font-bold text-white">Nenhum anúncio encontrado</h3>
                                <p className="text-slate-400 mt-2 mb-6">Parece que você ainda não criou nenhum anúncio.</p>
                                <Button className="bg-amber-500 hover:bg-amber-400 text-slate-900" onClick={() => openModal(null)}>
                                    <Plus className="mr-2 h-4 w-4" /> Criar Primeiro Anúncio
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </main>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="bg-slate-800 border-slate-700 max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-white">{editingAd ? 'Editar Anúncio' : 'Novo Anúncio'}</DialogTitle>
                    </DialogHeader>
                     <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4 pt-4">
                        <div>
                            <Label htmlFor="nome-negocio" className="text-slate-300">Nome do Negócio *</Label>
                            <Input type="text" id="nome-negocio" name="nome-negocio" required className="mt-1 bg-slate-700 border-slate-600" defaultValue={editingAd?.businessName} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="categoria" className="text-slate-300">Categoria *</Label>
                                <Select name="categoria" required value={formState.category} onValueChange={(value) => setFormState(s => ({ ...s, category: value }))}>
                                    <SelectTrigger className="mt-1 bg-slate-700 border-slate-600">
                                        <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-600">
                                        {categories.filter(c => c.value !== 'todos').map((cat) => (
                                            <SelectItem key={cat.value} value={cat.value} className="focus:bg-slate-700">
                                                {cat.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                             <div>
                                <Label htmlFor="plan" className="text-slate-300">Plano *</Label>
                                <Select name="plan" required value={formState.plan} onValueChange={(value) => setFormState(s => ({ ...s, plan: value }))}>
                                    <SelectTrigger className="mt-1 bg-slate-700 border-slate-600">
                                        <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-600">
                                        <SelectItem value="free" className="focus:bg-slate-700">Free</SelectItem>
                                        <SelectItem value="pro" className="focus:bg-slate-700">Pro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                         <div>
                            <Label htmlFor="localizacao" className="text-slate-300">Localização (Cidade, Estado) *</Label>
                            <Input type="text" id="localizacao" name="localizacao" required placeholder="Ex: São Paulo, SP" className="mt-1 bg-slate-700 border-slate-600" defaultValue={editingAd ? `${editingAd.city}, ${editingAd.state}` : ''}/>
                        </div>
                        <div>
                            <Label htmlFor="description" className="text-slate-300">Descrição</Label>
                            <Textarea id="description" name="description" placeholder="Descreva seu negócio, serviços, etc." className="mt-1 bg-slate-700 border-slate-600" defaultValue={editingAd?.description} />
                        </div>
                         <div>
                            <Label htmlFor="tags" className="text-slate-300">Tags (separadas por vírgula)</Label>
                            <Input type="text" id="tags" name="tags" placeholder="Ex: aventura, romântico, família" className="mt-1 bg-slate-700 border-slate-600" defaultValue={editingAd?.tags?.join(', ')} />
                        </div>
                         <div>
                            <Label htmlFor="galleryImages" className="text-slate-300">URLs da Galeria (uma por linha)</Label>
                            <Textarea id="galleryImages" name="galleryImages" placeholder="https://exemplo.com/imagem1.jpg\nhttps://exemplo.com/imagem2.jpg" className="mt-1 bg-slate-700 border-slate-600" rows={4} defaultValue={editingAd?.galleryImages?.join('\n')} />
                        </div>
                         <DialogFooter className="pt-4">
                             <DialogClose asChild>
                                <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                            </DialogClose>
                            <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-slate-900">Salvar</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

    

    