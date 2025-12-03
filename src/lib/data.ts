
import { PlaceHolderImages } from './placeholder-images';

function getImageUrl(id: string) {
    return PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/default/400/300';
}

export const categories = [
    { value: "todos", label: "Todas as Categorias" },
    { value: "agencias", label: "Agências de Viagens" },
    { value: "aluguel", label: "Aluguel de Carros, Motos e Bicicletas" },
    { value: "bares", label: "Bares e Vida Noturna" },
    { value: "camping", label: "Camping" },
    { value: "ecoturismo", label: "Ecoturismo e Aventura" },
    { value: "experiencias", label: "Experiências Culturais" },
    { value: "fotografos", label: "Fotógrafos de Viagem" },
    { value: "guias", label: "Guias de Turismo" },
    { value: "hospedagem", label: "Hotéis e Pousadas" },
    { value: "mergulho", label: "Mergulho" },
    { value: "passeios_barco", label: "Passeios de Barco / Lancha" },
    { value: "restaurantes", label: "Restaurantes" },
    { value: "transfer", label: "Transfer e Receptivo" },
    { value: "turismo_rural", label: "Turismo Rural" },
];

export const testimonialsData = [
    {
        img: 'https://picsum.photos/seed/user1/50/50',
        alt: 'Maria S.',
        name: 'Maria S.',
        title: 'Pousada Aconchego',
        quote: '"Desde que entramos na plataforma, nossa taxa de ocupação aumentou em 30%. O acesso direto às agências premium fez toda a diferença!"'
    },
    {
        img: 'https://picsum.photos/seed/user2/50/50',
        alt: 'Ana L.',
        name: 'Ana L.',
        title: 'Viajante Verificada',
        quote: '"Encontrei um guia de turismo local incrível através da plataforma para o meu passeio na Amazônia. Foi uma experiência autêntica que eu não teria achado em nenhum outro lugar!"'
    },
    {
        img: 'https://picsum.photos/seed/user3/50/50',
        alt: 'João P.',
        name: 'João P.',
        title: 'Guia de Ecoturismo',
        quote: '"A visibilidade que o plano Basic me deu foi incrível. Recebo contatos de agências que antes eu nem sonhava em alcançar. Recomendo!"'
    },
    {
        img: 'https://picsum.photos/seed/user4/50/50',
        alt: 'Carlos F.',
        name: 'Carlos F.',
        title: 'Viajante Verificado',
        quote: '"Planejei toda a minha viagem de lua de mel usando os parceiros da plataforma. Desde a pousada romântica até os restaurantes, tudo foi perfeito. Facilitou muito a minha vida."'
    }
];

export const footerLinks = {
    quickLinks: [
        { href: "#", label: "Sobre Nós" },
        { href: "#", label: "Condições de Uso" },
        { href: "#", label: "Política de Privacidade" },
        { href: "#", label: "Código de Conduta" },
    ],
    socials: [
        { href: "#", icon: "Facebook" as const },
        { href: "#", icon: "Instagram" as const },
        { href: "#", icon: "Youtube" as const }, // Tiktok icon replacement
        { href: "#", icon: "Twitter" as const },
    ]
}
