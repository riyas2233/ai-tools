'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Star, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import ToolCard from '@/components/ToolCard';
import CategoryCard from '@/components/CategoryCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import TrendingTools from '@/components/TrendingTools';
import { SearchFilters } from '@/types';
import { searchTools } from '@/lib/search';
import { getFeaturedTools, getNewTools } from '@/data/tools';
import { categories } from '@/data/categories';

export default function HomePage() {
  const [searchResults, setSearchResults] = useState(getFeaturedTools());
  const [isSearching, setIsSearching] = useState(false);
  
  const featuredTools = getFeaturedTools();
  const newTools = getNewTools();
  const topCategories = categories.slice(0, 8);

  const handleSearch = (filters: SearchFilters) => {
    setIsSearching(true);
    const results = searchTools(filters);
    setSearchResults(results);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-primary-600" />
              <span className="text-primary-600 font-medium">Premium AI Tools Directory</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Discover the Best{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                AI Tools
              </span>{' '}
              in One Place
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 text-balance max-w-3xl mx-auto">
              Find, compare, and choose from hundreds of AI tools across all categories. 
              From AI agents to design tools, discover what works best for your needs.
            </p>

            <SearchBar onSearch={handleSearch} />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span>500+ Curated Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>Updated Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary-500" />
                <span>Expert Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results or Featured Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {isSearching ? 'Search Results' : 'Featured AI Tools'}
            </h2>
            {!isSearching && (
              <Link
                href="/featured"
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {searchResults.slice(0, 6).map((tool) => (
              <ToolCard key={tool.id} tool={tool} variant="featured" />
            ))}
          </div>

          {searchResults.length === 0 && isSearching && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse AI tools organized by use case and industry to find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              View All Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>        </div>
      </section>

      {/* Trending Tools */}
      <TrendingTools tools={featuredTools} />

      {/* New Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Latest AI Tools
              </h2>
              <p className="text-gray-600">
                Discover the newest additions to our directory
              </p>
            </div>
            <Link
              href="/new"
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {newTools.slice(0, 4).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      <Footer />
    </div>
  );
}
