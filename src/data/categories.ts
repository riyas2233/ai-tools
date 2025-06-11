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
  },
  {
    id: '13',
    name: 'Healthcare',
    description: 'AI tools for medical diagnosis and healthcare management',
    icon: '🏥',
    slug: 'healthcare',
    toolCount: getToolCountByCategory('Healthcare'),
    subcategories: ['Medical Diagnosis', 'Drug Discovery', 'Patient Care', 'Medical Imaging']
  },
  {
    id: '14',
    name: 'Finance',
    description: 'AI-powered financial analysis and trading tools',
    icon: '💰',
    slug: 'finance',
    toolCount: getToolCountByCategory('Finance'),
    subcategories: ['Trading Bots', 'Risk Analysis', 'Portfolio Management', 'Fraud Detection']
  },
  {
    id: '15',
    name: 'Legal',
    description: 'AI tools for legal research and document analysis',
    icon: '⚖️',
    slug: 'legal',
    toolCount: getToolCountByCategory('Legal'),
    subcategories: ['Contract Analysis', 'Legal Research', 'Document Review', 'Compliance']
  },
  {
    id: '16',
    name: 'HR & Recruitment',
    description: 'AI tools for human resources and talent acquisition',
    icon: '👥',
    slug: 'hr-recruitment',
    toolCount: getToolCountByCategory('HR & Recruitment'),
    subcategories: ['Resume Screening', 'Interview Scheduling', 'Performance Analysis', 'Talent Matching']
  },
  {
    id: '17',
    name: 'E-commerce',
    description: 'AI tools for online retail and customer experience',
    icon: '🛒',
    slug: 'ecommerce',
    toolCount: getToolCountByCategory('E-commerce'),
    subcategories: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Support']
  },
  {
    id: '18',
    name: 'Gaming',
    description: 'AI tools for game development and gaming experiences',
    icon: '🎮',
    slug: 'gaming',
    toolCount: getToolCountByCategory('Gaming'),
    subcategories: ['Game AI', 'Procedural Generation', 'Player Analytics', 'Game Testing']
  },
  {
    id: '19',
    name: 'Real Estate',
    description: 'AI tools for property analysis and real estate management',
    icon: '🏠',
    slug: 'real-estate',
    toolCount: getToolCountByCategory('Real Estate'),
    subcategories: ['Property Valuation', 'Market Analysis', 'Virtual Tours', 'Lead Generation']
  },
  {
    id: '20',
    name: 'Travel',
    description: 'AI tools for travel planning and booking',
    icon: '✈️',
    slug: 'travel',
    toolCount: getToolCountByCategory('Travel'),
    subcategories: ['Trip Planning', 'Price Prediction', 'Recommendation Systems', 'Language Translation']
  },
  {
    id: '21',
    name: 'Productivity',
    description: 'AI tools to enhance personal and team productivity',
    icon: '⚡',
    slug: 'productivity',
    toolCount: getToolCountByCategory('Productivity'),
    subcategories: ['Task Management', 'Time Tracking', 'Meeting Assistants', 'Workflow Automation']
  },
  {
    id: '22',
    name: 'Research',
    description: 'AI tools for academic and scientific research',
    icon: '🔬',
    slug: 'research',
    toolCount: getToolCountByCategory('Research'),
    subcategories: ['Literature Review', 'Data Collection', 'Hypothesis Generation', 'Citation Management']
  },
  {
    id: '23',
    name: 'Social Media',
    description: 'AI tools for social media management and content creation',
    icon: '📱',
    slug: 'social-media',
    toolCount: getToolCountByCategory('Social Media'),
    subcategories: ['Content Scheduling', 'Hashtag Generation', 'Audience Analysis', 'Influencer Marketing']
  },
  {
    id: '24',
    name: 'Translation',
    description: 'AI-powered language translation and localization tools',
    icon: '🌐',
    slug: 'translation',
    toolCount: getToolCountByCategory('Translation'),
    subcategories: ['Text Translation', 'Voice Translation', 'Document Translation', 'Website Localization']
  },
  {
    id: '25',
    name: 'Security',
    description: 'AI tools for cybersecurity and threat detection',
    icon: '🔒',
    slug: 'security',
    toolCount: getToolCountByCategory('Security'),
    subcategories: ['Threat Detection', 'Fraud Prevention', 'Access Control', 'Vulnerability Assessment']
  }
];
