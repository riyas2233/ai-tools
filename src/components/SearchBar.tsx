'use client';

import { useState } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import { SearchFilters } from '@/types';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  initialFilters?: SearchFilters;
}

export default function SearchBar({ onSearch, initialFilters }: SearchBarProps) {
  const [query, setQuery] = useState(initialFilters?.query || '');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<SearchFilters['sortBy']>(
    initialFilters?.sortBy || 'popular'
  );

  const handleSearch = (newQuery?: string) => {
    const searchQuery = newQuery !== undefined ? newQuery : query;
    onSearch({
      query: searchQuery,
      sortBy,
      category: initialFilters?.category,
      pricing: initialFilters?.pricing,
      tags: initialFilters?.tags,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    // Debounced search - search as user types
    setTimeout(() => {
      if (newQuery === query) {
        handleSearch(newQuery);
      }
    }, 300);
  };

  const handleSortChange = (newSortBy: SearchFilters['sortBy']) => {
    setSortBy(newSortBy);
    onSearch({
      query,
      sortBy: newSortBy,
      category: initialFilters?.category,
      pricing: initialFilters?.pricing,
      tags: initialFilters?.tags,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative animate-scale-in">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative glass-dark border border-gray-700/50 rounded-2xl overflow-hidden">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search for AI tools, categories, or features..."
              value={query}
              onChange={handleInputChange}
              className="w-full pl-16 pr-20 py-6 text-lg bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95",
                showFilters 
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
              )}
            >
              <Filter className="h-5 w-5" />
            </button>
            
            {/* Search suggestions indicator */}
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2">
              <div className="text-gray-500 animate-spin-slow">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {showFilters && (
          <div className="absolute top-full left-0 right-0 mt-4 glass-dark border border-gray-700/50 rounded-xl shadow-2xl p-6 z-10 animate-fade-in-down">
            <div className="flex flex-wrap gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value as SearchFilters['sortBy'])}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
