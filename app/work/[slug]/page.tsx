'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

// Demo case studies data
const caseStudies: Record<string, any> = {
  'bongohub': {
    title: 'Bongohub',
    subtitle: 'Creative Marketplace · Web App',
    role: 'UI/UX Designer',
    timeline: '6 months (2024)',
    team: '1 Designer, 4 Engineers, 1 Product Manager',
    heroImage: '/Bongohub/bongo hub.png',
    overview: 'Bongohub is a creative marketplace designed to help creatives discover work, sell services, and build long-term professional communities. The platform bridges the gap between talented creatives and clients seeking quality work, while fostering meaningful professional relationships.',
    problem: 'Creatives struggle to find consistent, quality work opportunities while clients face challenges in evaluating talent and building trust with freelancers. Existing platforms focus on transactions rather than relationships, leading to one-off engagements instead of sustainable professional partnerships.',
    constraints: [
      'Need to balance marketplace functionality with community features',
      'Building trust between strangers in a digital environment',
      'Complex matching algorithm for skills and project requirements',
    ],
    approach: 'Conducted extensive user research with 50+ creatives and clients. Created user personas and journey maps for both sides of the marketplace. Developed a design system that feels professional yet creative. Iteratively tested features with beta users to ensure the platform serves both creatives and clients effectively.',
    keyFeatures: [
      { image: '/Bongohub/bongo hub.png' },
      { image: '/Bongohub/bongo hub2.png' },
      { image: '/Bongohub/USER Place FACING PROFILE.png' },
      { image: '/Bongohub/bongo hub.png' },
    ],
    decisions: [
      {
        decision: 'Portfolio-First Profiles',
        rationale: 'Made visual work samples the centerpiece of creative profiles, allowing clients to quickly evaluate quality and style before diving into details.'
      },
      {
        decision: 'Transparent Service Listings',
        rationale: 'Created clear service packages with defined deliverables and pricing, reducing back-and-forth negotiation and setting clear expectations upfront.'
      },
      {
        decision: 'Community Building Tools',
        rationale: 'Integrated networking features to help creatives connect with peers, fostering a supportive community beyond just transactional relationships.'
      }
    ],
    results: [
      '500+ active creatives joined during beta phase',
      '200+ successful project matches in first 3 months',
      '85% client satisfaction rate',
      '4.6/5 average platform rating',
      '70% of users reported finding consistent work through the platform'
    ],
    reflection: 'This project taught me the importance of designing for trust and relationship-building in marketplace platforms. The challenge was balancing the needs of two very different user groups while maintaining a cohesive experience.',
    nextSteps: [
      'Add video portfolios and client testimonials',
      'Implement reputation and review system',
      'Create skill-based matching recommendations',
      'Develop mobile app for on-the-go networking'
    ]
  },
  'ai-tutor': {
    title: 'AI Tutor App',
    subtitle: 'EdTech · Mobile App',
    role: 'Product Designer',
    timeline: '5 months (2024)',
    team: '1 Designer, 3 Engineers, 1 AI Specialist, 1 Education Consultant',
    heroImage: '/Ai tutor learning app/Ai Tutor app.png',
    overview: 'An AI-powered learning app for kids that enables curiosity-driven learning through natural language questions. The app transforms how children learn by allowing them to ask questions naturally and receive age-appropriate, engaging answers.',
    problem: 'Traditional learning apps follow rigid curricula that don\'t adapt to children\'s natural curiosity. Kids have questions at all times, but parents and teachers aren\'t always available. Existing educational tools are often intimidating or overwhelming for young learners.',
    constraints: [
      'Must be safe and age-appropriate for children',
      'Need to maintain engagement without being distracting',
      'Complex AI responses must be simplified for kids',
    ],
    approach: 'Conducted research with parents, teachers, and children aged 6-12. Created child-friendly personas and mapped typical learning scenarios. Collaborated with education experts on content strategy. Designed with a focus on simplicity, safety, and encouragement.',
    keyFeatures: [
      { image: '/Ai tutor learning app/Ai Tutor app.png' },
      { image: '/Ai tutor learning app/Home page.png' },
      { image: '/Ai tutor learning app/chat page.png' },
      { image: '/Ai tutor learning app/History page.png' },
    ],
    decisions: [
      {
        decision: 'Conversational Interface',
        rationale: 'Designed the interaction as a friendly conversation rather than a search tool, making it feel natural and approachable for kids.'
      },
      {
        decision: 'Visual Learning Aids',
        rationale: 'Incorporated images, diagrams, and visual examples alongside text to support different learning styles and maintain engagement.'
      },
      {
        decision: 'Positive Reinforcement',
        rationale: 'Added encouragement and celebration for curiosity and learning, building confidence without pressure or judgment.'
      }
    ],
    results: [
      '95% parent satisfaction with educational value',
      'Average 15 minutes daily engagement per child',
      '80% of kids reported feeling more confident asking questions',
      'Featured in EdTech Innovation Awards',
      '1,000+ active families during beta phase'
    ],
    reflection: 'Designing for children requires a completely different mindset - every interaction must be intuitive, safe, and encouraging. The project reinforced the importance of working with domain experts (educators) throughout the design process.',
    nextSteps: [
      'Add parent dashboard for tracking progress',
      'Implement multi-language support',
      'Create subject-specific learning paths',
      'Add collaborative learning features for siblings'
    ]
  },
  'coinmarket': {
    title: 'CoinMarket Dashboard',
    subtitle: 'Fintech · Data-Heavy Dashboard',
    role: 'UI/UX Designer',
    timeline: '4 months (2024)',
    team: '1 Designer, 2 Engineers',
    heroImage: '/Coinmarket /couinmarket.png',
    overview: 'A redesign of a high-traffic crypto market dashboard aimed at reducing cognitive load caused by dense financial data. The project focused on making complex market information scannable and actionable.',
    problem: 'The existing dashboard overwhelmed users with too much information at once. Dense data tables, poor hierarchy, and cluttered layouts made it difficult for users to quickly assess market conditions and make informed trading decisions.',
    constraints: [
      'Cannot remove data points - all information must remain accessible',
      'Real-time updates must not be jarring or distracting',
      'Must work across different screen sizes and devices',
    ],
    approach: 'Analyzed user behavior through heatmaps and session recordings. Conducted surveys with 100+ active traders to understand information priorities. Created progressive disclosure patterns and improved visual hierarchy through whitespace and typography.',
    keyFeatures: [
      { image: '/Coinmarket /couinmarket.png' },
      { image: '/Coinmarket /couinmarket.png' },
      { image: '/Coinmarket /couinmarket.png' },
      { image: '/Coinmarket /couinmarket.png' },
    ],
    decisions: [
      {
        decision: 'Scannable Data Tables',
        rationale: 'Increased row height, improved column spacing, and used color strategically to make scanning large datasets easier on the eyes.'
      },
      {
        decision: 'Progressive Information Display',
        rationale: 'Showed essential data upfront with expandable rows for detailed information, reducing initial cognitive load.'
      },
      {
        decision: 'Visual Trend Indicators',
        rationale: 'Added mini charts and visual indicators for quick trend assessment without needing to read numbers.'
      }
    ],
    results: [
      '40% reduction in user-reported overwhelm',
      '25% increase in time spent on platform',
      '30% faster task completion for finding specific coins',
      'Bounce rate decreased from 55% to 32%',
      'Positive feedback from 90% of surveyed users'
    ],
    reflection: 'This project taught me that good data design is about prioritization and hierarchy, not minimalism. Users need all their data, but they need it organized in a way that supports their mental model and workflow.',
    nextSteps: [
      'Add customizable dashboard layouts',
      'Implement advanced filtering and search',
      'Create saved views for different trading strategies',
      'Add portfolio tracking integration'
    ]
  },
  'savings-dashboard': {
    title: 'Savings Dashboard',
    subtitle: 'Fintech · Web App',
    role: 'Product Designer',
    timeline: '3 months (2024)',
    team: '1 Designer, 3 Engineers',
    heroImage: '/saving dashboard/saving dashboard.png',
    overview: 'A savings dashboard that gives users a clear overview of their financial activity, including balances, transactions, and progress toward savings goals. The design prioritizes clarity and reassurance.',
    problem: 'Users felt anxious about their finances due to scattered information across multiple apps and unclear progress toward goals. They needed a single source of truth that would make them feel in control rather than overwhelmed.',
    constraints: [
      'Integration with multiple banks and financial institutions',
      'Security and privacy concerns around financial data',
      'Diverse user financial literacy levels',
    ],
    approach: 'Interviewed 30 users about their financial management habits and pain points. Created emotional journey maps to understand financial anxiety triggers. Designed with calming colors, clear progress indicators, and actionable insights.',
    keyFeatures: [
      { image: '/saving dashboard/saving dashboard.png' },
      { image: '/saving dashboard/saving dashboard(1).png' },
      { image: '/saving dashboard/saving dashboard.png' },
      { image: '/saving dashboard/saving dashboard(1).png' },
    ],
    decisions: [
      {
        decision: 'Visual Goal Progress',
        rationale: 'Made savings goals visually prominent with clear progress bars and milestone celebrations, turning saving into an achievement system.'
      },
      {
        decision: 'Calm, Reassuring Design',
        rationale: 'Used soft colors and generous whitespace to reduce financial anxiety and create a sense of control and calm.'
      },
      {
        decision: 'Actionable Insights',
        rationale: 'Provided clear next steps and recommendations rather than just displaying data, helping users know what to do.'
      }
    ],
    results: [
      '65% of users reported feeling more in control of finances',
      'Average 23% increase in savings rate after 3 months',
      '4.8/5 user satisfaction rating',
      '85% weekly active user retention',
      'Featured in Best Fintech Apps 2024'
    ],
    reflection: 'Financial design isn\'t just about displaying numbers - it\'s about building confidence and reducing anxiety. The most successful feature was the visual goal tracking, which turned saving from a chore into an engaging activity.',
    nextSteps: [
      'Add investment tracking and recommendations',
      'Implement bill reminders and recurring payment management',
      'Create family account sharing features',
      'Develop personalized savings challenges'
    ]
  },
  'crypto-converter': {
    title: 'Crypto Rates & Currency Converter',
    subtitle: 'Crypto · Web App',
    role: 'Product Designer',
    timeline: '2 months (2023)',
    team: '1 Designer, 2 Engineers',
    heroImage: '/crypto dashboard/crypto dashboard.png',
    overview: 'A real-time crypto dashboard designed for fast access to exchange rates and currency conversions. The experience emphasizes speed, accuracy, and readability.',
    problem: 'Existing crypto converters were either buried in complex trading platforms or were slow and unreliable. Users needed a dedicated tool for quick conversions without the clutter of full trading interfaces.',
    constraints: [
      'Real-time data must update without janky UI shifts',
      'Must work reliably during high market volatility',
      'Limited API calls for real-time pricing',
    ],
    approach: 'Analyzed conversion user flows and identified friction points. Created a stripped-down interface focused solely on conversion tasks. Optimized for speed and clarity above all else.',
    keyFeatures: [
      { image: '/crypto dashboard/crypto dashboard.png' },
      { image: '/crypto dashboard/Untitled(5).png' },
      { image: '/crypto dashboard/crypto dashboard.png' },
      { image: '/crypto dashboard/Untitled(5).png' },
    ],
    decisions: [
      {
        decision: 'Large, Clear Input Fields',
        rationale: 'Made conversion inputs prominent and easy to interact with, especially on mobile devices.'
      },
      {
        decision: 'Instant Conversion',
        rationale: 'Showed conversion results in real-time as users typed, eliminating the need for a "convert" button.'
      },
      {
        decision: 'Minimal Interface',
        rationale: 'Removed all non-essential elements to keep the focus on the core conversion task.'
      }
    ],
    results: [
      'Average conversion time under 3 seconds',
      '10,000+ daily active users within first month',
      '92% task completion rate',
      'Featured in Crypto Tools Directory',
      'Zero complaints about conversion accuracy'
    ],
    reflection: 'Sometimes the best design is the simplest one. By focusing on doing one thing exceptionally well, we created a tool that users bookmarked and returned to daily.',
    nextSteps: [
      'Add historical rate comparisons',
      'Implement favorite currency pairs',
      'Create widget for embedding in other sites',
      'Add price alerts for specific rates'
    ]
  },
  'predix': {
    title: 'Predix',
    subtitle: 'Crypto · AI-Assisted Trading App',
    role: 'Product Designer',
    timeline: '5 months (2023)',
    team: '1 Designer, 3 Engineers, 1 AI Specialist',
    heroImage: '/predix/predix.jpeg',
    overview: 'An AI-assisted trading app that surfaces crypto market signals to support better decision-making. The UX focuses on simplifying complex trading insights into digestible signals.',
    problem: 'Crypto trading is overwhelming with countless indicators and data points. Novice traders struggle to interpret signals while experienced traders suffer from analysis paralysis. There was a need for AI to surface actionable insights without replacing human decision-making.',
    constraints: [
      'AI predictions must be presented with appropriate confidence levels',
      'Cannot appear as financial advice due to regulations',
      'Must work for both novice and experienced traders',
    ],
    approach: 'Interviewed 40+ crypto traders about their decision-making process. Mapped out how traders currently analyze markets. Designed AI insights to augment rather than replace human judgment. Created clear visual signals that communicate confidence and risk.',
    keyFeatures: [
      { image: '/predix/predix.jpeg' },
      { image: '/predix/Free iPhone 17 Pro Cosmic Orange Mockup (Mockuuups Studio)(2).png' },
      { image: '/predix/predix.jpeg' },
      { image: '/predix/Free iPhone 17 Pro Cosmic Orange Mockup (Mockuuups Studio)(2).png' },
    ],
    decisions: [
      {
        decision: 'Signal Confidence Levels',
        rationale: 'Showed AI confidence alongside predictions, helping users understand when to trust signals and when to do additional research.'
      },
      {
        decision: 'Visual Market Sentiment',
        rationale: 'Used clear visual indicators (color, icons, charts) to communicate complex market conditions at a glance.'
      },
      {
        decision: 'Educational Context',
        rationale: 'Provided brief explanations of why AI surfaced each signal, helping users learn rather than blindly following recommendations.'
      }
    ],
    results: [
      '75% of users reported more confident trading decisions',
      'Average portfolio performance improved 18%',
      '2,000+ active traders in first quarter',
      '4.5/5 app store rating',
      'Featured in Top Crypto Trading Tools 2023'
    ],
    reflection: 'Designing for AI-assisted decision-making requires careful balance - the AI should empower users, not replace their judgment. The most important design decision was showing confidence levels, which built trust in the system.',
    nextSteps: [
      'Add customizable signal types and thresholds',
      'Implement social trading features',
      'Create paper trading mode for practice',
      'Develop advanced analytics for experienced traders'
    ]
  },
  'designa-agency': {
    title: 'Designa Agency',
    subtitle: 'Web3 · Marketing Website',
    role: 'Web Designer',
    timeline: '3 months (2023)',
    team: '1 Designer, 2 Developers',
    heroImage: '/Design Agency/design agency.png',
    overview: 'A website for a Web3-focused design agency, built to communicate credibility, craft, and strategic thinking. The layout highlights case studies, services, and process while balancing bold Web3 aesthetics with clarity.',
    problem: 'The agency needed to appeal to both technical Web3 founders and traditional businesses exploring blockchain. The existing site looked generic and didn\'t communicate the unique value proposition of Web3-specialized design expertise.',
    constraints: [
      'Must appeal to diverse audience from crypto-native to Web3-curious',
      'Balance cutting-edge aesthetic with professional credibility',
      'Limited content and case studies at launch',
    ],
    approach: 'Analyzed competitor agency websites in both Web3 and traditional design spaces. Created messaging strategy that bridges Web3 and mainstream audiences. Developed a visual system that feels innovative without being inaccessible.',
    keyFeatures: [
      { image: '/Design Agency/design agency.png' },
      { image: '/Design Agency/design agency 2.png' },
      { image: '/Design Agency/Content.png' },
      { image: '/Design Agency/design agency.png' },
    ],
    decisions: [
      {
        decision: 'Showcase-First Homepage',
        rationale: 'Led with visual work samples rather than text, letting the quality of work speak for itself and grab attention immediately.'
      },
      {
        decision: 'Clear Service Breakdown',
        rationale: 'Organized services by client need rather than internal categories, making it easy for prospects to see how the agency can help them.'
      },
      {
        decision: 'Accessible Web3 Language',
        rationale: 'Used clear explanations and avoided jargon, making the agency approachable to companies new to Web3.'
      }
    ],
    results: [
      '200% increase in qualified lead inquiries',
      'Average project value increased 40%',
      '15+ new clients onboarded in first 6 months',
      'Featured in Web3 Design Agency Directory',
      'Won 3 major blockchain project contracts'
    ],
    reflection: 'The key to successful agency websites is proving expertise through work quality, not just claiming it through words. The portfolio showcase drove more conversions than any other element.',
    nextSteps: [
      'Add interactive case study walkthroughs',
      'Implement client testimonial videos',
      'Create Web3 design resources blog',
      'Develop client portal for project collaboration'
    ]
  },
  'coinly': {
    title: 'Coinly',
    subtitle: 'Fintech · Crypto Investment App',
    role: 'Product Designer',
    timeline: '4 months (2023)',
    team: '1 Designer, 3 Engineers',
    heroImage: '/Coinly/Untitled.png',
    overview: 'A crypto investment app designed to help users track assets, monitor performance, and make informed investment decisions. The UX centers around transparency and simplicity.',
    problem: 'New crypto investors felt overwhelmed by complex trading platforms built for day traders. They needed a simpler tool focused on long-term investment tracking rather than active trading, with clear portfolio visibility and performance insights.',
    constraints: [
      'Real-time price updates across multiple exchanges',
      'Security concerns around API keys and wallet connections',
      'Varying levels of crypto knowledge among users',
    ],
    approach: 'Interviewed 50+ crypto investors about their tracking needs and pain points. Mapped investment monitoring behaviors. Designed with investment principles rather than trading tactics in mind. Created educational content to build user confidence.',
    keyFeatures: [
      { image: '/Coinly/Untitled.png' },
      { image: '/Coinly/Untitled(2).png' },
      { image: '/Coinly/Untitled.png' },
      { image: '/Coinly/Untitled(2).png' },
    ],
    decisions: [
      {
        decision: 'Portfolio-First View',
        rationale: 'Showed overall portfolio value and performance prominently, de-emphasizing individual coin prices to encourage long-term thinking.'
      },
      {
        decision: 'Clear Gain/Loss Visualization',
        rationale: 'Made it easy to see what\'s performing well and what isn\'t, without the complexity of trading charts.'
      },
      {
        decision: 'Simple, Secure Connection',
        rationale: 'Designed a straightforward onboarding flow for connecting wallets and exchanges, with clear security explanations.'
      }
    ],
    results: [
      '5,000+ active users in first quarter',
      '4.7/5 app store rating',
      '80% monthly retention rate',
      'Average 12 portfolio checks per week per user',
      'Featured in Best Crypto Portfolio Trackers'
    ],
    reflection: 'The crypto space often confuses complexity with sophistication. By creating a simple, focused tool for a specific use case (portfolio tracking), we served a large underserved audience of casual investors.',
    nextSteps: [
      'Add tax reporting and export features',
      'Implement price alerts and notifications',
      'Create investment insights and recommendations',
      'Develop DeFi position tracking'
    ]
  },
  'crypto-hub': {
    title: 'Crypto Hub',
    subtitle: 'Crypto · Content Platform',
    role: 'UI/UX Designer',
    timeline: '3 months (2023)',
    team: '1 Designer, 2 Engineers',
    heroImage: '/crypto hub/crypto hub.png',
    overview: 'A web app that aggregates crypto news, market updates, and insights into a single platform. The design focuses on content hierarchy and filtering to help users stay informed without information overload.',
    problem: 'Crypto information is scattered across Twitter, Discord, news sites, and blogs. Users waste time hunting for relevant news and struggle to filter signal from noise. They needed a curated hub that surfaces quality information.',
    constraints: [
      'Content from diverse sources with varying quality',
      'Real-time updates without overwhelming users',
      'Monetization through ads without harming UX',
    ],
    approach: 'Analyzed how crypto enthusiasts currently consume information. Studied news aggregation patterns and content discovery behaviors. Created filtering and organization systems based on user needs rather than source types.',
    keyFeatures: [
      { image: '/crypto hub/crypto hub.png' },
      { image: '/crypto hub/crypto hub.png' },
      { image: '/crypto hub/crypto hub.png' },
      { image: '/crypto hub/crypto hub.png' },
    ],
    decisions: [
      {
        decision: 'Topic-Based Organization',
        rationale: 'Organized content by topics (DeFi, NFTs, Regulations) rather than source, making it easier to follow specific interests.'
      },
      {
        decision: 'Quality Indicators',
        rationale: 'Added signals for source credibility and article quality, helping users quickly assess whether content is worth their time.'
      },
      {
        decision: 'Customizable Feed',
        rationale: 'Allowed users to customize their feed based on interests, reducing irrelevant noise and increasing engagement.'
      }
    ],
    results: [
      '15,000+ monthly active users',
      'Average 8 minutes time on site',
      '60% of users returned at least 3 times per week',
      '4.3/5 user satisfaction rating',
      'Became go-to news source for 40% of regular users'
    ],
    reflection: 'Content aggregation is only valuable if it includes intelligent curation and filtering. The personalization features drove most of the engagement - users loved having their own tailored crypto news feed.',
    nextSteps: [
      'Add community discussion features',
      'Implement AI-powered content recommendations',
      'Create newsletter and alert system',
      'Develop mobile app with notifications'
    ]
  },
  'home-finance': {
    title: 'Home Finance Dashboard',
    subtitle: 'Fintech · Personal Finance Web App',
    role: 'Product Designer',
    timeline: '4 months (2023)',
    team: '1 Designer, 3 Engineers',
    heroImage: '/Home Dashboard/home dashboard.png',
    overview: 'A personal finance home dashboard that brings all money activity into one central view. The UX is designed around quick orientation - helping users instantly understand their financial situation.',
    problem: 'People juggle multiple bank accounts, credit cards, investments, and bills across different apps. They lack a comprehensive view of their overall financial health, leading to poor money decisions and unnecessary stress.',
    constraints: [
      'Integration complexity with various financial institutions',
      'Data privacy and security requirements',
      'Diverse financial goals and situations across users',
    ],
    approach: 'Conducted diary studies with 20 users tracking their financial management for 2 weeks. Identified moments of confusion and anxiety. Created a dashboard that answers key questions at a glance: Where is my money? What changed? What needs attention?',
    keyFeatures: [
      { image: '/Home Dashboard/home dashboard.png' },
      { image: '/Home Dashboard/home dashboard.png' },
      { image: '/Home Dashboard/home dashboard.png' },
      { image: '/Home Dashboard/home dashboard.png' },
    ],
    decisions: [
      {
        decision: 'At-a-Glance Summary',
        rationale: 'Created a hero section showing total net worth and week-over-week change, giving instant financial orientation.'
      },
      {
        decision: 'Action-Oriented Insights',
        rationale: 'Surfaced bills due, unusual spending, and opportunities for saving - telling users what to do, not just what\'s happening.'
      },
      {
        decision: 'Progressive Detail',
        rationale: 'Designed in layers from high-level overview to detailed transactions, letting users drill down only when needed.'
      }
    ],
    results: [
      '72% of users reported better financial awareness',
      'Average checking of dashboard increased from 2x to 5x per week',
      'Bill payment on-time rate improved 35%',
      '4.6/5 user satisfaction score',
      '90-day retention rate of 78%'
    ],
    reflection: 'The "home" dashboard concept resonated strongly - users wanted one place to check everything, like checking the weather. The most valuable design element was the change indicators, showing what was different since last visit.',
    nextSteps: [
      'Add budget planning and tracking',
      'Implement financial goal setting',
      'Create spending insights and patterns analysis',
      'Develop financial health score'
    ]
  },
  'meal-prep': {
    title: 'Meal Prep App',
    subtitle: 'Food Tech · Mobile App',
    role: 'UX Designer',
    timeline: '3 months (2023)',
    team: '1 Designer, 2 Engineers, 1 Nutritionist',
    heroImage: '/Meal prepping/Group 1.png',
    overview: 'A meal-prep ordering app that simplifies how users discover meals, place orders, and manage recurring plans. The experience emphasizes clarity in pricing, nutrition, and scheduling.',
    problem: 'Healthy eating requires planning and time that busy professionals don\'t have. Generic meal delivery apps lack nutritional customization, while meal prep services have confusing ordering processes and unclear pricing.',
    constraints: [
      'Complex dietary restrictions and allergy management',
      'Logistics of delivery scheduling and meal freshness',
      'Balancing meal variety with operational efficiency',
    ],
    approach: 'Interviewed 35+ working professionals about their eating habits and meal planning struggles. Collaborated with nutritionists on meal planning best practices. Designed flows that make healthy eating the easiest choice.',
    keyFeatures: [
      { image: '/Meal prepping/Group 1.png' },
      { image: '/Meal prepping/mockuuups-free-transparent-iphone-air-mockup(2).png' },
      { image: '/Meal prepping/Group 1.png' },
      { image: '/Meal prepping/mockuuups-free-transparent-iphone-air-mockup(2).png' },
    ],
    decisions: [
      {
        decision: 'Visual Meal Calendar',
        rationale: 'Created a weekly calendar view showing planned meals at a glance, making it easy to manage meal schedules visually.'
      },
      {
        decision: 'Transparent Nutrition Info',
        rationale: 'Displayed macros and calories prominently without being preachy, empowering informed choices.'
      },
      {
        decision: 'Flexible Subscription',
        rationale: 'Allowed pause, skip, and modification of subscriptions to accommodate changing schedules and preferences.'
      }
    ],
    results: [
      '1,500+ active subscribers within first quarter',
      '88% week-over-week retention',
      'Average order value increased 30% after redesign',
      '4.8/5 app rating',
      '85% of users reported healthier eating habits'
    ],
    reflection: 'Food apps succeed when they make the healthy choice the easy choice. The flexible subscription model was key - users appreciated control over their meal plans rather than rigid commitments.',
    nextSteps: [
      'Add meal customization and ingredient swaps',
      'Implement social features for sharing recipes',
      'Create nutrition coaching integration',
      'Develop family meal planning features'
    ]
  },
  'mintify': {
    title: 'Mintify',
    subtitle: 'Web3 · NFT Marketplace',
    role: 'Product Designer',
    timeline: '5 months (2023)',
    team: '1 Designer, 4 Engineers, 1 Blockchain Expert',
    heroImage: '/Mintify/mintify.png',
    overview: 'A Web3 platform that enables artists to mint, showcase, and sell digital artwork. The UX is designed to demystify blockchain concepts by guiding users through minting flows with clear steps and minimal jargon.',
    problem: 'Artists wanted to participate in the NFT space but were intimidated by blockchain complexity. Existing platforms assumed technical knowledge, creating barriers to entry. Artists needed a platform that handled the technical complexity while they focused on their art.',
    constraints: [
      'Gas fees and blockchain transaction costs',
      'Wallet setup complexity for non-technical users',
      'Volatile NFT market and pricing uncertainty',
    ],
    approach: 'Interviewed 30+ digital artists about NFT experiences and hesitations. Mapped the minting journey and identified confusion points. Created educational content integrated into the workflow. Designed with progressive complexity - simple for beginners, powerful for experienced users.',
    keyFeatures: [
      { image: '/Mintify/mintify.png' },
      { image: '/Mintify/mintify.png' },
      { image: '/Mintify/mintify.png' },
      { image: '/Mintify/mintify.png' },
    ],
    decisions: [
      {
        decision: 'Guided Minting Flow',
        rationale: 'Created a step-by-step wizard that explained each decision point (blockchain choice, royalties, pricing) in plain language.'
      },
      {
        decision: 'Gas Fee Transparency',
        rationale: 'Showed estimated costs upfront and explained what users were paying for, reducing anxiety around blockchain transactions.'
      },
      {
        decision: 'Portfolio Showcase',
        rationale: 'Made artist profiles and galleries beautiful and prominent, putting art first rather than technical details.'
      }
    ],
    results: [
      '800+ artists onboarded in first quarter',
      '2,500+ NFTs minted',
      '$500K+ in total sales volume',
      '4.5/5 platform rating',
      'Featured in Web3 Creator Tools'
    ],
    reflection: 'Web3 design requires bridging two worlds - the simplicity users expect from modern apps and the complexity of blockchain technology. The most successful approach was hiding complexity behind clear workflows rather than eliminating it entirely.',
    nextSteps: [
      'Add collection management and drops',
      'Implement artist collaboration features',
      'Create buyer portfolio tracking',
      'Develop mobile app for browsing and bidding'
    ]
  },
  'subscription-manager': {
    title: 'Subscription Manager App',
    subtitle: 'Fintech / Productivity · Mobile App',
    role: 'Product Designer',
    timeline: '3 months (2022)',
    team: '1 Designer, 2 Engineers',
    heroImage: '/subscription app/subscription app.png',
    overview: 'An app that helps users track and manage all subscriptions in one place. The design focuses on visibility and control - surfacing active subscriptions, renewal dates, and spending patterns.',
    problem: 'People lose track of subscriptions across various services, leading to surprise charges and wasted money on unused subscriptions. They needed a centralized tool to see everything they\'re paying for and easily cancel what they don\'t need.',
    constraints: [
      'Cannot automatically detect all subscriptions',
      'Cancellation processes vary across services',
      'Privacy concerns around accessing transaction data',
    ],
    approach: 'Surveyed 100+ users about subscription pain points. Found that surprise renewals and forgotten subscriptions were the biggest issues. Designed around preventing these problems through proactive alerts and clear visibility.',
    keyFeatures: [
      { image: '/subscription app/subscription app.png' },
      { image: '/subscription app/subscription app.png' },
      { image: '/subscription app/subscription app.png' },
      { image: '/subscription app/subscription app.png' },
    ],
    decisions: [
      {
        decision: 'Calendar View',
        rationale: 'Created a calendar showing upcoming charges, making it easy to see what\'s coming and avoid surprises.'
      },
      {
        decision: 'Quick Cancel Actions',
        rationale: 'Provided direct links and instructions for canceling each service, removing the friction from cutting unused subscriptions.'
      },
      {
        decision: 'Spending Insights',
        rationale: 'Showed monthly and yearly spending totals to make subscription costs tangible and motivate cleanup.'
      }
    ],
    results: [
      '10,000+ downloads in first month',
      'Users saved average $200/year in unused subscriptions',
      '4.6/5 app store rating',
      'Featured in Productivity Apps category',
      '70% of users canceled at least one subscription'
    ],
    reflection: 'Sometimes the best app solves one specific problem really well. By focusing purely on subscription management rather than trying to be a full personal finance app, we created a tool people actually used.',
    nextSteps: [
      'Add price tracking for subscription changes',
      'Implement shared family subscription management',
      'Create budget alerts when spending increases',
      'Develop subscription deal and alternative recommendations'
    ]
  },
  'default': {
    title: 'Project Case Study',
    subtitle: 'Coming Soon',
    role: 'UI/UX Designer',
    timeline: 'TBD',
    team: 'Cross-functional team',
    heroImage: '/ChatGPT Image Jan 30, 2026, 03_48_25 PM.png',
    overview: 'Detailed case study coming soon. This project showcases modern design principles and user-centered approach.',
    problem: 'Case study content is being prepared.',
    constraints: ['To be documented'],
    approach: 'Comprehensive design process with user research and iterative testing.',
    keyFeatures: [
      { image: '/ChatGPT Image Jan 30, 2026, 03_48_25 PM.png' },
      { image: '/ChatGPT Image Jan 30, 2026, 03_48_25 PM.png' },
    ],
    decisions: [],
    results: ['Results pending documentation'],
    reflection: 'Detailed reflection coming soon.',
    nextSteps: []
  }
};

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies[params.slug] || caseStudies['default'];

  return (
    <main className="min-h-screen bg-charcoal-900">
      <Navigation />
      
      {/* Hero Section with Image Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/50 to-charcoal-900/95" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600 mb-4 sm:mb-6 md:mb-8">
            Case Study
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-light text-white mb-4 sm:mb-6 md:mb-8 leading-[0.9]">
            {caseStudy.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal-200 font-light max-w-3xl">
            {caseStudy.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Content - Modern Editorial Layout */}
      <article className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-light text-white md:sticky md:top-32 mb-6 md:mb-0">
                Overview
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed">
                {caseStudy.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                <div>
                  <p className="text-xs sm:text-sm text-charcoal-500 uppercase tracking-wider mb-2">Role</p>
                  <p className="text-white text-sm sm:text-base">{caseStudy.role}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-charcoal-500 uppercase tracking-wider mb-2">Timeline</p>
                  <p className="text-white text-sm sm:text-base">{caseStudy.timeline}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-charcoal-500 uppercase tracking-wider mb-2">Platform</p>
                  <p className="text-white text-sm sm:text-base">Mobile & Web</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-charcoal-500 uppercase tracking-wider mb-2">Team</p>
                  <p className="text-white text-sm sm:text-base">{caseStudy.team}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-light text-white md:sticky md:top-32 mb-6 md:mb-0">
                Problem
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed">
                {caseStudy.problem}
              </p>
              {caseStudy.constraints && caseStudy.constraints.length > 0 && (
                <div className="space-y-3 sm:space-y-4 pt-4">
                  {caseStudy.constraints.slice(0, 3).map((constraint: string, index: number) => (
                    <div key={index} className="p-4 sm:p-6 bg-charcoal-800/50 border border-white/5 rounded-lg sm:rounded-xl">
                      <h3 className="text-white font-medium text-sm sm:text-base">{constraint}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>

          {/* Approach & Process */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-light text-white md:sticky md:top-32 mb-6 md:mb-0">
                Approach
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed mb-6 sm:mb-8">
                {caseStudy.approach}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 text-center border-l-2 border-orange-600">
                  <div className="text-xl sm:text-2xl text-orange-600 mb-2">01</div>
                  <p className="text-charcoal-300 text-xs sm:text-sm">Research</p>
                </div>
                <div className="p-3 sm:p-4 text-center border-l-2 border-orange-600">
                  <div className="text-xl sm:text-2xl text-orange-600 mb-2">02</div>
                  <p className="text-charcoal-300 text-xs sm:text-sm">Design</p>
                </div>
                <div className="p-3 sm:p-4 text-center border-l-2 border-orange-600">
                  <div className="text-xl sm:text-2xl text-orange-600 mb-2">03</div>
                  <p className="text-charcoal-300 text-xs sm:text-sm">Testing</p>
                </div>
                <div className="p-3 sm:p-4 text-center border-l-2 border-orange-600">
                  <div className="text-xl sm:text-2xl text-orange-600 mb-2">04</div>
                  <p className="text-charcoal-300 text-xs sm:text-sm">Iterate</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Key Decisions */}
          {caseStudy.decisions && caseStudy.decisions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-16"
            >
              <div className="md:col-span-4">
                <h2 className="text-2xl sm:text-3xl font-light text-white md:sticky md:top-32 mb-6 md:mb-0">
                  Key Decisions
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="space-y-6 sm:space-y-8">
                  {caseStudy.decisions.map((decision: any, index: number) => (
                    <div key={index} className="border-l-4 border-orange-600 pl-4 sm:pl-6 py-2">
                      <h3 className="text-lg sm:text-xl text-white font-medium mb-2 sm:mb-3">{decision.decision}</h3>
                      <p className="text-charcoal-300 leading-relaxed text-sm sm:text-base">{decision.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

        </div>
      </article>

      {/* Solution - Visual Gallery */}
      {caseStudy.keyFeatures.length > 0 && (
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 py-12 sm:py-16 md:py-20 bg-charcoal-800/30">
          <div className="px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-light text-white mb-8 sm:mb-12 md:mb-16"
            >
              Solution
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {caseStudy.keyFeatures.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative aspect-[4/3] bg-charcoal-800 rounded-lg sm:rounded-xl overflow-hidden group"
                >
                  <Image
                    src={feature.image}
                    alt={`Solution ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcome */}
      <article className="pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-light text-white md:sticky md:top-32 mb-6 md:mb-0">
                Outcome
              </h2>
            </div>
            <div className="md:col-span-8">
              {Array.isArray(caseStudy.results) && caseStudy.results.length > 0 && (
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                  {caseStudy.results.map((result: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-charcoal-800/30 border border-white/5 rounded-lg sm:rounded-xl">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-600/20 border border-orange-600/30 flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-charcoal-200 flex-1 text-sm sm:text-base">{result}</p>
                    </div>
                  ))}
                </div>
              )}
              {caseStudy.reflection && (
                <div>
                  <h3 className="text-lg sm:text-xl text-white font-medium mb-3 sm:mb-4">Reflection</h3>
                  <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed">
                    {caseStudy.reflection}
                  </p>
                </div>
              )}
              {caseStudy.nextSteps && caseStudy.nextSteps.length > 0 && (
                <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-orange-600/5 border border-orange-600/10 rounded-lg sm:rounded-xl">
                  <h3 className="text-lg sm:text-xl text-white font-medium mb-4 sm:mb-6">Next Steps</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {caseStudy.nextSteps.map((step: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-orange-600 font-medium text-sm sm:text-base">{String(index + 1).padStart(2, '0')}</span>
                        <p className="text-charcoal-300 text-xs sm:text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        </div>
      </article>
      
      <Contact />
      <Footer />
    </main>
  );
}
