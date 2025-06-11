'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
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
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search AI tools..."
            value={query}
            onChange={handleInputChange}
            className="w-full pl-12 pr-16 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors",
              showFilters 
                ? "bg-primary-500 text-white" 
                : "text-gray-400 hover:text-gray-600"
            )}
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>

        {showFilters && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-10">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value as SearchFilters['sortBy'])}
                  className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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
