import { AITool } from '@/types';

export const aiTools: AITool[] = [
  {
    id: '1',    name: 'ChatGPT',
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
    id: '2',    name: 'Midjourney',
    description: 'AI-powered image generation tool that creates stunning artwork from text descriptions. Perfect for artists, designers, and content creators.',
    shortDescription: 'AI image generation from text descriptions',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/midjourney/midjourney-original.svg',
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
    id: '7',    name: 'DALL-E 3',
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
    id: '8',    name: 'Grammarly',
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
    logo: 'https://img.icons8.com/fluency/96/video.png',
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
    logo: 'https://img.icons8.com/fluency/96/3d-cube.png',
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
    logo: 'https://img.icons8.com/fluency/96/video-call.png',
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
    logo: 'https://img.icons8.com/fluency/96/robot.png',
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
    logo: 'https://img.icons8.com/fluency/96/person.png',
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
    logo: 'https://img.icons8.com/fluency/96/chatbot.png',
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
    isFeatured: true,
    isNew: true,
    useCases: ['Professional Research', 'Complex Analysis', 'Business Planning', 'Technical Writing'],
    createdAt: '2024-06-01',
    updatedAt: '2024-12-10'
  },
  // Healthcare AI Tools
  {
    id: '14',
    name: 'PathAI',
    description: 'AI-powered pathology platform for accurate disease diagnosis and treatment planning.',
    shortDescription: 'AI pathology platform for disease diagnosis',
    logo: 'https://img.icons8.com/fluency/96/stethoscope.png',
    website: 'https://pathai.com',
    affiliateLink: 'https://pathai.com?ref=aitoolsdirectory',
    category: 'Healthcare',
    subcategories: ['Medical Diagnosis', 'Pathology', 'Disease Detection'],
    pricing: {
      model: 'enterprise',
      price: 'Contact for pricing',
      currency: 'USD',
      period: 'custom'
    },
    rating: 4.7,
    reviewCount: 234,
    features: ['AI-powered pathology', 'Disease detection', 'Treatment planning', 'Clinical integration'],
    pros: ['High accuracy', 'Clinical validation', 'Expert support'],
    cons: ['Enterprise only', 'Requires training'],
    createdAt: '2024-03-15',
    updatedAt: '2024-12-01'
  },
  {
    id: '15',
    name: 'Babylon Health',
    description: 'AI-powered healthcare platform providing virtual consultations and health monitoring.',
    shortDescription: 'AI healthcare platform for virtual consultations',
    logo: 'https://img.icons8.com/fluency/96/health-book.png',
    website: 'https://babylonhealth.com',
    affiliateLink: 'https://babylonhealth.com?ref=aitoolsdirectory',
    category: 'Healthcare',
    subcategories: ['Telemedicine', 'Health Monitoring', 'Virtual Consultations'],
    pricing: {
      model: 'subscription',
      price: 9.99,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.3,
    reviewCount: 1876,
    features: ['Virtual consultations', 'Symptom checker', 'Health monitoring', 'Prescription management'],
    pros: ['24/7 availability', 'Affordable pricing', 'Easy to use'],
    cons: ['Limited to basic conditions', 'Not available everywhere'],
    createdAt: '2023-08-20',
    updatedAt: '2024-11-15'
  },
  // Finance AI Tools
  {
    id: '16',
    name: 'Kensho',
    description: 'AI-powered financial analytics platform for investment research and risk management.',
    shortDescription: 'AI financial analytics for investment research',
    logo: 'https://img.icons8.com/fluency/96/financial-analytics.png',
    website: 'https://kensho.com',
    affiliateLink: 'https://kensho.com?ref=aitoolsdirectory',
    category: 'Finance',
    subcategories: ['Investment Research', 'Risk Analysis', 'Financial Analytics'],
    pricing: {
      model: 'enterprise',
      price: 'Contact for pricing',
      currency: 'USD',
      period: 'custom'
    },
    rating: 4.6,
    reviewCount: 432,
    features: ['Market analysis', 'Risk assessment', 'Portfolio optimization', 'Real-time data'],
    pros: ['Comprehensive analytics', 'Real-time insights', 'Professional grade'],
    cons: ['Enterprise pricing', 'Complex setup'],
    createdAt: '2023-05-10',
    updatedAt: '2024-10-20'
  },
  {
    id: '17',
    name: 'Alpaca',
    description: 'AI-powered algorithmic trading platform for automated investment strategies.',
    shortDescription: 'AI algorithmic trading platform',
    logo: 'https://img.icons8.com/fluency/96/stocks-growth.png',
    website: 'https://alpaca.markets',
    affiliateLink: 'https://alpaca.markets?ref=aitoolsdirectory',
    category: 'Finance',
    subcategories: ['Algorithmic Trading', 'Investment Automation', 'Trading Bots'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.4,
    reviewCount: 2341,
    features: ['Algorithmic trading', 'API access', 'Paper trading', 'Real-time data'],
    pros: ['Free tier available', 'Developer-friendly', 'Good documentation'],
    cons: ['US markets only', 'Requires coding knowledge'],
    createdAt: '2023-02-14',
    updatedAt: '2024-12-05'
  },
  // Legal AI Tools
  {
    id: '18',
    name: 'LawGeex',
    description: 'AI-powered contract review platform that automates legal document analysis.',
    shortDescription: 'AI contract review and legal document analysis',
    logo: 'https://img.icons8.com/fluency/96/law.png',
    website: 'https://lawgeex.com',
    affiliateLink: 'https://lawgeex.com?ref=aitoolsdirectory',
    category: 'Legal',
    subcategories: ['Contract Analysis', 'Document Review', 'Legal Automation'],
    pricing: {
      model: 'enterprise',
      price: 'Contact for pricing',
      currency: 'USD',
      period: 'custom'
    },
    rating: 4.5,
    reviewCount: 567,
    features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Legal insights'],
    pros: ['High accuracy', 'Time-saving', 'Compliance focused'],
    cons: ['Enterprise only', 'Limited to contracts'],
    createdAt: '2023-07-22',
    updatedAt: '2024-11-30'
  },
  {
    id: '19',
    name: 'DoNotPay',
    description: 'AI lawyer app that helps users fight bureaucracy and get compensation.',
    shortDescription: 'AI lawyer app for legal assistance',
    logo: 'https://img.icons8.com/fluency/96/scales.png',
    website: 'https://donotpay.com',
    affiliateLink: 'https://donotpay.com?ref=aitoolsdirectory',
    category: 'Legal',
    subcategories: ['Legal Assistance', 'Consumer Rights', 'Legal Automation'],
    pricing: {
      model: 'subscription',
      price: 3,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.2,
    reviewCount: 12453,
    features: ['Legal document generation', 'Dispute resolution', 'Compensation claims', 'Bureaucracy fighting'],
    pros: ['Very affordable', 'Easy to use', 'Wide range of services'],
    cons: ['Limited to simple cases', 'Not available everywhere'],
    createdAt: '2023-01-18',
    updatedAt: '2024-12-08'
  },
  // HR & Recruitment AI Tools
  {
    id: '20',
    name: 'HireVue',
    description: 'AI-powered video interviewing and assessment platform for talent acquisition.',
    shortDescription: 'AI video interviewing and talent assessment',
    logo: 'https://img.icons8.com/fluency/96/interview.png',
    website: 'https://hirevue.com',
    affiliateLink: 'https://hirevue.com?ref=aitoolsdirectory',
    category: 'HR & Recruitment',
    subcategories: ['Video Interviewing', 'Talent Assessment', 'Recruitment Automation'],
    pricing: {
      model: 'enterprise',
      price: 'Contact for pricing',
      currency: 'USD',
      period: 'custom'
    },
    rating: 4.3,
    reviewCount: 1234,
    features: ['Video interviews', 'AI assessment', 'Candidate scoring', 'Interview scheduling'],
    pros: ['Streamlines hiring', 'Reduces bias', 'Scalable solution'],
    cons: ['Enterprise pricing', 'May feel impersonal'],
    createdAt: '2023-04-12',
    updatedAt: '2024-10-15'
  },
  {
    id: '21',
    name: 'Pymetrics',
    description: 'AI-powered talent matching platform using neuroscience-based assessments.',
    shortDescription: 'AI talent matching with neuroscience assessments',
    logo: 'https://img.icons8.com/fluency/96/brain.png',
    website: 'https://pymetrics.ai',
    affiliateLink: 'https://pymetrics.ai?ref=aitoolsdirectory',
    category: 'HR & Recruitment',
    subcategories: ['Talent Matching', 'Assessment', 'Bias Reduction'],
    pricing: {
      model: 'enterprise',
      price: 'Contact for pricing',
      currency: 'USD',
      period: 'custom'
    },
    rating: 4.4,
    reviewCount: 876,
    features: ['Neuroscience games', 'Bias-free matching', 'Predictive analytics', 'Diversity insights'],
    pros: ['Science-based', 'Reduces bias', 'Engaging assessments'],
    cons: ['Enterprise only', 'Complex implementation'],
    createdAt: '2024-02-28',
    updatedAt: '2024-12-03'
  },
  // E-commerce AI Tools
  {
    id: '22',
    name: 'Dynamic Yield',
    description: 'AI-powered personalization platform for e-commerce and digital experiences.',
    shortDescription: 'AI personalization for e-commerce',
    logo: 'https://img.icons8.com/fluency/96/shopping-cart.png',
    website: 'https://dynamicyield.com',
    affiliateLink: 'https://dynamicyield.com?ref=aitoolsdirectory',
    category: 'E-commerce',
    subcategories: ['Personalization', 'Product Recommendations', 'Customer Experience'],
    pricing: {
      model: 'enterprise',
      price: 'Contact for pricing',
      currency: 'USD',
      period: 'custom'
    },
    rating: 4.6,
    reviewCount: 543,
    features: ['Real-time personalization', 'A/B testing', 'Product recommendations', 'Customer segmentation'],
    pros: ['Powerful personalization', 'Proven ROI', 'Enterprise-grade'],
    cons: ['Complex setup', 'High cost'],
    createdAt: '2023-06-05',
    updatedAt: '2024-11-20'
  },
  {
    id: '23',
    name: 'Yotpo',
    description: 'AI-powered e-commerce marketing platform for reviews, loyalty, and SMS.',
    shortDescription: 'AI e-commerce marketing platform',
    logo: 'https://img.icons8.com/fluency/96/star.png',
    website: 'https://yotpo.com',
    affiliateLink: 'https://yotpo.com?ref=aitoolsdirectory',
    category: 'E-commerce',
    subcategories: ['Customer Reviews', 'Loyalty Programs', 'Marketing Automation'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.5,
    reviewCount: 3421,
    features: ['Review management', 'Loyalty programs', 'SMS marketing', 'Visual UGC'],
    pros: ['Free tier available', 'Comprehensive features', 'Good integrations'],
    cons: ['Can be expensive at scale', 'Learning curve'],
    createdAt: '2023-03-20',
    updatedAt: '2024-12-01'
  },
  // Gaming AI Tools
  {
    id: '24',
    name: 'Promethean AI',
    description: 'AI assistant for game developers to create virtual worlds and environments.',
    shortDescription: 'AI assistant for game world creation',
    logo: 'https://img.icons8.com/fluency/96/controller.png',
    website: 'https://prometheanai.com',
    affiliateLink: 'https://prometheanai.com?ref=aitoolsdirectory',
    category: 'Gaming',
    subcategories: ['Game Development', 'World Building', 'Asset Creation'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.7,
    reviewCount: 892,
    features: ['AI world building', 'Asset placement', 'Environment design', 'Creative assistance'],
    pros: ['Free for non-commercial', 'Innovative technology', 'Time-saving'],
    cons: ['Still in development', 'Learning curve'],
    createdAt: '2024-01-15',
    updatedAt: '2024-12-10'
  },
  {
    id: '25',
    name: 'Scenario',
    description: 'AI-powered game asset generation platform for creating custom game art.',
    shortDescription: 'AI game asset generation platform',
    logo: 'https://img.icons8.com/fluency/96/game.png',
    website: 'https://scenario.com',
    affiliateLink: 'https://scenario.com?ref=aitoolsdirectory',
    category: 'Gaming',
    subcategories: ['Asset Generation', 'Game Art', 'Creative Tools'],
    pricing: {
      model: 'subscription',
      price: 20,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.5,
    reviewCount: 1567,
    features: ['Custom AI models', 'Game asset generation', 'Style consistency', 'Batch processing'],
    pros: ['High-quality assets', 'Customizable models', 'Game-focused'],
    cons: ['Subscription required', 'Requires training data'],
    createdAt: '2023-09-12',
    updatedAt: '2024-11-25'
  },
  // Real Estate AI Tools
  {
    id: '26',
    name: 'Zillow Instant Offers',
    description: 'AI-powered home valuation and instant buying platform for real estate.',
    shortDescription: 'AI home valuation and instant buying',
    logo: 'https://img.icons8.com/fluency/96/home.png',
    website: 'https://zillow.com',
    affiliateLink: 'https://zillow.com?ref=aitoolsdirectory',
    category: 'Real Estate',
    subcategories: ['Property Valuation', 'Home Buying', 'Market Analysis'],
    pricing: {
      model: 'free',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.2,
    reviewCount: 15432,
    features: ['Instant home valuation', 'Market trends', 'Property history', 'Neighborhood insights'],
    pros: ['Free to use', 'Comprehensive data', 'User-friendly'],
    cons: ['US only', 'Valuation accuracy varies'],
    createdAt: '2023-01-10',
    updatedAt: '2024-11-28'
  },
  {
    id: '27',
    name: 'Compass AI',
    description: 'AI-powered real estate platform for agents and buyers with predictive analytics.',
    shortDescription: 'AI real estate platform with predictive analytics',
    logo: 'https://img.icons8.com/fluency/96/compass.png',
    website: 'https://compass.com',
    affiliateLink: 'https://compass.com?ref=aitoolsdirectory',
    category: 'Real Estate',
    subcategories: ['Agent Tools', 'Predictive Analytics', 'Lead Generation'],
    pricing: {
      model: 'enterprise',
      price: 'Contact for pricing',
      currency: 'USD',
      period: 'custom'
    },
    rating: 4.4,
    reviewCount: 2876,
    features: ['Predictive analytics', 'Lead scoring', 'Market insights', 'CRM integration'],
    pros: ['Advanced analytics', 'Agent-focused', 'Good support'],
    cons: ['Agent platform only', 'Complex pricing'],
    createdAt: '2023-04-18',
    updatedAt: '2024-10-22'
  },
  // Travel AI Tools
  {
    id: '28',
    name: 'Hopper',
    description: 'AI-powered travel app that predicts flight and hotel prices to save money.',
    shortDescription: 'AI travel price prediction app',
    logo: 'https://img.icons8.com/fluency/96/aircraft.png',
    website: 'https://hopper.com',
    affiliateLink: 'https://hopper.com?ref=aitoolsdirectory',
    category: 'Travel',
    subcategories: ['Price Prediction', 'Flight Booking', 'Hotel Booking'],
    pricing: {
      model: 'free',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.6,
    reviewCount: 45321,
    features: ['Price predictions', 'Deal alerts', 'Booking platform', 'Trip planning'],
    pros: ['Accurate predictions', 'Money-saving', 'Easy to use'],
    cons: ['Limited destinations', 'Booking fees'],
    createdAt: '2023-02-05',
    updatedAt: '2024-12-01'
  },
  {
    id: '29',
    name: 'TripIt',
    description: 'AI-powered travel organizer that automatically creates itineraries from emails.',
    shortDescription: 'AI travel organizer and itinerary creator',
    logo: 'https://img.icons8.com/fluency/96/suitcase.png',
    website: 'https://tripit.com',
    affiliateLink: 'https://tripit.com?ref=aitoolsdirectory',
    category: 'Travel',
    subcategories: ['Trip Planning', 'Itinerary Management', 'Travel Organization'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.5,
    reviewCount: 8765,
    features: ['Auto itinerary creation', 'Travel alerts', 'Expense tracking', 'Sharing options'],
    pros: ['Automatic organization', 'Comprehensive features', 'Reliable'],
    cons: ['Premium features cost extra', 'Email parsing issues'],
    createdAt: '2023-03-12',
    updatedAt: '2024-11-18'
  },
  // Productivity AI Tools
  {
    id: '30',
    name: 'Motion',
    description: 'AI-powered calendar and task management that automatically schedules your day.',
    shortDescription: 'AI calendar and task management',
    logo: 'https://img.icons8.com/fluency/96/calendar.png',
    website: 'https://usemotion.com',
    affiliateLink: 'https://usemotion.com?ref=aitoolsdirectory',
    category: 'Productivity',
    subcategories: ['Calendar Management', 'Task Scheduling', 'Time Blocking'],
    pricing: {
      model: 'subscription',
      price: 19,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.7,
    reviewCount: 3421,
    features: ['AI scheduling', 'Task prioritization', 'Calendar optimization', 'Team coordination'],
    pros: ['Intelligent scheduling', 'Time-saving', 'Great for busy professionals'],
    cons: ['Expensive', 'Learning curve'],
    createdAt: '2024-01-20',
    updatedAt: '2024-12-08'
  },
  {
    id: '31',
    name: 'Reclaim.ai',
    description: 'AI scheduling assistant that protects focus time and optimizes calendars.',
    shortDescription: 'AI scheduling assistant for focus time',
    logo: 'https://img.icons8.com/fluency/96/clock.png',
    website: 'https://reclaim.ai',
    affiliateLink: 'https://reclaim.ai?ref=aitoolsdirectory',
    category: 'Productivity',
    subcategories: ['Calendar Management', 'Focus Time', 'Meeting Optimization'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.6,
    reviewCount: 2187,
    features: ['Smart scheduling', 'Focus time protection', 'Habit tracking', 'Buffer time'],
    pros: ['Free tier available', 'Focus on deep work', 'Good integrations'],
    cons: ['Google Calendar only', 'Complex setup'],
    createdAt: '2023-05-25',
    updatedAt: '2024-11-12'
  },
  // Research AI Tools
  {
    id: '32',
    name: 'Semantic Scholar',
    description: 'AI-powered academic search engine for scientific literature and research papers.',
    shortDescription: 'AI academic search engine for research',
    logo: 'https://img.icons8.com/fluency/96/search.png',
    website: 'https://semanticscholar.org',
    affiliateLink: 'https://semanticscholar.org?ref=aitoolsdirectory',
    category: 'Research',
    subcategories: ['Literature Search', 'Academic Research', 'Citation Analysis'],
    pricing: {
      model: 'free',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.8,
    reviewCount: 12543,
    features: ['AI-powered search', 'Citation analysis', 'Paper recommendations', 'Research trends'],
    pros: ['Completely free', 'High-quality results', 'Academic focus'],
    cons: ['Academic papers only', 'Complex interface'],
    createdAt: '2023-01-08',
    updatedAt: '2024-12-05'
  },
  {
    id: '33',
    name: 'Elicit',
    description: 'AI research assistant that helps find, summarize, and extract data from papers.',
    shortDescription: 'AI research assistant for paper analysis',
    logo: 'https://img.icons8.com/fluency/96/document.png',
    website: 'https://elicit.org',
    affiliateLink: 'https://elicit.org?ref=aitoolsdirectory',
    category: 'Research',
    subcategories: ['Paper Analysis', 'Data Extraction', 'Research Synthesis'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.7,
    reviewCount: 5432,
    features: ['Paper summarization', 'Data extraction', 'Research questions', 'Evidence synthesis'],
    pros: ['Powerful AI analysis', 'Research-focused', 'Time-saving'],
    cons: ['Limited free tier', 'Academic focus only'],
    createdAt: '2024-03-10',
    updatedAt: '2024-12-02'
  },
  // Social Media AI Tools
  {
    id: '34',
    name: 'Buffer',
    description: 'AI-powered social media management platform for scheduling and analytics.',
    shortDescription: 'AI social media management platform',
    logo: 'https://img.icons8.com/fluency/96/social-media.png',
    website: 'https://buffer.com',
    affiliateLink: 'https://buffer.com?ref=aitoolsdirectory',
    category: 'Social Media',
    subcategories: ['Content Scheduling', 'Social Analytics', 'Team Collaboration'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.5,
    reviewCount: 18765,
    features: ['Content scheduling', 'Analytics dashboard', 'Team collaboration', 'AI suggestions'],
    pros: ['User-friendly', 'Good free tier', 'Reliable scheduling'],
    cons: ['Limited AI features', 'Expensive for teams'],
    createdAt: '2023-02-20',
    updatedAt: '2024-11-25'
  },
  {
    id: '35',
    name: 'Hootsuite Insights',
    description: 'AI-powered social media analytics and listening platform.',
    shortDescription: 'AI social media analytics and listening',
    logo: 'https://img.icons8.com/fluency/96/analytics.png',
    website: 'https://hootsuite.com',
    affiliateLink: 'https://hootsuite.com?ref=aitoolsdirectory',
    category: 'Social Media',
    subcategories: ['Social Listening', 'Analytics', 'Sentiment Analysis'],
    pricing: {
      model: 'subscription',
      price: 99,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.3,
    reviewCount: 7654,
    features: ['Social listening', 'Sentiment analysis', 'Trend tracking', 'Competitive analysis'],
    pros: ['Comprehensive analytics', 'Enterprise features', 'Good reporting'],
    cons: ['Expensive', 'Complex interface'],
    createdAt: '2023-04-15',
    updatedAt: '2024-10-30'
  },
  {
    id: '36',
    name: 'MetaGuide',
    description: 'AI-powered platform that helps provide support with advanced machine learning capabilities.',
    shortDescription: 'AI-powered platform that helps provide support with advanced machine learning...',
    logo: 'https://img.icons8.com/fluency/96/marketing.png',
    website: 'https://metaguide.com',
    affiliateLink: 'https://metaguide.com?ref=aitoolsdirectory',
    category: 'ChatBots',
    subcategories: ['Customer Support', 'Virtual Agents', 'Sales Bots'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.4,
    reviewCount: 45981,
    features: ['Integration APIs', 'Analytics dashboard', 'Natural language processing', 'Multi-language support'],
    pros: ['Good value', 'Great support', 'Good integrations'],
    cons: ['Learning curve', 'No mobile app'],
    createdAt: '2024-02-03',
    updatedAt: '2024-05-11'
  },
  // Additional AI Tools - Translation Category
  {
    id: '37',
    name: 'DeepL',
    description: 'AI-powered translation service that provides highly accurate translations for text and documents.',
    shortDescription: 'AI translation service for accurate text and document translation',
    logo: 'https://img.icons8.com/fluency/96/translation.png',
    website: 'https://deepl.com',
    affiliateLink: 'https://deepl.com?ref=aitoolsdirectory',
    category: 'Translation',
    subcategories: ['Text Translation', 'Document Translation', 'API Integration'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.8,
    reviewCount: 25432,
    features: ['High-quality translations', 'Document translation', 'API access', 'Multiple languages'],
    pros: ['Excellent accuracy', 'Fast translation', 'Good free tier'],
    cons: ['Limited languages vs Google', 'Premium for advanced features'],
    createdAt: '2023-01-15',
    updatedAt: '2024-12-01'
  },
  {
    id: '38',
    name: 'Otter.ai',
    description: 'AI-powered meeting transcription and note-taking assistant for teams and individuals.',
    shortDescription: 'AI meeting transcription and note-taking assistant',
    logo: 'https://img.icons8.com/fluency/96/microphone.png',
    website: 'https://otter.ai',
    affiliateLink: 'https://otter.ai?ref=aitoolsdirectory',
    category: 'Productivity',
    subcategories: ['Meeting Transcription', 'Note Taking', 'Team Collaboration'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.6,
    reviewCount: 18765,
    features: ['Real-time transcription', 'Speaker identification', 'Meeting summaries', 'Integration with Zoom'],
    pros: ['Accurate transcription', 'Good free tier', 'Easy to use'],
    cons: ['Limited free minutes', 'Requires good audio quality'],
    createdAt: '2023-03-20',
    updatedAt: '2024-11-28'
  },
  {
    id: '39',
    name: 'Synthesia',
    description: 'AI video generation platform that creates professional videos with AI avatars and voices.',
    shortDescription: 'AI video generation with avatars and voices',
    logo: 'https://img.icons8.com/fluency/96/video-editing.png',
    website: 'https://synthesia.io',
    affiliateLink: 'https://synthesia.io?ref=aitoolsdirectory',
    category: 'Video',
    subcategories: ['AI Avatars', 'Video Generation', 'Text-to-Video'],
    pricing: {
      model: 'subscription',
      price: 30,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.5,
    reviewCount: 8932,
    features: ['AI avatars', 'Multiple languages', 'Custom branding', 'Video templates'],
    pros: ['Professional quality', 'No filming needed', 'Multiple languages'],
    cons: ['Expensive', 'Limited customization', 'Subscription required'],
    createdAt: '2023-02-10',
    updatedAt: '2024-12-05'
  },
  {
    id: '40',
    name: 'Loom AI',
    description: 'AI-enhanced screen recording and video messaging platform for async communication.',
    shortDescription: 'AI-enhanced screen recording and video messaging',
    logo: 'https://img.icons8.com/fluency/96/screen-recorder.png',
    website: 'https://loom.com',
    affiliateLink: 'https://loom.com?ref=aitoolsdirectory',
    category: 'Video',
    subcategories: ['Screen Recording', 'Video Messaging', 'Team Communication'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.7,
    reviewCount: 34521,
    features: ['Screen recording', 'Auto-transcription', 'Video editing', 'Team sharing'],
    pros: ['Easy to use', 'Good free tier', 'Fast sharing'],
    cons: ['Limited editing features', 'Storage limits on free plan'],
    createdAt: '2023-04-05',
    updatedAt: '2024-11-20'
  },
  {
    id: '41',
    name: 'Murf AI',
    description: 'AI voice generator that creates realistic voiceovers for videos, presentations, and podcasts.',
    shortDescription: 'AI voice generator for realistic voiceovers',
    logo: 'https://img.icons8.com/fluency/96/voice.png',
    website: 'https://murf.ai',
    affiliateLink: 'https://murf.ai?ref=aitoolsdirectory',
    category: 'Audio',
    subcategories: ['Voice Generation', 'Text-to-Speech', 'Voiceovers'],
    pricing: {
      model: 'subscription',
      price: 23,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.4,
    reviewCount: 12876,
    features: ['120+ voices', 'Multiple languages', 'Voice cloning', 'Audio editing'],
    pros: ['Natural-sounding voices', 'Good variety', 'Easy to use'],
    cons: ['Subscription required', 'Limited free tier', 'Voice cloning is expensive'],
    createdAt: '2023-05-18',
    updatedAt: '2024-10-25'
  },
  {
    id: '42',
    name: 'Zapier',
    description: 'AI-powered automation platform that connects apps and automates workflows without coding.',
    shortDescription: 'AI automation platform for connecting apps and workflows',
    logo: 'https://img.icons8.com/fluency/96/workflow.png',
    website: 'https://zapier.com',
    affiliateLink: 'https://zapier.com?ref=aitoolsdirectory',
    category: 'Productivity',
    subcategories: ['Workflow Automation', 'App Integration', 'No-Code'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.6,
    reviewCount: 45321,
    features: ['5000+ app integrations', 'Multi-step workflows', 'AI suggestions', 'Team collaboration'],
    pros: ['Huge app library', 'Easy to use', 'Powerful automation'],
    cons: ['Can get expensive', 'Complex workflows need paid plans'],
    createdAt: '2023-01-12',
    updatedAt: '2024-12-01'
  },
  {
    id: '43',
    name: 'Tableau AI',
    description: 'AI-enhanced data visualization and business intelligence platform for data analysis.',
    shortDescription: 'AI-enhanced data visualization and business intelligence',
    logo: 'https://img.icons8.com/fluency/96/dashboard.png',
    website: 'https://tableau.com',
    affiliateLink: 'https://tableau.com?ref=aitoolsdirectory',
    category: 'Data Analytics',
    subcategories: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics'],
    pricing: {
      model: 'subscription',
      price: 70,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.5,
    reviewCount: 23456,
    features: ['Interactive dashboards', 'AI insights', 'Data connectors', 'Collaboration tools'],
    pros: ['Powerful visualizations', 'Enterprise-grade', 'Great for large datasets'],
    cons: ['Expensive', 'Steep learning curve', 'Resource intensive'],
    createdAt: '2023-03-08',
    updatedAt: '2024-11-15'
  },
  {
    id: '44',
    name: 'Coursera AI',
    description: 'AI-powered online learning platform with personalized course recommendations and adaptive learning.',
    shortDescription: 'AI-powered online learning with personalized recommendations',
    logo: 'https://img.icons8.com/fluency/96/graduation-cap.png',
    website: 'https://coursera.org',
    affiliateLink: 'https://coursera.org?ref=aitoolsdirectory',
    category: 'Education',
    subcategories: ['Online Learning', 'Course Recommendations', 'Skill Assessment'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.7,
    reviewCount: 89432,
    features: ['AI course recommendations', 'Adaptive learning', 'Certificates', 'University partnerships'],
    pros: ['High-quality content', 'University partnerships', 'Good free courses'],
    cons: ['Certificates cost extra', 'Limited interaction', 'Self-paced can be challenging'],
    createdAt: '2023-02-15',
    updatedAt: '2024-12-03'
  },
  {
    id: '45',
    name: 'Robinhood AI',
    description: 'AI-powered investment platform with automated portfolio management and market insights.',
    shortDescription: 'AI investment platform with automated portfolio management',
    logo: 'https://img.icons8.com/fluency/96/investment.png',
    website: 'https://robinhood.com',
    affiliateLink: 'https://robinhood.com?ref=aitoolsdirectory',
    category: 'Finance',
    subcategories: ['Investment Management', 'Trading Automation', 'Market Analysis'],
    pricing: {
      model: 'freemium',
      price: 0,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.2,
    reviewCount: 156789,
    features: ['Commission-free trading', 'AI insights', 'Portfolio analysis', 'Market news'],
    pros: ['No commission fees', 'Easy to use', 'Good for beginners'],
    cons: ['Limited research tools', 'Basic features', 'Customer service issues'],
    createdAt: '2023-04-20',
    updatedAt: '2024-11-28'
  },
  {
    id: '46',
    name: 'Shopify AI',
    description: 'AI-powered e-commerce platform with intelligent product recommendations and inventory management.',
    shortDescription: 'AI e-commerce platform with smart recommendations',
    logo: 'https://img.icons8.com/fluency/96/shopping-cart.png',
    website: 'https://shopify.com',
    affiliateLink: 'https://shopify.com?ref=aitoolsdirectory',
    category: 'E-commerce',
    subcategories: ['E-commerce Platform', 'Product Recommendations', 'Inventory Management'],
    pricing: {
      model: 'subscription',
      price: 29,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.6,
    reviewCount: 67890,
    features: ['AI product recommendations', 'Inventory optimization', 'Sales analytics', 'Multi-channel selling'],
    pros: ['Easy setup', 'Comprehensive features', 'Good app ecosystem'],
    cons: ['Transaction fees', 'Can get expensive with apps', 'Limited customization'],
    createdAt: '2023-01-25',
    updatedAt: '2024-12-05'
  }
];

export const getFeaturedTools = () => aiTools.filter(tool => tool.isFeatured);
export const getNewTools = () => aiTools.filter(tool => tool.isNew);
export const getToolsByCategory = (category: string) => 
  aiTools.filter(tool => tool.category === category);
export const getToolById = (id: string) => 
  aiTools.find(tool => tool.id === id);
