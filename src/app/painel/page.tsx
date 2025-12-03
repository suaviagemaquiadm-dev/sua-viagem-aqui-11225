
"use client";
import { useState, useMemo, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Bell,
    Plus,
    Route,
    Share2,
    Lightbulb,
    Search,
    Edit,
    Trash,
    Menu,
    LayoutDashboard,
    Heart,
    Map,
    History,
    UserCog,
    MapPin,
    Loader2,
    Eye,
} from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { useUser, useFirestore, useCollection, addDocumentNonBlocking, deleteDocumentNonBlocking, setDocumentNonBlocking } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import type { WishlistItem, Roteiro } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';


const suggestionImages = {
    'Praias no Nordeste': PlaceHolderImages.find(img => img.id === 'suggestion-nordeste')?.imageUrl,
    'Aventuras na Amazônia': PlaceHolderImages.find(img => img.id === 'suggestion-amazonia')?.imageUrl,
    'Culinária em São Paulo': PlaceHolderImages.find(img => img.id === 'suggestion-culinaria-sp')?.imageUrl,
};

const initialSuggestions = [
    { id: 1, interest: 'Praias no Nordeste', notes: 'Perfeito para relaxar e curtir o sol.', image: suggestionImages['Praias no Nordeste'] },
    { id: 2, interest: 'Aventuras na Amazônia', notes: 'Explore a natureza selvagem.', image: suggestionImages['Aventuras na Amazônia'] },
    { id: 3, interest: 'Culinária em São Paulo', notes: 'Descubra sabores incríveis.', image: suggestionImages['Culinária em São Paulo'] },
];

const SidebarContent = () => (
    <nav className="flex flex-col space-y-2 p-4">
        <Link href="/painel" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50 bg-slate-700/50">
            <LayoutDashboard className="mr-3 h-5 w-5" />
            <span>Dashboard</span>
        </Link>
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <Heart className="mr-3 h-5 w-5" />
            <span>Lista de Desejos</span>
        </Link>
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <Map className="mr-3 h-5 w-5" />
            <span>Roteiros Salvos</span>
        </Link>
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <Share2 className="mr-3 h-5 w-5" />
            <span>Compartilhados</span>
        </Link>
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <History className="mr-3 h-5 w-5" />
            <span>Histórico de Buscas</span>
        </Link>
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <UserCog className="mr-3 h-5 w-5" />
            <span>Perfil e Preferências</span>
        </Link>
        <Link href="#" className="flex items-center text-slate-300 hover:text-amber-400 p-2 rounded-lg hover:bg-slate-700/50">
            <Bell className="mr-3 h-5 w-5" />
            <span>Notificações</span>
        </Link>
    </nav>
);

export default function DashboardPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const router = useRouter();
    const { toast } = useToast();
    const [searchQuery, setSearchQuery] = useState('');
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [newItem, setNewItem] = useState({ interest: '', notes: '', plannedDate: '' });
    
    const [editingItem, setEditingItem] = useState<WishlistItem | null>(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [viewingRoteiro, setViewingRoteiro] = useState<Roteiro | null>(null);


    const wishlistCollectionRef = useMemo(() => {
        if (!user || !firestore) return null;
        return collection(firestore, 'users', user.uid, 'wishlist');
    }, [firestore, user]);

    const roteirosCollectionRef = useMemo(() => {
        if (!user || !firestore) return null;
        return collection(firestore, 'users', user.uid, 'roteiros');
    }, [firestore, user]);

    const { data: wishlist, isLoading: isWishlistLoading } = useCollection<WishlistItem>(wishlistCollectionRef);
    const { data: roteiros, isLoading: areRoteirosLoading } = useCollection<Roteiro>(roteirosCollectionRef);


    const filteredWishlist = useMemo(() => {
        if (!wishlist) return [];
        return wishlist.filter(item =>
            item.interest.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [wishlist, searchQuery]);

    const handleAddSuggestion = (suggestion: typeof initialSuggestions[0]) => {
        if (!wishlistCollectionRef || !user) {
            toast({ variant: 'destructive', title: 'Erro', description: 'Você precisa estar logado.' });
            return;
        }
        
        if (wishlist?.some(item => item.interest === suggestion.interest)) {
            toast({
                variant: 'default',
                title: 'Item já existe',
                description: `"${suggestion.interest}" já está na sua lista.`,
            });
            return;
        }

        const itemToAdd: Omit<WishlistItem, 'id' | 'createdAt'> = {
            interest: suggestion.interest,
            notes: suggestion.notes,
            userId: user.uid,
            imageUrl: suggestion.image || `https://picsum.photos/seed/${Math.random()}/400/200`
        };

        addDocumentNonBlocking(wishlistCollectionRef, itemToAdd);
        toast({
            title: 'Sucesso!',
            description: `"${suggestion.interest}" foi adicionado à sua lista de desejos.`
        });
    }

    const handleAddItem = (e: FormEvent) => {
        e.preventDefault();
        if (!wishlistCollectionRef || !user) {
            toast({ variant: 'destructive', title: 'Erro', description: 'Você precisa estar logado para adicionar itens.' });
            return;
        }
        if (!newItem.interest) {
             toast({ variant: 'destructive', title: 'Campo obrigatório', description: 'Por favor, preencha o campo "Interesse".' });
            return;
        }

        const itemToAdd: Omit<WishlistItem, 'id' | 'createdAt'> = {
            ...newItem,
            userId: user.uid,
            imageUrl: `https://picsum.photos/seed/${Math.random()}/400/200`
        };
        
        addDocumentNonBlocking(wishlistCollectionRef, itemToAdd);
        toast({
            title: 'Sucesso!',
            description: `"${newItem.interest}" foi adicionado à sua lista de desejos.`
        });
        setNewItem({ interest: '', notes: '', plannedDate: '' });
        setIsAddDialogOpen(false);
    };
    
    const handleDeleteItem = (itemId: string) => {
        if (!firestore || !user) return;
        
        const docRef = doc(firestore, 'users', user.uid, 'wishlist', itemId);
        deleteDocumentNonBlocking(docRef);
        toast({
            title: 'Item Removido',
            description: 'Seu desejo foi removido da lista.',
        });
    };
    
    const handleDeleteRoteiro = (roteiroId: string) => {
        if (!firestore || !user) return;
        const docRef = doc(firestore, 'users', user.uid, 'roteiros', roteiroId);
        deleteDocumentNonBlocking(docRef);
        toast({
            title: 'Roteiro Removido',
            description: 'O roteiro foi removido da sua lista.',
        });
    };
    
    const handleEditClick = (item: WishlistItem) => {
        setEditingItem(item);
        setIsEditDialogOpen(true);
    };

    const handleUpdateItem = (e: FormEvent) => {
        e.preventDefault();
        if (!firestore || !user || !editingItem) {
             toast({ variant: 'destructive', title: 'Erro', description: 'Não foi possível atualizar o item.' });
            return;
        }

        const docRef = doc(firestore, 'users', user.uid, 'wishlist', editingItem.id);
        
        // Explicitly create an object with only the fields to update
        const { id, ...dataToUpdate } = editingItem;
        
        setDocumentNonBlocking(docRef, dataToUpdate, { merge: true });
        toast({
            title: 'Sucesso!',
            description: `"${editingItem.interest}" foi atualizado.`
        });
        setIsEditDialogOpen(false);
        setEditingItem(null);
    };


    if (isUserLoading) {
        return (
            <div className="flex min-h-screen bg-slate-900 text-white items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-amber-500" />
                <p className="ml-4 text-xl">Carregando painel...</p>
            </div>
        );
    }

    if (!user) {
         router.push('/login?redirect=/painel');
         return null;
    }
    
    return (
        <div className="flex min-h-screen bg-slate-900 text-white">
            <aside className="hidden lg:block w-64 bg-slate-800/90 backdrop-blur-md border-r border-slate-700">
                 <div className="flex items-center p-4 mb-4 border-b border-slate-700">
                    <UserCog className="text-amber-400 h-6 w-6 mr-3" />
                    <span className="text-xl font-bold text-white">Meu Painel</span>
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
                                        <UserCog className="text-amber-400 h-6 w-6 mr-3" />
                                        <span className="text-xl font-bold text-white">Meu Painel</span>
                                    </SheetTitle>
                                </SheetHeader>
                                <SidebarContent />
                            </SheetContent>
                        </Sheet>
                        <h1 className="text-2xl md:text-3xl font-bold text-white">Bem-vindo, {user?.displayName || 'Viajante'}!</h1>
                    </div>
                     <div className="flex items-center space-x-4">
                        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                           <DialogTrigger asChild>
                                <Button className="bg-amber-500 text-slate-900 hover:bg-amber-400">
                                    <Plus className="mr-2 h-4 w-4" /> Adicionar Interesse
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-slate-800 border-slate-700">
                                <DialogHeader>
                                    <DialogTitle>Adicionar à Lista de Desejos</DialogTitle>
                                    <DialogDescription>
                                        Preencha as informações sobre seu novo desejo de viagem.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleAddItem}>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="interest" className="text-right">Interesse</Label>
                                            <Input id="interest" value={newItem.interest} onChange={(e) => setNewItem({...newItem, interest: e.target.value})} className="col-span-3 bg-slate-700 border-slate-600" required/>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="notes" className="text-right">Notas</Label>
                                            <Textarea id="notes" value={newItem.notes} onChange={(e) => setNewItem({...newItem, notes: e.target.value})} className="col-span-3 bg-slate-700 border-slate-600" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="plannedDate" className="text-right">Data</Label>
                                            <Input id="plannedDate" type="date" value={newItem.plannedDate} onChange={(e) => setNewItem({...newItem, plannedDate: e.target.value})} className="col-span-3 bg-slate-700 border-slate-600" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button type="button" variant="secondary">Cancelar</Button>
                                        </DialogClose>
                                        <Button type="submit">Adicionar</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                        <div className="relative">
                            <Bell className="text-amber-400 h-6 w-6 cursor-pointer" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">2</span>
                        </div>
                        <Image src={user?.photoURL || "https://picsum.photos/seed/user-avatar/40/40"} alt="Perfil" width={40} height={40} className="rounded-full" />
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="glass-effect card-hover">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Destinos Salvos</CardTitle>
                            <MapPin className="h-4 w-4 text-amber-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{wishlist?.length ?? 0}</div>
                            <p className="text-xs text-slate-400">na sua lista de desejos</p>
                        </CardContent>
                    </Card>
                     <Card className="glass-effect card-hover">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Roteiros Criados</CardTitle>
                            <Route className="h-4 w-4 text-amber-400" />
                        </CardHeader>
                        <CardContent>
                             <div className="text-2xl font-bold">{roteiros?.length ?? 0}</div>
                            <p className="text-xs text-slate-400">roteiros salvos pela IA</p>
                        </CardContent>
                    </Card>
                    <Card className="glass-effect card-hover">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Itens Compartilhados</CardTitle>
                            <Share2 className="h-4 w-4 text-amber-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-slate-400">você ainda não compartilhou</p>
                        </CardContent>
                    </Card>
                    <Card className="glass-effect card-hover">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Sugestões</CardTitle>
                            <Lightbulb className="h-4 w-4 text-amber-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-green-400">Baseado no seu perfil</p>
                        </CardContent>
                    </Card>
                </div>
                
                 <Card className="glass-effect mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-white">Sugestões Baseadas nas Suas Preferências</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {initialSuggestions.map(item => (
                             <Card key={item.id} className="card-hover bg-slate-800 overflow-hidden">
                                <Image src={item.image || "https://picsum.photos/seed/default/400/200"} alt={item.interest} width={400} height={200} className="w-full h-40 object-cover" />
                                <CardContent className="p-4">
                                    <h3 className="text-lg font-bold text-white">{item.interest}</h3>
                                    <p className="text-sm text-slate-400">{item.notes}</p>
                                    <Button variant="link" className="text-amber-400 p-0 mt-2 h-auto" onClick={() => handleAddSuggestion(item)}>Adicionar à Lista</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>

                {/* Roteiros Salvos */}
                <Card className="glass-effect mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-white">Seus Roteiros Salvos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {areRoteirosLoading ? (
                            <div className="flex items-center justify-center h-20">
                                <Loader2 className="h-6 w-6 animate-spin text-amber-500" />
                                <p className="ml-3 text-slate-400">Carregando roteiros...</p>
                            </div>
                        ) : roteiros && roteiros.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {roteiros.map(roteiro => (
                                    <Card key={roteiro.id} className="card-hover bg-slate-800 flex flex-col">
                                        <CardHeader>
                                            <CardTitle className="text-lg truncate">{roteiro.prompt}</CardTitle>
                                            <CardDescription>Roteiro gerado por IA</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-slate-400 line-clamp-3">{roteiro.itineraryData}</p>
                                        </CardContent>
                                        <CardFooter className="p-4 flex justify-end gap-2">
                                            <Button variant="outline" size="sm" onClick={() => setViewingRoteiro(roteiro)}>
                                                <Eye className="mr-2 h-4 w-4"/> Ver
                                            </Button>
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="destructive" size="sm">
                                                        <Trash className="mr-2 h-4 w-4"/> Excluir
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent className="bg-slate-800 border-slate-700">
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Excluir Roteiro?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Esta ação não pode ser desfeita. Isso removerá permanentemente o roteiro.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => handleDeleteRoteiro(roteiro.id)}>Excluir</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-10">
                                <p className="text-slate-400">Você ainda não salvou nenhum roteiro.</p>
                                <Button asChild variant="link" className="mt-2 text-amber-400">
                                    <Link href="/#ferramentas">Criar seu primeiro roteiro com IA</Link>
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>


                <Card className="glass-effect">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-2xl font-bold text-white">Sua Lista de Desejos</CardTitle>
                            <div className="relative w-full max-w-xs">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input 
                                    type="text" 
                                    placeholder="Buscar na lista..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-slate-800 border-slate-600 pl-10"
                                />
                            </div>
                        </div>
                    </CardHeader>
                     <CardContent>
                        {isWishlistLoading ? (
                             <div className="flex items-center justify-center h-40">
                                <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
                                <p className="ml-3 text-slate-400">Carregando sua lista de desejos...</p>
                            </div>
                        ) : filteredWishlist.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {filteredWishlist.map(item => (
                                    <Card key={item.id} className="card-hover bg-slate-800 overflow-hidden">
                                        <Image src={item.imageUrl || "https://picsum.photos/seed/default-wish/400/200"} alt={item.interest} width={400} height={200} className="w-full h-40 object-cover" />
                                        <CardContent className="p-4">
                                            <h3 className="text-lg font-bold text-white">{item.interest}</h3>
                                            {item.notes && <p className="text-sm text-slate-400">{item.notes}</p>}
                                            {item.plannedDate && <p className="text-xs text-amber-400 mt-2">Planejado para: {new Date(item.plannedDate).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</p>}
                                            <div className="flex space-x-2 mt-4">
                                                <Button variant="outline" size="icon" className="h-8 w-8 border-slate-600 hover:bg-slate-700" onClick={() => handleEditClick(item)}>
                                                    <Edit className="h-4 w-4 text-amber-400" />
                                                </Button>
                                                <Button variant="outline" size="icon" className="h-8 w-8 border-slate-600 hover:bg-slate-700">
                                                    <Share2 className="h-4 w-4 text-blue-400" />
                                                </Button>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="outline" size="icon" className="h-8 w-8 border-red-500/50 hover:bg-red-500/20">
                                                            <Trash className="h-4 w-4 text-red-400" />
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent className="bg-slate-800 border-slate-700">
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Essa ação não pode ser desfeita. Isso irá remover permanentemente o item
                                                                "{item.interest}" da sua lista de desejos.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => handleDeleteItem(item.id)}>Continuar</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                             <div className="text-center py-10">
                                <p className="text-slate-400">Sua lista de desejos está vazia.</p>
                                <Button className="mt-4 bg-amber-500 hover:bg-amber-400 text-slate-900" onClick={() => setIsAddDialogOpen(true)}>
                                    <Plus className="mr-2 h-4 w-4" /> Adicionar Primeiro Desejo
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>

                 {/* Edit Dialog */}
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                    <DialogContent className="sm:max-w-[425px] bg-slate-800 border-slate-700">
                        <DialogHeader>
                            <DialogTitle>Editar Item da Lista de Desejos</DialogTitle>
                            <DialogDescription>
                                Modifique as informações do seu desejo de viagem.
                            </DialogDescription>
                        </DialogHeader>
                        {editingItem && (
                            <form onSubmit={handleUpdateItem}>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="edit-interest" className="text-right">Interesse</Label>
                                        <Input id="edit-interest" value={editingItem.interest} onChange={(e) => setEditingItem({...editingItem, interest: e.target.value})} className="col-span-3 bg-slate-700 border-slate-600" required/>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="edit-notes" className="text-right">Notas</Label>
                                        <Textarea id="edit-notes" value={editingItem.notes || ''} onChange={(e) => setEditingItem({...editingItem, notes: e.target.value})} className="col-span-3 bg-slate-700 border-slate-600" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="edit-plannedDate" className="text-right">Data</Label>
                                        <Input id="edit-plannedDate" type="date" value={editingItem.plannedDate || ''} onChange={(e) => setEditingItem({...editingItem, plannedDate: e.target.value})} className="col-span-3 bg-slate-700 border-slate-600" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary" onClick={() => setIsEditDialogOpen(false)}>Cancelar</Button>
                                    </DialogClose>
                                    <Button type="submit">Salvar Alterações</Button>
                                </DialogFooter>
                            </form>
                        )}
                    </DialogContent>
                </Dialog>

                {/* View Roteiro Dialog */}
                <Dialog open={!!viewingRoteiro} onOpenChange={(isOpen) => !isOpen && setViewingRoteiro(null)}>
                    <DialogContent className="sm:max-w-2xl bg-slate-900 border-slate-700">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-primary">Roteiro para: {viewingRoteiro?.prompt}</DialogTitle>
                        <DialogDescription>
                        Este foi o roteiro gerado pela nossa IA para você.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="prose prose-invert prose-p:text-slate-300 prose-headings:text-white max-h-[60vh] overflow-y-auto rounded-md border border-slate-700 p-4 bg-slate-800/50">
                        <pre className="text-wrap whitespace-pre-wrap font-sans">{viewingRoteiro?.itineraryData}</pre>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setViewingRoteiro(null)} variant="secondary">Fechar</Button>
                        <Button onClick={() => {
                            if (viewingRoteiro) {
                                navigator.clipboard.writeText(viewingRoteiro.itineraryData);
                                toast({ title: "Copiado!", description: "Roteiro copiado para a área de transferência." });
                            }
                        }}>Copiar Roteiro</Button>
                    </DialogFooter>
                    </DialogContent>
                </Dialog>

            </main>
        </div>
    );
}
