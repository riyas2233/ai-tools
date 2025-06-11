'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Star, Search, Zap, Users, Globe, Bot, Rocket, ChevronDown } from 'lucide-react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const featuredTools = getFeaturedTools();
  const newTools = getNewTools();
  const topCategories = categories.slice(0, 8);



  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSearch = (filters: SearchFilters) => {
    setIsSearching(true);
    const results = searchTools(filters);
    setSearchResults(results);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <div className="absolute inset-0 animate-spin-slow">
                  <Sparkles className="h-8 w-8 text-purple-400 opacity-50" />
                </div>
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Premium AI Tools Directory
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="text-gray-100">Discover the</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Future of AI
              </span>
              <br />
              <span className="text-gray-100">Tools</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Explore <span className="text-blue-400 font-semibold">500+</span> cutting-edge AI tools. 
              From intelligent agents to creative platforms, find the perfect solution to 
              <span className="text-purple-400 font-semibold"> supercharge your workflow</span>.
            </p>

            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <SearchBar onSearch={handleSearch} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span>500+ Curated Tools</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span>Updated Daily</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">
                <Users className="h-4 w-4 text-blue-400" />
                <span>10K+ Users</span>
              </div>
            </div>

            <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div 
                className="inline-flex flex-col items-center gap-2 text-gray-400 cursor-pointer animate-bounce-slow"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <span className="text-sm">Explore Tools</span>
                <ChevronDown className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <div
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
            />
          </div>
        </div>
      </section>

      {/* Search Results or Featured Tools */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-100 mb-2">
                {isSearching ? 'Search Results' : 'Featured AI Tools'}
              </h2>
              <p className="text-gray-400">
                Handpicked tools that are changing the game
              </p>
            </div>
            {!isSearching && (
              <div>
                <Link
                  href="/featured"
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 glass px-4 py-2 rounded-lg"
                >
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {searchResults.slice(0, 6).map((tool, index) => (
              <div
                key={tool.id}
              >
                <ToolCard tool={tool} variant="featured" />
              </div>
            ))}
          </div>

          {searchResults.length === 0 && isSearching && (
            <div 
              className="text-center py-12"
            >
              <div className="text-gray-500 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-200 mb-2">No tools found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Bot, label: 'AI Tools', value: '500+', color: 'text-blue-400' },
              { icon: Users, label: 'Active Users', value: '10K+', color: 'text-purple-400' },
              { icon: Globe, label: 'Countries', value: '50+', color: 'text-cyan-400' },
              { icon: Rocket, label: 'New Tools/Week', value: '25+', color: 'text-green-400' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center glass p-6 rounded-2xl"
              >
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-gray-100 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse AI tools organized by use case and industry to find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCategories.map((category, index) => (
              <div
                key={category.id}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>

          <div 
            className="text-center mt-12"
          >
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25"
              >
                View All Categories
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
        </div>
      </section>

      {/* Trending Tools */}
      <section className="py-20 relative">
        <TrendingTools tools={featuredTools} />
      </section>

      {/* New Tools */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-100 mb-2">
                Latest AI Tools
              </h2>
              <p className="text-gray-400">
                Discover the newest additions to our directory
              </p>
            </div>
              <Link
                href="/new"
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 glass px-4 py-2 rounded-lg"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {newTools.slice(0, 4).map((tool, index) => (
              <div
                key={tool.id}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
}
