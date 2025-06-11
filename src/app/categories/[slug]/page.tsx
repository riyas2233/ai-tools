'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import SearchBar from '@/components/SearchBar';
import { categories } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';
import { searchTools } from '@/lib/search';
import { SearchFilters } from '@/types';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const categoryTools = getToolsByCategory(category.name);
  const [filteredTools, setFilteredTools] = useState(categoryTools);

  const handleSearch = (filters: SearchFilters) => {
    const results = searchTools({
      ...filters,
      category: category.name,
    });
    setFilteredTools(results);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-6 text-4xl">
              {category.icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {category.name} AI Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {category.description}
            </p>
            <div className="text-primary-600 font-medium">
              {category.toolCount} tools available
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <SearchBar 
              onSearch={handleSearch}
              initialFilters={{ 
                query: '', 
                sortBy: 'popular',
                category: category.name 
              }}
            />
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4 text-6xl">
                🔍
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No tools found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or browse other categories
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
