

export type WishlistItem = {
    id: string;
    interest: string;
    notes?: string;
    plannedDate?: string;
    imageUrl?: string;
    userId: string;
    createdAt?: any;
};

export type Partner = {
    id: string;
    businessName: string;
    category: string;
    city: string;
    state: string;
    status: 'aprovado' | 'pendente' | 'rejeitado';
    userId: string;
    image?: string;
    description?: string;
    contact?: string;
    link?: string;
    tags?: string[];
    searchTerms?: string[];
    galleryImages?: string[];
    plan?: string;
};

export type Roteiro = {
    id: string;
    prompt: string;
    itineraryData: string;
    userId: string;
    createdAt?: any;
}
