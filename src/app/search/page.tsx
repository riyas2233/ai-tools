'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import ToolCard from '@/components/ToolCard';
import AdvancedFilters from '@/components/AdvancedFilters';
import { SearchFilters } from '@/types';
import { searchTools } from '@/lib/search';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    query: searchParams.get('q') || '',
    sortBy: 'popular',
  });

  useEffect(() => {
    performSearch(filters);
  }, []);

  const performSearch = (newFilters: SearchFilters) => {
    setIsLoading(true);
    setFilters(newFilters);
    
    const searchResults = searchTools(newFilters);
    setResults(searchResults);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Search AI Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect AI tools for your needs from our comprehensive directory
            </p>
          </div>          <div className="mb-8">
            <SearchBar onSearch={performSearch} initialFilters={filters} />
          </div>

          <div className="mb-8">
            <AdvancedFilters filters={filters} onFiltersChange={performSearch} />
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {results.length > 0 ? `${results.length} tools found` : 'Search Results'}
            </h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded mb-3 w-3/4"></div>
                      <div className="flex gap-2 mb-4">
                        <div className="h-6 bg-gray-200 rounded w-16"></div>
                        <div className="h-6 bg-gray-200 rounded w-20"></div>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-8 bg-gray-200 rounded w-20"></div>
                        <div className="h-8 bg-gray-200 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {results.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4 text-6xl">
                🔍
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No tools found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search terms or browse our categories
              </p>
              <a
                href="/categories"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Browse Categories
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
