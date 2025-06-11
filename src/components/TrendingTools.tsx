'use client';

import { TrendingUp, ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';
import { AITool } from '@/types';
import { trackAffiliateClick } from '@/lib/utils';

interface TrendingToolsProps {
  tools: AITool[];
}

export default function TrendingTools({ tools }: TrendingToolsProps) {
  const handleAffiliateClick = (tool: AITool) => {
    if (tool.affiliateLink) {
      trackAffiliateClick(tool.id, tool.name);
      window.open(tool.affiliateLink, '_blank');
    } else {
      window.open(tool.website, '_blank');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-orange-500" />
            <span className="text-orange-600 font-medium">Trending Now</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Most Popular AI Tools This Week
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the AI tools that are gaining momentum and transforming workflows across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.slice(0, 6).map((tool, index) => (
            <div key={tool.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              {/* Trending Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                    #{index + 1} Trending
                  </span>
                  {tool.isNew && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{tool.rating}</span>
                </div>
              </div>

              {/* Tool Info */}
              <div className="flex items-start gap-4 mb-4">
                <OptimizedImage
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{tool.shortDescription}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {tool.category}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {tool.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-gray-500">Starting at</span>
                  <p className="font-bold text-gray-900">
                    {tool.pricing.price || 'Free'}
                  </p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  tool.pricing.model === 'free' 
                    ? 'bg-green-100 text-green-800'
                    : tool.pricing.model === 'freemium'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {tool.pricing.model}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleAffiliateClick(tool)}
                  className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  Try Now
                </button>
                <Link
                  href={`/tools/${tool.id}`}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/search?sortBy=popular"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors font-medium"
          >
            <TrendingUp className="h-5 w-5" />
            View All Trending Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
