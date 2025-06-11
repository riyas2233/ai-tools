'use client';

import { ExternalLink, Star } from 'lucide-react';
import { trackAffiliateClick } from '@/lib/utils';
import { AITool } from '@/types';

interface ToolActionsProps {
  tool: AITool;
}

export default function ToolActions({ tool }: ToolActionsProps) {
  const handleAffiliateClick = () => {
    trackAffiliateClick(tool.id, tool.name);
    if (tool.affiliateLink) {
      window.open(tool.affiliateLink, '_blank');
    } else {
      window.open(tool.website, '_blank');
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={handleAffiliateClick}
        className="flex-1 bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center gap-3 font-semibold text-lg shadow-lg hover:shadow-xl"
      >
        <ExternalLink className="h-5 w-5" />
        Try {tool.name}
      </button>
      
      <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-5 w-5 ${
                star <= tool.rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="font-semibold text-gray-900">
          {tool.rating}
        </span>
        <span className="text-gray-500">
          ({tool.reviewCount} reviews)
        </span>
      </div>
    </div>
  );
}
