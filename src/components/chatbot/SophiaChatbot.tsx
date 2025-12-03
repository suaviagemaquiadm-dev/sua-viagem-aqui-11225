
"use client";

import { useState, useEffect, useRef, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, Compass, Send } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { generateSophiaResponse } from '@/ai/flows/generate-sophia-response';

type Message = {
  sender: 'bot' | 'user';
  text: string;
  options?: { text: string; nextStep: number }[];
};

const conversationFlow = [
  {
    step: 0,
    text: "Olá! Eu sou a Sophia, sua guia de viagens pessoal. 😊 Pronta para planejar sua próxima grande história? O que você busca?",
    options: [
        { text: "Encontrar um destino", nextStep: 1 },
        { text: "Ver pacotes de agências", nextStep: 10 },
        { text: "Apenas explorar", nextStep: 11 },
    ],
  },
  {
    step: 1,
    text: "Maravilha! Para eu te ajudar melhor, que tipo de experiência você sonha em ter agora?",
    options: [
        { text: "Relaxar na praia", nextStep: 2 },
        { text: "Aventura e natureza", nextStep: 2 },
        { text: "Cultura e história", nextStep: 2 },
        { text: "Gastronomia", nextStep: 2 },
    ]
  },
  {
    step: 2,
    text: "Ótima escolha! Nossa plataforma tem parceiros incríveis para isso. A melhor forma de começar é usando nossa busca inteligente na página inicial. Lá você pode filtrar por localização, categoria e muito mais. Que tal tentar?",
    options: [
        { text: "Me mostre a busca", nextStep: 100 },
        { text: "Quais são as categorias?", nextStep: 3 },
    ]
  },
  {
    step: 3,
    text: "Temos de tudo um pouco! Desde Hotéis e Pousadas, Guias de Turismo, Passeios de Barco, Mergulho, até Restaurantes e Ecoturismo. Você pode ver todas as categorias na busca da página inicial.",
     options: [
        { text: "Entendi, obrigado!", nextStep: 100 },
    ]
  },
    {
    step: 10,
    text: "Nossas agências parceiras são as melhores! Elas oferecem pacotes completos para destinos incríveis. Você pode ver todas elas na seção 'Nossas Agências Premium' na página inicial.",
    options: [
        { text: "Quero ver as agências", nextStep: 101 },
    ]
  },
  {
    step: 11,
    text: "Explorar é a melhor parte! Recomendo começar pelos nossos 'Parceiros Premium' na página inicial. São experiências selecionadas que vão te surpreender. Divirta-se descobrindo!",
    options: []
  },
  {
    step: 100, // Redirect to home search
    text: "Perfeito! Role a página para cima e você encontrará nosso poderoso formulário de busca. Tenho certeza que sua próxima viagem está a apenas alguns cliques de distância. Boa pesquisa! ✨",
  },
    {
    step: 101, // Redirect to agencies section
    text: "Excelente! Estou te levando para a seção de agências agora. Prepare-se para encontrar pacotes incríveis!",
  },
  {
    step: 999, // Fallback for typed input
    text: "Ainda estou aprendendo a conversar livremente, mas estou evoluindo rápido! Por enquanto, você pode usar uma das opções que te dou para navegar. 😉",
  }
];


export function SophiaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const pathname = usePathname();
  const chatContentRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  const sophiaAvatar = PlaceHolderImages.find(img => img.id === 'sophia-avatar')?.imageUrl || "https://picsum.photos/seed/sophia-fallback/40/40";

  // Don't render on these pages
  const hiddenRoutes = ['/painel', '/painel-anunciante', '/login', '/cadastro-viajante', '/anunciar'];
  if (hiddenRoutes.some(route => pathname.startsWith(route))) {
    return null;
  }

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages, isBotTyping]);

  const startConversation = () => {
    if (hasStarted.current) return;
    const initialMessage = conversationFlow.find(f => f.step === 0);
    if (initialMessage) {
        setMessages([{
            sender: 'bot',
            text: initialMessage.text,
            options: initialMessage.options
        }]);
    }
    hasStarted.current = true;
  }

  const handleOpenChat = () => {
    setIsOpen(true);
    startConversation();
  };

  const addBotMessage = (step: number, text?: string) => {
    const flow = conversationFlow.find(f => f.step === step);
    
    // Remove options from all previous messages
    setMessages(prev => prev.map(m => ({ ...m, options: undefined })));
    
    setIsBotTyping(true);
    setTimeout(() => {
        setIsBotTyping(false);
        const botMessage: Message = { 
            sender: 'bot', 
            text: text || flow?.text || "Desculpe, não entendi.", 
            options: flow?.options 
        };
        setMessages(prev => [...prev, botMessage]);
        
        if (flow) {
            setCurrentStep(step);
             // Handle special navigation steps
            if (step === 100) { // Scroll to search
                const heroSection = document.getElementById('hero-section');
                heroSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => setIsOpen(false), 4000);
            }
             if (step === 101) { // Scroll to agencies
                const agenciesSection = document.getElementById('agencias');
                agenciesSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => setIsOpen(false), 2000);
            }
        }
    }, 800);
  };

  const handleOptionClick = (option: { text: string; nextStep: number }) => {
    // Add user's choice to messages
    setMessages(prev => [...prev, { sender: 'user', text: option.text }]);
    // Add corresponding bot message
    addBotMessage(option.nextStep);
  };
  
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    // Add user message and clear input
    setMessages(prev => [...prev.map(m => ({...m, options: undefined})), { sender: 'user', text: userMessage }]);
    setInputValue('');
    
    setIsBotTyping(true);
    
    try {
        const response = await generateSophiaResponse(userMessage);
        // Add bot's AI-generated response
        addBotMessage(-1, response); // Use a non-existent step to just display text
    } catch (error) {
        console.error("Error calling Sophia's AI:", error);
        addBotMessage(-1, "Desculpe, tive um probleminha para processar sua pergunta. Poderia tentar novamente?");
    } finally {
        setIsBotTyping(false);
    }
  }

  return (
    <>
      {/* Chat Bubble */}
      <Button
        onClick={handleOpenChat}
        className={cn(
            "fixed bottom-6 left-6 h-16 w-16 rounded-full bg-cyan-600 shadow-lg hover:bg-cyan-500 transition-transform hover:scale-110 z-[100]",
            isOpen && "scale-0 opacity-0"
        )}
        aria-label="Falar com a Sophia"
      >
        <Compass className="h-8 w-8 text-white" />
      </Button>

      {/* Chat Window */}
      <div className={cn(
        "fixed bottom-6 left-6 w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[700px] transition-all duration-300 ease-in-out origin-bottom-left z-[100]",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
      )}>
        <Card className="h-full w-full flex flex-col bg-slate-800/80 backdrop-blur-lg border border-slate-700 shadow-2xl">
          <CardHeader className="flex-row items-center justify-between p-4 border-b border-slate-700">
            <div className='flex items-center gap-3'>
                <div className='relative'>
                    <Image src={sophiaAvatar} alt="Sophia" width={40} height={40} className="rounded-full" />
                    <span className='absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-slate-800' />
                </div>
                <div>
                    <CardTitle className="text-base text-white">Sophia</CardTitle>
                    <p className="text-xs text-slate-400">Sua Guia de Viagens Pessoal</p>
                </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              <X className="h-5 w-5 text-slate-400" />
            </Button>
          </CardHeader>
          <CardContent ref={chatContentRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={cn("flex flex-col animate-slide-in-up", msg.sender === 'user' ? 'items-end' : 'items-start')}>
                <div className={cn(
                    "max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed",
                    msg.sender === 'bot' ? "bg-slate-700 text-white rounded-bl-none" : "bg-cyan-600 text-white rounded-br-none"
                )}>
                  {msg.text}
                </div>
                {msg.sender === 'bot' && msg.options && (
                  <div className="flex flex-wrap gap-2 mt-3 animate-slide-in-up" style={{animationDelay: '150ms'}}>
                    {msg.options.map((opt, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 h-auto py-1.5 px-3 text-white"
                        onClick={() => handleOptionClick(opt)}
                      >
                        {opt.text}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
             {isBotTyping && (
                <div className="flex items-start gap-2 animate-slide-in-up">
                    <div className="flex-shrink-0">
                      <Image src={sophiaAvatar} alt="Sophia" width={32} height={32} className="rounded-full" />
                    </div>
                    <div className="bg-slate-700 rounded-2xl rounded-bl-none p-3 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse" style={{animationDelay: '0ms'}}></span>
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse" style={{animationDelay: '200ms'}}></span>
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse" style={{animationDelay: '400ms'}}></span>
                    </div>
                </div>
            )}
          </CardContent>
          <CardFooter className='p-4 border-t border-slate-700'>
            <form onSubmit={handleFormSubmit} className='w-full flex items-center gap-2'>
              <Input 
                type="text" 
                placeholder="Pergunte sobre viagens..." 
                className="bg-slate-700 border-slate-600 focus:border-cyan-500"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button type="submit" size="icon" className="bg-cyan-600 hover:bg-cyan-500 flex-shrink-0">
                <Send className="h-4 w-4 text-white" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

    