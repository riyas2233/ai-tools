#!/usr/bin/env python3

import json
import random
from datetime import datetime, timedelta

# Categories and their subcategories
categories = {
    'ChatBots': ['Customer Support', 'Sales Bots', 'Personal Assistants', 'Virtual Agents'],
    'Coding': ['Code Generation', 'Debugging', 'Code Review', 'Documentation', 'Testing'],
    'Design': ['Logo Design', 'UI/UX', 'Graphic Design', 'Brand Identity', 'Image Generation'],
    'Writing': ['Content Writing', 'Copywriting', 'Editing', 'SEO Writing', 'Blog Writing'],
    'Image Editing': ['Photo Enhancement', 'Background Removal', 'Object Removal', 'Style Transfer'],
    'Video': ['Video Generation', 'Video Enhancement', 'Subtitles', 'Animation', 'Editing'],
    'Audio': ['Music Generation', 'Voice Cloning', 'Audio Enhancement', 'Transcription', 'Podcasting'],
    'Marketing': ['Social Media', 'Email Marketing', 'Analytics', 'Ad Generation', 'SEO'],
    'SEO': ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Link Building'],
    'Data Analytics': ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Statistical Analysis'],
    'Education': ['Language Learning', 'Tutoring', 'Course Creation', 'Assessment', 'E-learning'],
    'Healthcare': ['Medical Diagnosis', 'Drug Discovery', 'Patient Care', 'Medical Imaging', 'Telemedicine'],
    'Finance': ['Trading Bots', 'Risk Analysis', 'Portfolio Management', 'Fraud Detection', 'Investment'],
    'Legal': ['Contract Analysis', 'Legal Research', 'Document Review', 'Compliance', 'Legal Automation'],
    'HR & Recruitment': ['Resume Screening', 'Interview Scheduling', 'Performance Analysis', 'Talent Matching'],
    'E-commerce': ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Support'],
    'Gaming': ['Game AI', 'Procedural Generation', 'Player Analytics', 'Game Testing', 'Asset Creation'],
    'Real Estate': ['Property Valuation', 'Market Analysis', 'Virtual Tours', 'Lead Generation'],
    'Travel': ['Trip Planning', 'Price Prediction', 'Recommendation Systems', 'Language Translation'],
    'Productivity': ['Task Management', 'Time Tracking', 'Meeting Assistants', 'Workflow Automation'],
    'Research': ['Literature Review', 'Data Collection', 'Hypothesis Generation', 'Citation Management'],
    'Social Media': ['Content Scheduling', 'Hashtag Generation', 'Audience Analysis', 'Influencer Marketing'],
    'Translation': ['Text Translation', 'Voice Translation', 'Document Translation', 'Website Localization'],
    'Security': ['Threat Detection', 'Fraud Prevention', 'Access Control', 'Vulnerability Assessment'],
    'AI Agents': ['Autonomous Agents', 'Task Automation', 'Decision Making', 'Process Optimization']
}

# Pricing models
pricing_models = [
    {'model': 'free', 'price': 0, 'currency': 'USD', 'period': 'month'},
    {'model': 'freemium', 'price': 0, 'currency': 'USD', 'period': 'month'},
    {'model': 'subscription', 'price': random.randint(5, 99), 'currency': 'USD', 'period': 'month'},
    {'model': 'enterprise', 'price': 'Contact for pricing', 'currency': 'USD', 'period': 'custom'},
    {'model': 'pay-per-use', 'price': round(random.uniform(0.01, 1.0), 3), 'currency': 'USD', 'period': 'usage'}
]

# Icon URLs from icons8.com
icon_urls = [
    'https://img.icons8.com/fluency/96/artificial-intelligence.png',
    'https://img.icons8.com/fluency/96/robot.png',
    'https://img.icons8.com/fluency/96/brain.png',
    'https://img.icons8.com/fluency/96/neural-network.png',
    'https://img.icons8.com/fluency/96/machine-learning.png',
    'https://img.icons8.com/fluency/96/automation.png',
    'https://img.icons8.com/fluency/96/algorithm.png',
    'https://img.icons8.com/fluency/96/data-science.png',
    'https://img.icons8.com/fluency/96/analytics.png',
    'https://img.icons8.com/fluency/96/dashboard.png',
    'https://img.icons8.com/fluency/96/code.png',
    'https://img.icons8.com/fluency/96/programming.png',
    'https://img.icons8.com/fluency/96/design.png',
    'https://img.icons8.com/fluency/96/creative.png',
    'https://img.icons8.com/fluency/96/writing.png',
    'https://img.icons8.com/fluency/96/content.png',
    'https://img.icons8.com/fluency/96/video.png',
    'https://img.icons8.com/fluency/96/audio.png',
    'https://img.icons8.com/fluency/96/image.png',
    'https://img.icons8.com/fluency/96/photo.png',
    'https://img.icons8.com/fluency/96/marketing.png',
    'https://img.icons8.com/fluency/96/social-media.png',
    'https://img.icons8.com/fluency/96/seo.png',
    'https://img.icons8.com/fluency/96/search.png',
    'https://img.icons8.com/fluency/96/education.png',
    'https://img.icons8.com/fluency/96/learning.png',
    'https://img.icons8.com/fluency/96/healthcare.png',
    'https://img.icons8.com/fluency/96/medical.png',
    'https://img.icons8.com/fluency/96/finance.png',
    'https://img.icons8.com/fluency/96/money.png',
    'https://img.icons8.com/fluency/96/legal.png',
    'https://img.icons8.com/fluency/96/law.png',
    'https://img.icons8.com/fluency/96/hr.png',
    'https://img.icons8.com/fluency/96/recruitment.png',
    'https://img.icons8.com/fluency/96/ecommerce.png',
    'https://img.icons8.com/fluency/96/shopping.png',
    'https://img.icons8.com/fluency/96/gaming.png',
    'https://img.icons8.com/fluency/96/game.png',
    'https://img.icons8.com/fluency/96/real-estate.png',
    'https://img.icons8.com/fluency/96/house.png',
    'https://img.icons8.com/fluency/96/travel.png',
    'https://img.icons8.com/fluency/96/airplane.png',
    'https://img.icons8.com/fluency/96/productivity.png',
    'https://img.icons8.com/fluency/96/task.png',
    'https://img.icons8.com/fluency/96/research.png',
    'https://img.icons8.com/fluency/96/science.png',
    'https://img.icons8.com/fluency/96/translation.png',
    'https://img.icons8.com/fluency/96/language.png',
    'https://img.icons8.com/fluency/96/security.png',
    'https://img.icons8.com/fluency/96/shield.png'
]

# Tool name prefixes and suffixes
prefixes = ['AI', 'Smart', 'Auto', 'Intelligent', 'Advanced', 'Pro', 'Ultra', 'Super', 'Meta', 'Quantum', 'Neural', 'Deep', 'Cognitive', 'Adaptive', 'Dynamic']
suffixes = ['AI', 'Bot', 'Assistant', 'Pro', 'Studio', 'Lab', 'Hub', 'Engine', 'Platform', 'Suite', 'Tools', 'Works', 'Genius', 'Master', 'Expert']

# Base tool names by category
base_names = {
    'ChatBots': ['ChatBot', 'Assistant', 'Agent', 'Helper', 'Support', 'Advisor', 'Companion', 'Guide'],
    'Coding': ['Coder', 'Developer', 'Programmer', 'Builder', 'Compiler', 'Debugger', 'Tester', 'Reviewer'],
    'Design': ['Designer', 'Creator', 'Artist', 'Maker', 'Builder', 'Studio', 'Canvas', 'Palette'],
    'Writing': ['Writer', 'Editor', 'Author', 'Scribe', 'Composer', 'Publisher', 'Blogger', 'Copywriter'],
    'Image Editing': ['Editor', 'Enhancer', 'Retoucher', 'Filter', 'Processor', 'Transformer', 'Modifier'],
    'Video': ['Editor', 'Creator', 'Producer', 'Maker', 'Studio', 'Renderer', 'Processor', 'Animator'],
    'Audio': ['Editor', 'Producer', 'Mixer', 'Synthesizer', 'Recorder', 'Enhancer', 'Processor'],
    'Marketing': ['Marketer', 'Promoter', 'Advertiser', 'Campaign', 'Optimizer', 'Analyzer', 'Tracker'],
    'SEO': ['Optimizer', 'Ranker', 'Tracker', 'Analyzer', 'Researcher', 'Monitor', 'Booster'],
    'Data Analytics': ['Analyzer', 'Visualizer', 'Processor', 'Insights', 'Intelligence', 'Dashboard'],
    'Education': ['Tutor', 'Teacher', 'Trainer', 'Educator', 'Instructor', 'Coach', 'Mentor'],
    'Healthcare': ['Doctor', 'Medic', 'Healer', 'Diagnostics', 'Monitor', 'Analyzer', 'Scanner'],
    'Finance': ['Trader', 'Investor', 'Analyzer', 'Calculator', 'Predictor', 'Monitor', 'Advisor'],
    'Legal': ['Lawyer', 'Attorney', 'Advisor', 'Reviewer', 'Analyzer', 'Researcher', 'Assistant'],
    'HR & Recruitment': ['Recruiter', 'Matcher', 'Screener', 'Interviewer', 'Analyzer', 'Tracker'],
    'E-commerce': ['Seller', 'Optimizer', 'Recommender', 'Analyzer', 'Manager', 'Assistant'],
    'Gaming': ['Game', 'Player', 'Generator', 'Builder', 'Tester', 'Analyzer', 'Creator'],
    'Real Estate': ['Realtor', 'Valuator', 'Analyzer', 'Finder', 'Manager', 'Advisor', 'Scout'],
    'Travel': ['Planner', 'Booker', 'Finder', 'Advisor', 'Guide', 'Tracker', 'Organizer'],
    'Productivity': ['Organizer', 'Planner', 'Manager', 'Tracker', 'Scheduler', 'Assistant'],
    'Research': ['Researcher', 'Analyzer', 'Finder', 'Scanner', 'Collector', 'Synthesizer'],
    'Social Media': ['Manager', 'Scheduler', 'Analyzer', 'Monitor', 'Creator', 'Optimizer'],
    'Translation': ['Translator', 'Interpreter', 'Converter', 'Localizer', 'Bridge', 'Communicator'],
    'Security': ['Guardian', 'Protector', 'Scanner', 'Monitor', 'Detector', 'Analyzer', 'Shield'],
    'AI Agents': ['Agent', 'Assistant', 'Automator', 'Worker', 'Processor', 'Executor', 'Manager']
}

def generate_tool_name(category):
    prefix = random.choice(prefixes)
    base = random.choice(base_names.get(category, ['AI', 'Tool', 'Assistant']))
    suffix = random.choice(suffixes)
    
    # Different name patterns
    patterns = [
        f"{prefix} {base}",
        f"{base} {suffix}",
        f"{prefix}{base}",
        f"{base}{suffix}",
        f"{prefix} {base} {suffix}"
    ]
    
    return random.choice(patterns)

def generate_description(name, category):
    actions = {
        'ChatBots': ['chat with customers', 'provide support', 'answer questions', 'assist users'],
        'Coding': ['generate code', 'debug applications', 'review code', 'automate development'],
        'Design': ['create designs', 'generate graphics', 'build layouts', 'design interfaces'],
        'Writing': ['write content', 'edit text', 'create copy', 'generate articles'],
        'Image Editing': ['edit photos', 'enhance images', 'remove backgrounds', 'apply filters'],
        'Video': ['edit videos', 'create animations', 'generate content', 'add effects'],
        'Audio': ['edit audio', 'generate music', 'enhance sound', 'create podcasts'],
        'Marketing': ['create campaigns', 'analyze performance', 'optimize ads', 'track metrics'],
        'SEO': ['optimize content', 'track rankings', 'research keywords', 'analyze competitors'],
        'Data Analytics': ['analyze data', 'create visualizations', 'generate insights', 'predict trends'],
        'Education': ['teach students', 'create courses', 'assess learning', 'provide tutoring'],
        'Healthcare': ['diagnose conditions', 'monitor health', 'analyze symptoms', 'assist doctors'],
        'Finance': ['analyze markets', 'manage portfolios', 'detect fraud', 'predict prices'],
        'Legal': ['review contracts', 'research law', 'analyze documents', 'ensure compliance'],
        'HR & Recruitment': ['screen candidates', 'match talent', 'schedule interviews', 'analyze performance'],
        'E-commerce': ['recommend products', 'optimize prices', 'manage inventory', 'support customers'],
        'Gaming': ['create games', 'generate assets', 'test gameplay', 'analyze players'],
        'Real Estate': ['value properties', 'analyze markets', 'find listings', 'generate leads'],
        'Travel': ['plan trips', 'book flights', 'find deals', 'organize itineraries'],
        'Productivity': ['manage tasks', 'schedule meetings', 'track time', 'automate workflows'],
        'Research': ['find papers', 'analyze data', 'synthesize information', 'generate hypotheses'],
        'Social Media': ['schedule posts', 'analyze engagement', 'create content', 'monitor mentions'],
        'Translation': ['translate text', 'localize content', 'interpret speech', 'bridge languages'],
        'Security': ['detect threats', 'prevent fraud', 'monitor access', 'assess vulnerabilities'],
        'AI Agents': ['automate tasks', 'make decisions', 'process information', 'execute workflows']
    }
    
    action = random.choice(actions.get(category, ['process data', 'automate tasks', 'provide insights']))
    
    descriptions = [
        f"AI-powered platform that helps {action} with advanced machine learning capabilities.",
        f"Intelligent {category.lower()} tool designed to {action} efficiently and accurately.",
        f"Advanced AI solution for businesses looking to {action} at scale.",
        f"Smart automation platform that uses AI to {action} and improve productivity.",
        f"Next-generation {category.lower()} assistant that leverages AI to {action}."
    ]
    
    return random.choice(descriptions)

def generate_features(category):
    feature_sets = {
        'ChatBots': ['Natural language processing', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
        'Coding': ['Code completion', 'Syntax highlighting', 'Error detection', 'Version control'],
        'Design': ['Template library', 'Drag-and-drop editor', 'Export options', 'Collaboration tools'],
        'Writing': ['Grammar checking', 'Style suggestions', 'Plagiarism detection', 'SEO optimization'],
        'Image Editing': ['Batch processing', 'AI filters', 'Background removal', 'Format conversion'],
        'Video': ['Timeline editing', 'Effects library', 'Audio sync', 'Export presets'],
        'Audio': ['Multi-track editing', 'Noise reduction', 'Format support', 'Real-time effects'],
        'Marketing': ['Campaign management', 'A/B testing', 'Analytics reporting', 'Automation workflows'],
        'SEO': ['Keyword tracking', 'Competitor analysis', 'Site auditing', 'Rank monitoring'],
        'Data Analytics': ['Data visualization', 'Statistical analysis', 'Predictive modeling', 'Report generation'],
        'Education': ['Progress tracking', 'Interactive lessons', 'Assessment tools', 'Certification'],
        'Healthcare': ['Patient records', 'Diagnostic tools', 'Treatment planning', 'Compliance tracking'],
        'Finance': ['Portfolio tracking', 'Risk analysis', 'Market data', 'Automated trading'],
        'Legal': ['Document analysis', 'Case research', 'Compliance checking', 'Contract templates'],
        'HR & Recruitment': ['Candidate screening', 'Interview scheduling', 'Performance metrics', 'Onboarding'],
        'E-commerce': ['Product catalog', 'Order management', 'Customer analytics', 'Payment processing'],
        'Gaming': ['Asset generation', 'Player analytics', 'Performance testing', 'Monetization tools'],
        'Real Estate': ['Property listings', 'Market analysis', 'Virtual tours', 'Lead management'],
        'Travel': ['Booking integration', 'Price comparison', 'Itinerary planning', 'Travel alerts'],
        'Productivity': ['Task management', 'Calendar integration', 'Team collaboration', 'Time tracking'],
        'Research': ['Literature search', 'Citation management', 'Data collection', 'Analysis tools'],
        'Social Media': ['Content scheduling', 'Engagement analytics', 'Hashtag research', 'Multi-platform'],
        'Translation': ['Real-time translation', 'Document processing', 'Voice recognition', 'Cultural adaptation'],
        'Security': ['Threat detection', 'Vulnerability scanning', 'Access control', 'Incident response'],
        'AI Agents': ['Task automation', 'Decision making', 'Process optimization', 'Learning capabilities']
    }
    
    base_features = feature_sets.get(category, ['AI processing', 'Data analysis', 'Automation', 'Integration'])
    return random.sample(base_features, min(4, len(base_features)))

def generate_tool(tool_id, category):
    name = generate_tool_name(category)
    description = generate_description(name, category)
    short_description = description.split('.')[0]
    
    # Ensure short description is not too long
    if len(short_description) > 80:
        short_description = short_description[:77] + "..."
    
    subcategories = random.sample(categories[category], min(3, len(categories[category])))
    pricing = random.choice(pricing_models).copy()
    if pricing['model'] == 'subscription':
        pricing['price'] = random.randint(5, 99)
    elif pricing['model'] == 'pay-per-use':
        pricing['price'] = round(random.uniform(0.01, 1.0), 3)
    
    rating = round(random.uniform(3.5, 4.9), 1)
    review_count = random.randint(50, 50000)
    
    features = generate_features(category)
    
    pros = [
        'Easy to use', 'Good value', 'Reliable performance', 'Great support',
        'Fast processing', 'Accurate results', 'Good integrations', 'Regular updates'
    ]
    cons = [
        'Learning curve', 'Limited features', 'Expensive', 'Slow support',
        'Complex setup', 'Limited customization', 'Requires training', 'No mobile app'
    ]
    
    # Generate dates
    created_date = datetime.now() - timedelta(days=random.randint(30, 730))
    updated_date = created_date + timedelta(days=random.randint(1, 365))
    
    tool = {
        'id': str(tool_id),
        'name': name,
        'description': description,
        'shortDescription': short_description,
        'logo': random.choice(icon_urls),
        'website': f"https://{name.lower().replace(' ', '')}.com",
        'affiliateLink': f"https://{name.lower().replace(' ', '')}.com?ref=aitoolsdirectory",
        'category': category,
        'subcategories': subcategories,
        'pricing': pricing,
        'rating': rating,
        'reviewCount': review_count,
        'features': features,
        'pros': random.sample(pros, 3),
        'cons': random.sample(cons, 2),
        'screenshots': [f"https://images.unsplash.com/photo-{random.randint(1400000000, 1700000000)}-{random.randint(100000000, 999999999)}?w=800&h=600&fit=crop"],
        'isFeatured': random.choice([True, False, False, False]),  # 25% chance
        'isNew': random.choice([True, False, False]),  # 33% chance
        'useCases': random.sample([
            'Business Automation', 'Content Creation', 'Data Analysis', 'Customer Support',
            'Marketing Campaigns', 'Product Development', 'Research', 'Education',
            'Healthcare', 'Finance', 'Legal', 'E-commerce', 'Gaming', 'Real Estate'
        ], 3),
        'createdAt': created_date.strftime('%Y-%m-%d'),
        'updatedAt': updated_date.strftime('%Y-%m-%d')
    }
    
    return tool

def generate_tools_batch(start_id, count):
    tools = []
    category_list = list(categories.keys())
    
    for i in range(count):
        tool_id = start_id + i
        category = category_list[i % len(category_list)]  # Distribute evenly across categories
        tool = generate_tool(tool_id, category)
        tools.append(tool)
    
    return tools

# Generate tools starting from ID 36 (we have 35 tools already)
tools_batch = generate_tools_batch(36, 465)  # Generate 465 more tools to reach 500

# Convert to TypeScript format
def tool_to_typescript(tool):
    pricing_str = f"""{{
      model: '{tool['pricing']['model']}',
      price: {tool['pricing']['price'] if isinstance(tool['pricing']['price'], (int, float)) else f"'{tool['pricing']['price']}'"},
      currency: '{tool['pricing']['currency']}',
      period: '{tool['pricing']['period']}'
    }}"""
    
    features_str = "['" + "', '".join(tool['features']) + "']"
    pros_str = "['" + "', '".join(tool['pros']) + "']"
    cons_str = "['" + "', '".join(tool['cons']) + "']"
    subcategories_str = "['" + "', '".join(tool['subcategories']) + "']"
    screenshots_str = "['" + "', '".join(tool['screenshots']) + "']"
    use_cases_str = "['" + "', '".join(tool['useCases']) + "']"
    
    return f"""  {{
    id: '{tool['id']}',
    name: '{tool['name']}',
    description: '{tool['description']}',
    shortDescription: '{tool['shortDescription']}',
    logo: '{tool['logo']}',
    website: '{tool['website']}',
    affiliateLink: '{tool['affiliateLink']}',
    category: '{tool['category']}',
    subcategories: {subcategories_str},
    pricing: {pricing_str},
    rating: {tool['rating']},
    reviewCount: {tool['reviewCount']},
    features: {features_str},
    pros: {pros_str},
    cons: {cons_str},
    screenshots: {screenshots_str},
    isFeatured: {str(tool['isFeatured']).lower()},
    isNew: {str(tool['isNew']).lower()},
    useCases: {use_cases_str},
    createdAt: '{tool['createdAt']}',
    updatedAt: '{tool['updatedAt']}'
  }}"""

# Generate TypeScript code
typescript_tools = []
for tool in tools_batch:
    typescript_tools.append(tool_to_typescript(tool))

# Write to file
with open('/workspace/ai-tools/additional_tools.ts', 'w') as f:
    f.write(',\n'.join(typescript_tools))

print(f"Generated {len(tools_batch)} additional AI tools!")
print("Tools saved to additional_tools.ts")