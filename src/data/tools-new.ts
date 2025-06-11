import { AITool } from '@/types';

export const aiTools: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced conversational AI that can assist with writing, coding, analysis, and creative tasks. Built by OpenAI with state-of-the-art language understanding.',
    shortDescription: 'Advanced conversational AI for writing, coding, and creative tasks',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    website: 'https://chat.openai.com',
    affiliateLink: 'https://chat.openai.com?ref=aitoolsdirectory',
    category: 'ChatBots',
    subcategories: ['Personal Assistants', 'Writing', 'Coding'],
    tags: ['GPT-4', 'Conversational AI', 'OpenAI', 'Writing Assistant'],
    pricing: {
      model: 'freemium',
      price: '$20/month',
      hasFreeTrial: true
    },
    rating: 4.8,
    reviewCount: 15420,
    features: [
      'Natural language conversations',
      'Code generation and debugging',
      'Creative writing assistance',
      'Data analysis and visualization',
      'Multi-language support'
    ],
    pros: [
      'Highly accurate responses',
      'Versatile across many domains',
      'Regular updates and improvements',
      'Strong reasoning capabilities'
    ],
    cons: [
      'Can be expensive for heavy usage',
      'Sometimes generates incorrect information',
      'Limited real-time data access'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['Content Creation', 'Code Development', 'Research', 'Customer Support'],
    createdAt: '2024-01-01',
    updatedAt: '2024-12-01'
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI-powered image generation tool that creates stunning artwork from text descriptions. Perfect for artists, designers, and content creators.',
    shortDescription: 'AI image generation from text descriptions',
    logo: 'https://yt3.googleusercontent.com/tBEPKJUt8JcmMx9gE9S4EhwQBRaARFQvAhE4o7Wf8p8QMg_r-jWGQ-ZW5z4qQZK5_W3g=s900-c-k-c0x00ffffff-no-rj',
    website: 'https://midjourney.com',
    affiliateLink: 'https://midjourney.com?ref=aitoolsdirectory',
    category: 'Design',
    subcategories: ['Image Generation', 'Artwork', 'Creative Design'],
    tags: ['Image Generation', 'Art', 'Creative', 'Discord Bot'],
    pricing: {
      model: 'paid',
      price: '$10/month',
      hasFreeTrial: false
    },
    rating: 4.7,
    reviewCount: 8932,
    features: [
      'High-quality image generation',
      'Various art styles',
      'Custom aspect ratios',
      'Image variations',
      'Community gallery'
    ],
    pros: [
      'Exceptional image quality',
      'Wide variety of artistic styles',
      'Active community',
      'Regular feature updates'
    ],
    cons: [
      'Requires Discord',
      'No free tier',
      'Learning curve for prompts'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['Digital Art', 'Marketing Materials', 'Concept Art', 'Social Media Content'],
    createdAt: '2024-01-15',
    updatedAt: '2024-11-20'
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'AI-powered code completion tool that helps developers write code faster. Trained on billions of lines of code to provide intelligent suggestions.',
    shortDescription: 'AI code completion and programming assistant',
    logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png',
    website: 'https://github.com/features/copilot',
    affiliateLink: 'https://github.com/features/copilot?ref=aitoolsdirectory',
    category: 'Coding',
    subcategories: ['Code Generation', 'IDE Integration', 'Programming Assistant'],
    tags: ['GitHub', 'Code Completion', 'VS Code', 'Programming'],
    pricing: {
      model: 'paid',
      price: '$10/month',
      hasFreeTrial: true
    },
    rating: 4.6,
    reviewCount: 12543,
    features: [
      'Real-time code suggestions',
      'Multi-language support',
      'IDE integration',
      'Context-aware completions',
      'Documentation generation'
    ],
    pros: [
      'Significantly speeds up coding',
      'Supports many programming languages',
      'Learns from your coding style',
      'Great IDE integration'
    ],
    cons: [
      'Subscription required',
      'Sometimes suggests incorrect code',
      'Can make developers overly dependent'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['Software Development', 'Code Review', 'Learning Programming', 'Rapid Prototyping'],
    createdAt: '2024-02-01',
    updatedAt: '2024-12-05'
  },
  {
    id: '4',
    name: 'Jasper AI',
    description: 'AI writing assistant designed for marketing teams and content creators. Generate high-converting copy, blog posts, and marketing materials.',
    shortDescription: 'AI writing assistant for marketing and content creation',
    logo: 'https://www.jasper.ai/hubfs/jasper-logo.svg',
    website: 'https://jasper.ai',
    affiliateLink: 'https://jasper.ai?ref=aitoolsdirectory',
    category: 'Writing',
    subcategories: ['Content Writing', 'Marketing Copy', 'Blog Writing'],
    tags: ['Content Creation', 'Marketing', 'Copywriting', 'Blog Posts'],
    pricing: {
      model: 'paid',
      price: '$39/month',
      hasFreeTrial: true
    },
    rating: 4.5,
    reviewCount: 6789,
    features: [
      'Marketing-focused templates',
      'Brand voice training',
      'SEO optimization',
      'Team collaboration',
      'Plagiarism checker'
    ],
    pros: [
      'Great for marketing content',
      'Consistent brand voice',
      'Good template library',
      'Team features'
    ],
    cons: [
      'Expensive for individuals',
      'Learning curve',
      'Output quality varies'
    ],
    isFeatured: false,
    isNew: false,
    useCases: ['Blog Writing', 'Ad Copy', 'Email Marketing', 'Social Media Posts'],
    createdAt: '2024-01-20',
    updatedAt: '2024-11-15'
  },
  {
    id: '5',
    name: 'Notion AI',
    description: 'AI assistant integrated into Notion workspace. Help with writing, brainstorming, and organizing your thoughts directly in your notes.',
    shortDescription: 'AI assistant integrated into Notion workspace',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    website: 'https://notion.so/ai',
    affiliateLink: 'https://notion.so/ai?ref=aitoolsdirectory',
    category: 'Writing',
    subcategories: ['Note Taking', 'Productivity', 'Organization'],
    tags: ['Notion', 'Productivity', 'Note Taking', 'AI Assistant'],
    pricing: {
      model: 'freemium',
      price: '$10/month',
      hasFreeTrial: true
    },
    rating: 4.4,
    reviewCount: 4321,
    features: [
      'Integrated with Notion',
      'Writing assistance',
      'Brainstorming support',
      'Content summarization',
      'Action item extraction'
    ],
    pros: [
      'Seamless Notion integration',
      'Good for productivity workflows',
      'Helpful for brainstorming',
      'Reasonable pricing'
    ],
    cons: [
      'Limited to Notion users',
      'Fewer features than dedicated AI writers',
      'Can be slow sometimes'
    ],
    isFeatured: false,
    isNew: true,
    useCases: ['Note Taking', 'Project Planning', 'Content Creation', 'Meeting Notes'],
    createdAt: '2024-03-01',
    updatedAt: '2024-12-01'
  },
  {
    id: '6',
    name: 'Claude',
    description: 'AI assistant created by Anthropic for helpful, harmless, and honest conversations. Excellent for analysis, writing, and complex reasoning tasks.',
    shortDescription: 'AI assistant for analysis, writing, and reasoning',
    logo: 'https://cdn.worldvectorlogo.com/logos/claude-ai.svg',
    website: 'https://claude.ai',
    affiliateLink: 'https://claude.ai?ref=aitoolsdirectory',
    category: 'ChatBots',
    subcategories: ['Personal Assistants', 'Analysis', 'Writing'],
    tags: ['Anthropic', 'Conversational AI', 'Analysis', 'Constitutional AI'],
    pricing: {
      model: 'freemium',
      price: '$20/month',
      hasFreeTrial: true
    },
    rating: 4.7,
    reviewCount: 9876,
    features: [
      'Long-form conversations',
      'Document analysis',
      'Code understanding',
      'Creative writing',
      'Ethical reasoning'
    ],
    pros: [
      'Excellent reasoning capabilities',
      'Helpful and honest responses',
      'Good with long documents',
      'Strong ethical guidelines'
    ],
    cons: [
      'Newer than competitors',
      'Limited integrations',
      'Conservative in responses'
    ],
    isFeatured: true,
    isNew: true,
    useCases: ['Research', 'Document Analysis', 'Creative Writing', 'Code Review'],
    createdAt: '2024-03-15',
    updatedAt: '2024-12-01'
  },
  {
    id: '7',
    name: 'DALL-E 3',
    description: 'OpenAI\'s most advanced image generation model. Create highly detailed and accurate images from text descriptions with improved understanding.',
    shortDescription: 'Advanced AI image generation by OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/OpenAI_Logo.svg',
    website: 'https://openai.com/dall-e-3',
    affiliateLink: 'https://openai.com/dall-e-3?ref=aitoolsdirectory',
    category: 'Design',
    subcategories: ['Image Generation', 'AI Art', 'Creative Tools'],
    tags: ['OpenAI', 'Image Generation', 'AI Art', 'DALL-E'],
    pricing: {
      model: 'paid',
      price: '$0.040/image',
      hasFreeTrial: false
    },
    rating: 4.6,
    reviewCount: 7654,
    features: [
      'High-resolution image generation',
      'Precise prompt following',
      'Style consistency',
      'Text rendering in images',
      'Safety filtering'
    ],
    pros: [
      'Excellent prompt adherence',
      'High image quality',
      'Good text rendering',
      'Built-in safety measures'
    ],
    cons: [
      'Pay per generation',
      'Limited customization',
      'Strict content policies'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['Digital Art', 'Marketing Visuals', 'Illustrations', 'Product Mockups'],
    createdAt: '2024-02-10',
    updatedAt: '2024-11-25'
  },
  {
    id: '8',
    name: 'Grammarly',
    description: 'AI-powered writing assistant that helps improve grammar, spelling, style, and tone. Essential tool for professional communication.',
    shortDescription: 'AI writing assistant for grammar and style',
    logo: 'https://static.grammarly.com/assets/files/afe35d6b1e5b28496a9b6ebe3c4bd058/logo.svg',
    website: 'https://grammarly.com',
    affiliateLink: 'https://grammarly.com?ref=aitoolsdirectory',
    category: 'Writing',
    subcategories: ['Grammar Check', 'Writing Enhancement', 'Proofreading'],
    tags: ['Grammar', 'Writing', 'Proofreading', 'Style'],
    pricing: {
      model: 'freemium',
      price: '$12/month',
      hasFreeTrial: true
    },
    rating: 4.5,
    reviewCount: 25678,
    features: [
      'Grammar and spell check',
      'Tone detection',
      'Plagiarism detection',
      'Writing goals',
      'Browser extensions'
    ],
    pros: [
      'Comprehensive writing help',
      'Wide platform support',
      'Good free version',
      'Professional features'
    ],
    cons: [
      'Can be overly aggressive',
      'Premium features costly',
      'Sometimes misses context'
    ],
    isFeatured: false,
    isNew: false,
    useCases: ['Professional Writing', 'Academic Papers', 'Email Communication', 'Content Creation'],
    createdAt: '2024-01-05',
    updatedAt: '2024-11-30'
  }
];

export const getFeaturedTools = () => aiTools.filter(tool => tool.isFeatured);
export const getNewTools = () => aiTools.filter(tool => tool.isNew);
export const getToolsByCategory = (category: string) => 
  aiTools.filter(tool => tool.category === category);
export const getToolById = (id: string) => 
  aiTools.find(tool => tool.id === id);
