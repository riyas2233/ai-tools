'use client';

import Link from 'next/link';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Compare', href: '/compare' },
    { name: 'All Tools', href: '/tools' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="glass-dark border-b border-gray-800/50 sticky top-0 z-50 backdrop-blur-xl animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI<span className="text-gray-100">ToolsDirectory</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="animate-fade-in-down"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <Link
                href="/search"
                className="p-2 text-gray-300 hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-800/50"
              >
                <Search className="h-5 w-5" />
              </Link>
            </div>
            <div className="animate-scale-in transition-all duration-300 hover:scale-105 active:scale-95" style={{ animationDelay: '0.7s' }}>
              <Link
                href="/submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25"
              >
                Submit Tool
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-all duration-300 rounded-lg hover:bg-gray-800/50 active:scale-95"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden border-t border-gray-800/50 glass-dark overflow-hidden transition-all duration-300",
        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-4 space-y-3">
          {navigation.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "transition-all duration-300",
                isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Link
                href={item.href}
                className="block text-gray-300 hover:text-blue-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div className="pt-3 border-t border-gray-800/50">
            <div className={cn(
              "transition-all duration-300",
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
            style={{ transitionDelay: '0.4s' }}
            >
              <Link
                href="/submit"
                className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Submit Tool
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
