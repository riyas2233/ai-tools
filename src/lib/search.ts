import { AITool, SearchFilters } from '@/types';
import { aiTools } from '@/data/tools';

export function searchTools(filters: SearchFilters): AITool[] {
  let filteredTools = [...aiTools];

  // Filter by search query
  if (filters.query) {
    const query = filters.query.toLowerCase();
    filteredTools = filteredTools.filter(tool =>
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.tags.some(tag => tag.toLowerCase().includes(query)) ||
      tool.category.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (filters.category) {
    filteredTools = filteredTools.filter(tool => 
      tool.category === filters.category
    );
  }
  // Filter by pricing
  if (filters.pricing) {
    filteredTools = filteredTools.filter(tool =>
      tool.pricing.model === filters.pricing
    );
  }

  // Filter by tags
  if (filters.tags && filters.tags.length > 0) {
    filteredTools = filteredTools.filter(tool =>
      filters.tags!.some(tag => tool.tags.includes(tag))
    );
  }
  // Sort results
  switch (filters.sortBy) {
    case 'name':
    case 'alphabetical':
      filteredTools.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'rating':
      filteredTools.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filteredTools.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case 'popular':
      filteredTools.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
    default:
      break;
  }

  return filteredTools;
}
