import { Category } from '@/types';
import { aiTools } from './tools';

// Function to get actual tool count by category
const getToolCountByCategory = (categoryName: string): number => {
  return aiTools.filter(tool => tool.category === categoryName).length;
};

export const categories: Category[] = [
  {
    id: '1',
    name: 'AI Agents',
    description: 'Autonomous AI systems that can perform tasks and make decisions',
    icon: '🤖',
    slug: 'ai-agents',
    toolCount: getToolCountByCategory('AI Agents'),
    subcategories: ['Autonomous Agents', 'Task Automation', 'Decision Making']
  },
  {
    id: '2',
    name: 'ChatBots',
    description: 'Conversational AI for customer support and engagement',
    icon: '💬',
    slug: 'chatbots',
    toolCount: getToolCountByCategory('ChatBots'),
    subcategories: ['Customer Support', 'Sales Bots', 'Personal Assistants']
  },
  {
    id: '3',
    name: 'Coding',
    description: 'AI-powered development tools and code assistants',
    icon: '👨‍💻',
    slug: 'coding',
    toolCount: getToolCountByCategory('Coding'),
    subcategories: ['Code Generation', 'Debugging', 'Code Review', 'Documentation']
  },
  {
    id: '4',
    name: 'Design',
    description: 'Creative AI tools for graphic design and visual content',
    icon: '🎨',
    slug: 'design',
    toolCount: getToolCountByCategory('Design'),
    subcategories: ['Logo Design', 'UI/UX', 'Graphic Design', 'Brand Identity']
  },
  {
    id: '5',
    name: 'Writing',
    description: 'AI writing assistants and content generation tools',
    icon: '✍️',
    slug: 'writing',
    toolCount: getToolCountByCategory('Writing'),
    subcategories: ['Content Writing', 'Copywriting', 'Editing', 'SEO Writing']
  },
  {
    id: '6',
    name: 'Image Editing',
    description: 'AI-powered photo editing and image enhancement tools',
    icon: '📸',
    slug: 'image-editing',
    toolCount: getToolCountByCategory('Image Editing'),
    subcategories: ['Photo Enhancement', 'Background Removal', 'Object Removal', 'Style Transfer']
  },  {
    id: '7',
    name: 'Video',
    description: 'AI tools for video creation and editing',
    icon: '🎬',
    slug: 'video',
    toolCount: getToolCountByCategory('Video'),
    subcategories: ['Video Generation', 'Video Enhancement', 'Subtitles', 'Animation']
  },
  {
    id: '8',
    name: 'Audio',
    description: 'AI audio processing and music generation tools',
    icon: '🎵',
    slug: 'audio',
    toolCount: getToolCountByCategory('Audio'),
    subcategories: ['Music Generation', 'Voice Cloning', 'Audio Enhancement', 'Transcription']
  },
  {
    id: '9',
    name: 'Marketing',
    description: 'AI marketing automation and analytics tools',
    icon: '📈',
    slug: 'marketing',
    toolCount: getToolCountByCategory('Marketing'),
    subcategories: ['Social Media', 'Email Marketing', 'Analytics', 'Ad Generation']
  },
  {
    id: '10',
    name: 'SEO',
    description: 'AI-powered search engine optimization tools',
    icon: '🔍',
    slug: 'seo',
    toolCount: getToolCountByCategory('SEO'),
    subcategories: ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Link Building']
  },
  {
    id: '11',
    name: 'Data Analytics',
    description: 'AI tools for data analysis and visualization',
    icon: '📊',
    slug: 'data-analytics',
    toolCount: getToolCountByCategory('Data Analytics'),
    subcategories: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Statistical Analysis']
  },
  {
    id: '12',
    name: 'Education',
    description: 'AI-powered learning and educational tools',
    icon: '🎓',
    slug: 'education',
    toolCount: getToolCountByCategory('Education'),
    subcategories: ['Language Learning', 'Tutoring', 'Course Creation', 'Assessment']
  }
];
