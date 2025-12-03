
"use client";

import { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/icons";
import { Megaphone, LogIn, UserCircle, LogOut, Menu } from "lucide-react";
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export function Header() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    if (auth) {
      await signOut(auth);
    }
    router.push('/');
  };

  const determineDashboardHref = () => {
    // This is a simplified logic. A more robust solution might check
    // a user's role from a Firestore document or a custom claim.
    // For now, we'll make a best guess.
    if (pathname.startsWith('/painel-anunciante')) return '/painel-anunciante';
    return '/painel'; // Default to traveler dashboard
  }

  // Hide header on dashboard pages, as they have their own internal navigation
  if (pathname.startsWith('/painel') || pathname.startsWith('/painel-anunciante')) {
    return null;
  }


  return (
    <header className="bg-slate-900/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <LogoIcon className="h-10 w-10 mr-3 text-primary transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-white">
              Sua Viagem <span className="text-primary">Aqui</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#como-funciona" className="text-slate-300 hover:text-primary font-medium transition-colors relative group">
              Como Funciona
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/anunciar" className="text-slate-300 hover:text-primary font-medium transition-colors relative group">
              Planos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <Link href="/cadastro-viajante" className="text-slate-300 hover:text-primary font-medium transition-colors relative group">
              Viajante
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="outline" asChild className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/anunciar">
                <Megaphone className="mr-2 h-4 w-4" />
                Anuncie Seu Negócio
              </Link>
            </Button>
            {isUserLoading ? (
              <div className="h-10 w-24 bg-slate-800 rounded-md animate-pulse" />
            ) : user ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href={determineDashboardHref()}>
                    <UserCircle className="mr-2 h-5 w-5" />
                    <span className="hidden sm:inline">Meu Painel</span>
                  </Link>
                </Button>
                <Button variant="destructive" onClick={handleLogout} size="icon" className='sm:w-auto sm:px-4'>
                  <LogOut className="h-5 w-5 sm:mr-2" />
                  <span className="hidden sm:inline">Sair</span>
                </Button>
              </>
            ) : (
              <Button asChild className="bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg hover:shadow-amber-500/20">
                <Link href="/login">
                  <LogIn className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline font-bold">Login</span>
                  <span className="sm:hidden font-bold">Entrar</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
