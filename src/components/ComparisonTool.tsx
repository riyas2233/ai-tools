'use client';

import { useState } from 'react';
import { X, Plus, Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { AITool } from '@/types';
import { trackAffiliateClick } from '@/lib/utils';
import OptimizedImage from './OptimizedImage';

interface ComparisonToolProps {
  availableTools: AITool[];
}

export default function ComparisonTool({ availableTools }: ComparisonToolProps) {
  const [selectedTools, setSelectedTools] = useState<AITool[]>([]);
  const [isSelectingTool, setIsSelectingTool] = useState(false);

  const addTool = (tool: AITool) => {
    if (selectedTools.length < 3 && !selectedTools.find(t => t.id === tool.id)) {
      setSelectedTools([...selectedTools, tool]);
    }
    setIsSelectingTool(false);
  };

  const removeTool = (toolId: string) => {
    setSelectedTools(selectedTools.filter(t => t.id !== toolId));
  };

  const handleAffiliateClick = (tool: AITool) => {
    if (tool.affiliateLink) {
      trackAffiliateClick(tool.id, tool.name);
      window.open(tool.affiliateLink, '_blank');
    } else {
      window.open(tool.website, '_blank');
    }
  };

  if (selectedTools.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Compare AI Tools
        </h2>
        <p className="text-gray-600 mb-6">
          Select up to 3 tools to compare their features, pricing, and ratings side by side.
        </p>
        <button
          onClick={() => setIsSelectingTool(true)}
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Add First Tool
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Tool Comparison
          </h2>
          {selectedTools.length < 3 && (
            <button
              onClick={() => setIsSelectingTool(true)}
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Tool
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 font-medium text-gray-900 bg-gray-50">
                Feature
              </th>
              {selectedTools.map((tool) => (
                <th key={tool.id} className="text-center p-4 bg-gray-50 min-w-64">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <OptimizedImage
                      src={tool.logo}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <span className="font-bold text-gray-900">{tool.name}</span>
                    <button
                      onClick={() => removeTool(tool.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{tool.shortDescription}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Rating */}
            <tr className="border-b border-gray-100">
              <td className="p-4 font-medium text-gray-900">Rating</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} className="text-center p-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-bold text-yellow-600">
                      {tool.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({tool.reviewCount} reviews)
                    </span>
                  </div>
                </td>
              ))}
            </tr>

            {/* Pricing */}
            <tr className="border-b border-gray-100">
              <td className="p-4 font-medium text-gray-900">Pricing</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} className="text-center p-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-1">
                      {tool.pricing.model}
                    </span>
                    {tool.pricing.price && (
                      <p className="text-lg font-bold text-gray-900">
                        {tool.pricing.price}
                      </p>
                    )}
                    {tool.pricing.hasFreeTrial && (
                      <p className="text-sm text-green-600">Free trial available</p>
                    )}
                  </div>
                </td>
              ))}
            </tr>

            {/* Category */}
            <tr className="border-b border-gray-100">
              <td className="p-4 font-medium text-gray-900">Category</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} className="text-center p-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {tool.category}
                  </span>
                </td>
              ))}
            </tr>

            {/* Features */}
            <tr className="border-b border-gray-100">
              <td className="p-4 font-medium text-gray-900">Key Features</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} className="p-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tool.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Use Cases */}
            <tr className="border-b border-gray-100">
              <td className="p-4 font-medium text-gray-900">Best For</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {tool.useCases.slice(0, 4).map((useCase, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-primary-100 text-primary-800 rounded text-xs"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Actions */}
            <tr>
              <td className="p-4 font-medium text-gray-900">Actions</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} className="p-4">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleAffiliateClick(tool)}
                      className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Try {tool.name}
                    </button>
                    <Link
                      href={`/tools/${tool.id}`}
                      className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tool Selection Modal */}
      {isSelectingTool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-96 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Select a Tool to Add</h3>
              <button
                onClick={() => setIsSelectingTool(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableTools
                  .filter(tool => !selectedTools.find(t => t.id === tool.id))
                  .map((tool) => (
                    <div
                      key={tool.id}
                      onClick={() => addTool(tool)}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 cursor-pointer transition-colors"
                    >
                      <OptimizedImage
                        src={tool.logo}
                        alt={tool.name}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{tool.name}</h4>
                        <p className="text-sm text-gray-600">{tool.shortDescription}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
