import Link from "next/link";
import { footerLinks } from "@/lib/data";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const iconMap = {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
};

export function Footer() {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Sua Viagem Aqui</h3>
            <p className="text-slate-400 text-sm">
              A plataforma definitiva para agências de viagens e parceiros premium.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              {footerLinks.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <Link key={social.icon} href={social.href} className="text-slate-400 hover:text-primary transition-colors">
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-4 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sua Viagem Aqui. Todos os direitos reservados.</p>
          <p className="mt-2">
            A plataforma atua como intermediadora. A negociação é direta com o fornecedor.
          </p>
        </div>
      </div>
    </footer>
  );
}
