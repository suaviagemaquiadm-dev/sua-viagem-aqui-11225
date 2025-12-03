
"use client";

import { useState, useEffect, useRef, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, MessageSquare, Bot, Send } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { generateVitorResponse } from '@/ai/flows/generate-vitor-response';

type Message = {
  sender: 'bot' | 'user';
  text: string;
};

const initialMessage = {
    text: "Olá! Sou o Vitor, seu consultor estratégico na Sua Viagem Aqui. 😊 Estou aqui para te ajudar a divulgar seu negócio e alcançar milhares de viajantes qualificados. Como posso te ajudar hoje?",
};


export function VitorSalesChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const pathname = usePathname();
  const chatContentRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  const vitorAvatar = PlaceHolderImages.find(img => img.id === 'vitor-sales-avatar')?.imageUrl || "https://picsum.photos/seed/vitor-fallback/40/40";

  // Don't render on dashboard pages
  if (pathname.startsWith('/painel') || pathname.startsWith('/login') || pathname.startsWith('/cadastro-viajante')) {
    return null;
  }
  
  useEffect(() => {
    // Scroll to bottom when new messages are added or bot is typing
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages, isBotTyping]);

  const startConversation = () => {
     if (hasStarted.current) return;
     setMessages([{ sender: 'bot', text: initialMessage.text }]);
     hasStarted.current = true;
  }

  const handleOpenChat = () => {
    setIsOpen(true);
    if (!hasStarted.current) {
        startConversation();
    }
  }

  const addBotMessage = (text: string) => {
    setIsBotTyping(true);
    setTimeout(() => {
        setIsBotTyping(false);
        setMessages(prev => [...prev, { sender: 'bot', text: text }]);
    }, 800);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInputValue('');
    setIsBotTyping(true);
    
    try {
        const response = await generateVitorResponse(userMessage);
        addBotMessage(response);
    } catch (error) {
        console.error("Error calling Vitor's AI:", error);
        addBotMessage("Desculpe, tive um problema para processar sua pergunta. Poderia tentar novamente?");
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
            "fixed bottom-6 right-6 h-16 w-16 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-transform hover:scale-110 z-[100]",
            isOpen && "scale-0 opacity-0"
        )}
        aria-label="Abrir chat"
      >
        <MessageSquare className="h-8 w-8 text-primary-foreground" />
      </Button>

      {/* Chat Window */}
      <div className={cn(
        "fixed bottom-6 right-6 w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[700px] transition-all duration-300 ease-in-out origin-bottom-right z-[100]",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
      )}>
        <Card className="h-full w-full flex flex-col bg-slate-800/80 backdrop-blur-lg border border-slate-700 shadow-2xl">
          <CardHeader className="flex-row items-center justify-between p-4 border-b border-slate-700">
            <div className='flex items-center gap-3'>
                <div className='relative'>
                    <Image src={vitorAvatar} alt="Vitor Sales" width={40} height={40} className="rounded-full" />
                    <span className='absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-slate-800' />
                </div>
                <div>
                    <CardTitle className="text-base text-white">Vitor Sales</CardTitle>
                    <p className="text-xs text-slate-400">Consultor Estratégico</p>
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
                    msg.sender === 'user' ? "bg-primary text-primary-foreground rounded-br-none" : "bg-slate-700 text-white rounded-bl-none"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
             {isBotTyping && (
                <div className="flex items-start gap-2 animate-slide-in-up">
                    <div className="flex-shrink-0">
                      <Image src={vitorAvatar} alt="Vitor Sales" width={32} height={32} className="rounded-full" />
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
                placeholder="Digite sua mensagem..." 
                className="bg-slate-700 border-slate-600 focus:border-primary"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 flex-shrink-0">
                <Send className="h-4 w-4 text-primary-foreground" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

    