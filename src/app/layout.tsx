import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { FirebaseClientProvider } from '@/firebase';
import { VitorSalesChatbot } from '@/components/chatbot/VitorSalesChatbot';
import { SophiaChatbot } from '@/components/chatbot/SophiaChatbot';

export const metadata: Metadata = {
  title: 'Sua Viagem Aqui',
  description: 'A plataforma definitiva para agências de viagens e parceiros premium.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "min-h-screen bg-background font-sans")}>
        <FirebaseClientProvider>
          {children}
          <VitorSalesChatbot />
          <SophiaChatbot />
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
