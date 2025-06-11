import { AITool } from '@/types';

export const aiTools: AITool[] = [
  {
    id: '1',    name: 'ChatGPT',
    description: 'Advanced conversational AI that can assist with writing, coding, analysis, and creative tasks. Built by OpenAI with state-of-the-art language understanding.',
    shortDescription: 'Advanced conversational AI for writing, coding, and creative tasks',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg',
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
      'Limited real-time data access'    ],    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1676573409104-9c6faf52ce7f?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['Content Creation', 'Code Development', 'Research', 'Customer Support'],
    createdAt: '2024-01-01',
    updatedAt: '2024-12-01'
  },
  {
    id: '2',    name: 'Midjourney',
    description: 'AI-powered image generation tool that creates stunning artwork from text descriptions. Perfect for artists, designers, and content creators.',
    shortDescription: 'AI image generation from text descriptions',
    logo: 'https://img.icons8.com/fluency/96/midjourney.png',
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
    screenshots: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['Digital Art', 'Marketing Materials', 'Concept Art', 'Social Media Content'],
    createdAt: '2024-01-15',
    updatedAt: '2024-11-20'
  },
  {
    id: '3',    name: 'GitHub Copilot',
    description: 'AI-powered code completion tool that helps developers write code faster. Trained on billions of lines of code to provide intelligent suggestions.',
    shortDescription: 'AI code completion and programming assistant',
    logo: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
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
    screenshots: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['Software Development', 'Code Review', 'Learning Programming', 'Rapid Prototyping'],
    createdAt: '2024-02-01',
    updatedAt: '2024-12-05'
  },
  {
    id: '4',    name: 'Jasper AI',
    description: 'AI writing assistant designed for marketing teams and content creators. Generate high-converting copy, blog posts, and marketing materials.',
    shortDescription: 'AI writing assistant for marketing and content creation',
    logo: 'https://img.icons8.com/fluency/96/jasper.png',
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
    screenshots: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: false,
    isNew: false,
    useCases: ['Blog Writing', 'Ad Copy', 'Email Marketing', 'Social Media Posts'],
    createdAt: '2024-01-20',
    updatedAt: '2024-11-15'
  },
  {
    id: '5',    name: 'Notion AI',
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
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: false,
    isNew: true,
    useCases: ['Note Taking', 'Project Planning', 'Content Creation', 'Meeting Notes'],
    createdAt: '2024-03-01',
    updatedAt: '2024-12-01'
  },
  {
    id: '6',    name: 'Claude',
    description: 'AI assistant created by Anthropic for helpful, harmless, and honest conversations. Excellent for analysis, writing, and complex reasoning tasks.',
    shortDescription: 'AI assistant for analysis, writing, and reasoning',
    logo: 'https://img.icons8.com/fluency/96/claude-ai.png',
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
    screenshots: [
      'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1699042143285-6265ee8c50f6?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: true,
    useCases: ['Research', 'Document Analysis', 'Creative Writing', 'Code Review'],
    createdAt: '2024-03-15',
    updatedAt: '2024-12-01'
  },
  {
    id: '7',    name: 'DALL-E 3',
    description: 'OpenAI\'s most advanced image generation model. Create highly detailed and accurate images from text descriptions with improved understanding.',
    shortDescription: 'Advanced AI image generation by OpenAI',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg',
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
    screenshots: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['Digital Art', 'Marketing Visuals', 'Illustrations', 'Product Mockups'],
    createdAt: '2024-02-10',
    updatedAt: '2024-11-25'
  },
  {
    id: '8',    name: 'Grammarly',
    description: 'AI-powered writing assistant that helps improve grammar, spelling, style, and tone. Essential tool for professional communication.',
    shortDescription: 'AI writing assistant for grammar and style',
    logo: 'https://img.icons8.com/color/96/grammarly.png',
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
    screenshots: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: false,
    isNew: false,
    useCases: ['Professional Writing', 'Academic Papers', 'Email Communication', 'Content Creation'],    createdAt: '2024-01-05',
    updatedAt: '2024-11-30'
  },
  {
    id: '9',
    name: 'Perplexity AI',
    description: 'AI-powered search engine that provides accurate, real-time answers with citations. Combines the power of large language models with up-to-date web information.',
    shortDescription: 'AI search engine with real-time answers and citations',
    logo: 'https://img.icons8.com/fluency/96/perplexity-ai.png',
    website: 'https://perplexity.ai',
    affiliateLink: 'https://perplexity.ai?ref=aitoolsdirectory',
    category: 'AI Agents',
    subcategories: ['Search', 'Research', 'Information Retrieval'],
    tags: ['Search Engine', 'Research', 'Citations', 'Real-time'],
    pricing: {
      model: 'freemium',
      price: '$20/month',
      hasFreeTrial: true
    },
    rating: 4.6,
    reviewCount: 8543,
    features: [
      'Real-time web search',
      'Source citations',
      'Academic mode',
      'Follow-up questions',
      'Mobile apps'
    ],
    pros: [
      'Always up-to-date information',
      'Provides source citations',
      'Fast and accurate',
      'Good for research'
    ],
    cons: [
      'Limited creative writing',
      'Newer platform',
      'Pro features require subscription'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: true,
    useCases: ['Research', 'Fact Checking', 'News Updates', 'Academic Writing'],
    createdAt: '2024-04-01',
    updatedAt: '2024-12-05'
  },
  {
    id: '10',
    name: 'Canva AI',
    description: 'AI-powered design platform that makes professional graphic design accessible to everyone. Create stunning visuals with AI assistance.',
    shortDescription: 'AI-powered design platform for graphics and visuals',
    logo: 'https://img.icons8.com/fluency/96/canva.png',
    website: 'https://canva.com',
    affiliateLink: 'https://canva.com?ref=aitoolsdirectory',
    category: 'Design',
    subcategories: ['Graphic Design', 'Templates', 'Visual Content'],
    tags: ['Design', 'Templates', 'Graphics', 'Marketing'],
    pricing: {
      model: 'freemium',
      price: '$15/month',
      hasFreeTrial: true
    },
    rating: 4.5,
    reviewCount: 32456,
    features: [
      'AI design suggestions',
      'Magic resize',
      'Background remover',
      'Thousands of templates',
      'Brand kit'
    ],
    pros: [
      'Easy to use',
      'Great template library',
      'AI-powered features',
      'Collaborative tools'
    ],
    cons: [
      'Limited customization',
      'Can look generic',
      'Premium features costly'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: false,
    isNew: false,
    useCases: ['Social Media Graphics', 'Presentations', 'Marketing Materials', 'Brand Design'],
    createdAt: '2024-01-10',
    updatedAt: '2024-11-28'
  },
  {
    id: '11',
    name: 'Cursor',
    description: 'AI-first code editor built for productivity. Write, edit, and chat about your code with advanced AI assistance integrated directly into your workflow.',
    shortDescription: 'AI-first code editor with integrated AI assistance',
    logo: 'https://img.icons8.com/fluency/96/cursor.png',
    website: 'https://cursor.sh',
    affiliateLink: 'https://cursor.sh?ref=aitoolsdirectory',
    category: 'Coding',
    subcategories: ['Code Editor', 'IDE', 'AI Assistant'],
    tags: ['Code Editor', 'AI Coding', 'Productivity', 'VS Code'],
    pricing: {
      model: 'freemium',
      price: '$20/month',
      hasFreeTrial: true
    },
    rating: 4.7,
    reviewCount: 5432,
    features: [
      'AI code completion',
      'Chat with codebase',
      'Inline editing',
      'VS Code compatibility',
      'Multi-file editing'
    ],
    pros: [
      'Excellent AI integration',
      'Fast and responsive',
      'VS Code compatible',
      'Great for refactoring'
    ],
    cons: [
      'Relatively new',
      'Limited extensions',
      'Learning curve'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: true,
    useCases: ['Software Development', 'Code Refactoring', 'Learning to Code', 'Rapid Prototyping'],
    createdAt: '2024-05-01',
    updatedAt: '2024-12-08'
  },
  {
    id: '12',
    name: 'Runway ML',
    description: 'Creative AI tools for video editing, image generation, and content creation. Professional-grade AI tools for artists and creators.',
    shortDescription: 'AI tools for video editing and creative content',
    logo: 'https://img.icons8.com/fluency/96/runway.png',
    website: 'https://runwayml.com',
    affiliateLink: 'https://runwayml.com?ref=aitoolsdirectory',
    category: 'Video',
    subcategories: ['Video Editing', 'AI Video', 'Creative Tools'],
    tags: ['Video Generation', 'AI Video', 'Creative', 'Professional'],
    pricing: {
      model: 'freemium',
      price: '$15/month',
      hasFreeTrial: true
    },
    rating: 4.4,
    reviewCount: 6789,
    features: [
      'AI video generation',
      'Video editing tools',
      'Green screen replacement',
      'Motion tracking',
      'Style transfer'
    ],
    pros: [
      'Cutting-edge AI video tech',
      'Professional quality',
      'Regular updates',
      'Creative possibilities'
    ],
    cons: [
      'Steep learning curve',
      'Resource intensive',
      'Can be expensive'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: true,
    useCases: ['Video Production', 'Content Creation', 'Film Making', 'Social Media Videos'],
    createdAt: '2024-03-20',
    updatedAt: '2024-12-01'
  },
  {
    id: '13',
    name: 'Copy.ai',
    description: 'AI copywriting tool that helps create marketing copy, blog posts, and content at scale. Perfect for marketing teams and content creators.',
    shortDescription: 'AI copywriting tool for marketing and content creation',
    logo: 'https://img.icons8.com/fluency/96/copy-ai.png',
    website: 'https://copy.ai',
    affiliateLink: 'https://copy.ai?ref=aitoolsdirectory',
    category: 'Writing',
    subcategories: ['Copywriting', 'Marketing Copy', 'Content Creation'],
    tags: ['Copywriting', 'Marketing', 'Content', 'Sales Copy'],
    pricing: {
      model: 'freemium',
      price: '$36/month',
      hasFreeTrial: true
    },
    rating: 4.3,
    reviewCount: 9876,
    features: [
      'Marketing copy templates',
      'Social media content',
      'Email campaigns',
      'Product descriptions',
      'Brand voice training'
    ],
    pros: [
      'Great template variety',
      'Easy to use',
      'Good for beginners',
      'Affordable pricing'
    ],
    cons: [
      'Output can be generic',
      'Limited customization',
      'Requires editing'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: false,
    isNew: false,
    useCases: ['Marketing Copy', 'Social Media', 'Email Marketing', 'Product Descriptions'],
    createdAt: '2024-01-25',
    updatedAt: '2024-11-22'
  },
  {
    id: '14',
    name: 'Luma AI',
    description: 'AI-powered 3D capture and video generation platform. Create stunning 3D models and videos from simple text prompts or images.',
    shortDescription: 'AI platform for 3D capture and video generation',
    logo: 'https://img.icons8.com/fluency/96/3d-modeling.png',
    website: 'https://lumalabs.ai',
    affiliateLink: 'https://lumalabs.ai?ref=aitoolsdirectory',
    category: 'Video',
    subcategories: ['3D Generation', 'Video Creation', 'AR/VR'],
    tags: ['3D Modeling', 'Video Generation', 'AR', 'VR'],
    pricing: {
      model: 'freemium',
      price: '$30/month',
      hasFreeTrial: true
    },
    rating: 4.5,
    reviewCount: 3421,
    features: [
      '3D object capture',
      'Video generation from text',
      'AR integration',
      'High-quality outputs',
      'Easy sharing'
    ],
    pros: [
      'Cutting-edge 3D technology',
      'User-friendly interface',
      'High-quality results',
      'Multiple output formats'
    ],
    cons: [
      'Limited free tier',
      'Processing can be slow',
      'Requires good hardware'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: true,
    useCases: ['3D Modeling', 'Product Visualization', 'AR/VR Content', 'Video Production'],
    createdAt: '2024-06-01',
    updatedAt: '2024-12-10'
  },
  {
    id: '15',
    name: 'Synthesia',
    description: 'AI video generation platform that creates professional videos with AI avatars. No cameras, microphones or actors needed.',
    shortDescription: 'AI video generation with AI avatars',
    logo: 'https://img.icons8.com/fluency/96/video-camera.png',
    website: 'https://synthesia.io',
    affiliateLink: 'https://synthesia.io?ref=aitoolsdirectory',
    category: 'Video',
    subcategories: ['AI Avatars', 'Video Production', 'Corporate Training'],
    tags: ['AI Avatars', 'Video Creation', 'Presentations', 'Training'],
    pricing: {
      model: 'paid',
      price: '$30/month',
      hasFreeTrial: true
    },
    rating: 4.3,
    reviewCount: 5670,
    features: [
      'AI avatar creation',
      'Multilingual support',
      'Custom avatars',
      'Professional templates',
      'Screen recording'
    ],
    pros: [
      'No video equipment needed',
      'Multiple languages',
      'Professional quality',
      'Time-saving'
    ],
    cons: [
      'Expensive for individuals',
      'Limited customization',
      'AI avatars can look artificial'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: false,
    isNew: false,
    useCases: ['Corporate Training', 'Presentations', 'Marketing Videos', 'E-learning'],
    createdAt: '2024-02-15',
    updatedAt: '2024-11-18'
  },
  {
    id: '16',
    name: 'ElevenLabs',
    description: 'AI voice generation and cloning platform. Create realistic voices, clone existing voices, and generate speech in multiple languages.',
    shortDescription: 'AI voice generation and cloning platform',
    logo: 'https://img.icons8.com/fluency/96/microphone.png',
    website: 'https://elevenlabs.io',
    affiliateLink: 'https://elevenlabs.io?ref=aitoolsdirectory',
    category: 'Audio',
    subcategories: ['Voice Generation', 'Text-to-Speech', 'Voice Cloning'],
    tags: ['Voice Synthesis', 'TTS', 'Voice Cloning', 'Audio'],
    pricing: {
      model: 'freemium',
      price: '$5/month',
      hasFreeTrial: true
    },
    rating: 4.7,
    reviewCount: 8934,
    features: [
      'Voice cloning',
      'Multi-language support',
      'High-quality synthesis',
      'API access',
      'Custom voice training'
    ],
    pros: [
      'Extremely realistic voices',
      'Fast generation',
      'Good free tier',
      'Easy to use'
    ],
    cons: [
      'Ethical concerns',
      'Usage limits',
      'Can be misused'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['Audiobook Creation', 'Voiceovers', 'Podcasts', 'Accessibility'],
    createdAt: '2024-01-30',
    updatedAt: '2024-12-03'
  },
  {
    id: '17',
    name: 'Zapier AI',
    description: 'AI-powered automation platform that connects your apps and automates workflows. Build complex automations with natural language.',
    shortDescription: 'AI-powered automation platform for workflows',
    logo: 'https://img.icons8.com/fluency/96/automation.png',
    website: 'https://zapier.com/ai',
    affiliateLink: 'https://zapier.com/ai?ref=aitoolsdirectory',
    category: 'AI Agents',
    subcategories: ['Automation', 'Workflow', 'Integration'],
    tags: ['Automation', 'Workflow', 'Integration', 'Productivity'],
    pricing: {
      model: 'freemium',
      price: '$20/month',
      hasFreeTrial: true
    },
    rating: 4.4,
    reviewCount: 15678,
    features: [
      'Natural language automation',
      'App integrations',
      'AI-powered triggers',
      'Custom workflows',
      'Team collaboration'
    ],
    pros: [
      'Extensive app integrations',
      'Easy automation setup',
      'AI makes it accessible',
      'Great for productivity'
    ],
    cons: [
      'Can get expensive',
      'Complex workflows need learning',
      'Sometimes unreliable'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: false,
    isNew: true,
    useCases: ['Business Automation', 'Data Sync', 'Marketing Automation', 'Productivity'],
    createdAt: '2024-05-15',
    updatedAt: '2024-12-05'
  },
  {
    id: '18',
    name: 'Stable Diffusion',
    description: 'Open-source AI image generation model. Create high-quality images from text descriptions with full control and customization.',
    shortDescription: 'Open-source AI image generation model',
    logo: 'https://img.icons8.com/fluency/96/artificial-intelligence.png',
    website: 'https://stability.ai',
    affiliateLink: 'https://stability.ai?ref=aitoolsdirectory',
    category: 'Design',
    subcategories: ['Image Generation', 'Open Source', 'AI Art'],
    tags: ['Open Source', 'Image Generation', 'Customizable', 'Self-hosted'],
    pricing: {
      model: 'free',
      price: 'Free',
      hasFreeTrial: true
    },
    rating: 4.6,
    reviewCount: 12345,
    features: [
      'Open source model',
      'High-quality images',
      'Customizable',
      'Self-hostable',
      'Active community'
    ],
    pros: [
      'Completely free',
      'Highly customizable',
      'No usage limits',
      'Strong community'
    ],
    cons: [
      'Technical setup required',
      'Hardware requirements',
      'Learning curve'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: false,
    useCases: ['AI Art', 'Concept Design', 'Creative Projects', 'Research'],
    createdAt: '2024-01-12',
    updatedAt: '2024-11-30'
  },
  {
    id: '19',
    name: 'Character AI',
    description: 'Create and chat with AI characters. Build personalized AI companions, historical figures, or fictional characters for entertainment and learning.',
    shortDescription: 'Create and chat with personalized AI characters',
    logo: 'https://img.icons8.com/fluency/96/character.png',
    website: 'https://character.ai',
    affiliateLink: 'https://character.ai?ref=aitoolsdirectory',
    category: 'ChatBots',
    subcategories: ['Character AI', 'Entertainment', 'Education'],
    tags: ['Character Creation', 'Entertainment', 'Role-playing', 'Education'],
    pricing: {
      model: 'freemium',
      price: '$10/month',
      hasFreeTrial: true
    },
    rating: 4.2,
    reviewCount: 23456,
    features: [
      'Custom character creation',
      'Personality training',
      'Group chats',
      'Image generation',
      'Voice conversations'
    ],
    pros: [
      'Highly engaging',
      'Creative freedom',
      'Good free tier',
      'Educational potential'
    ],
    cons: [
      'Can be addictive',
      'Quality varies',
      'Content moderation issues'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: false,
    isNew: false,
    useCases: ['Entertainment', 'Role-playing', 'Language Learning', 'Creative Writing'],
    createdAt: '2024-02-01',
    updatedAt: '2024-11-25'
  },
  {
    id: '20',
    name: 'Anthropic Claude Pro',
    description: 'Advanced version of Claude with enhanced capabilities for professional use. Longer conversations, priority access, and advanced reasoning.',
    shortDescription: 'Professional version of Claude AI with enhanced features',
    logo: 'https://img.icons8.com/fluency/96/claude-ai.png',
    website: 'https://claude.ai/pro',
    affiliateLink: 'https://claude.ai/pro?ref=aitoolsdirectory',
    category: 'ChatBots',
    subcategories: ['Professional AI', 'Analysis', 'Research'],
    tags: ['Professional', 'Advanced Reasoning', 'Long Context', 'Priority Access'],
    pricing: {
      model: 'paid',
      price: '$20/month',
      hasFreeTrial: false
    },
    rating: 4.8,
    reviewCount: 5432,
    features: [
      'Extended conversation length',
      'Priority access',
      'Advanced reasoning',
      'File uploads',
      'Professional support'
    ],
    pros: [
      'Excellent for complex tasks',
      'Reliable availability',
      'Strong reasoning',
      'Professional features'
    ],
    cons: [
      'No free trial',
      'Monthly subscription',
      'Overkill for simple tasks'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1699042143285-6265ee8c50f6?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb'
    ],
    isFeatured: true,
    isNew: true,
    useCases: ['Professional Research', 'Complex Analysis', 'Business Planning', 'Technical Writing'],
    createdAt: '2024-06-01',
    updatedAt: '2024-12-10'
  }
];

export const getFeaturedTools = () => aiTools.filter(tool => tool.isFeatured);
export const getNewTools = () => aiTools.filter(tool => tool.isNew);
export const getToolsByCategory = (category: string) => 
  aiTools.filter(tool => tool.category === category);
export const getToolById = (id: string) => 
  aiTools.find(tool => tool.id === id);
