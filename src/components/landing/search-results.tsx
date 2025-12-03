import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, MapPin, X } from "lucide-react";

type SearchResultsProps = {
    results: any[];
    query: string;
    onClear: () => void;
}

export function SearchResults({ results, query, onClear }: SearchResultsProps) {
  return (
    <section id="search-results-section" className="container mx-auto px-4 py-16 animate-slide-in-up">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white">Resultados da Busca</h2>
          {query && <p className="text-slate-400 mt-2">Exibindo resultados para: "{query}"</p>}
        </div>
        <Button onClick={onClear} variant="secondary" className="bg-slate-700 hover:bg-slate-600">
          <X className="mr-2 h-4 w-4" /> Limpar Busca
        </Button>
      </div>
      {results.length > 0 ? (
        <div id="search-results-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((partner) => (
            <Link href={`/parceiro/${partner.id}`} key={partner.id} className="group block bg-slate-800 rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="overflow-hidden">
                <Image src={partner.image} alt={partner.businessName} width={400} height={300} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white">{partner.businessName}</h3>
                <p className="text-sm text-primary capitalize">{partner.category.replace(/_/g, ' ')}</p>
                <p className="text-xs text-slate-400 mt-2 flex items-center">
                  <MapPin className="mr-2 h-3 w-3" />
                  {partner.city}, {partner.state}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div id="no-results-message" className="text-center py-16">
          <AlertCircle className="mx-auto h-12 w-12 text-primary mb-4" />
          <h3 className="text-2xl font-bold text-white">Nenhum resultado encontrado</h3>
          <p className="text-slate-400 mt-2">Tente ajustar os seus filtros de busca.</p>
        </div>
      )}
    </section>
  );
}
