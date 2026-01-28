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
  'cervcare': {
    title: 'CervCareAI',
    subtitle: 'AI-Powered Healthcare Platform',
    role: 'Lead Product Designer',
    timeline: '8 months (2024)',
    team: '1 Designer, 3 Engineers, 1 Data Scientist',
    heroImage: '/cervcare1i.png',
    overview: 'CervCareAI is a revolutionary AI-powered platform designed to predict cervical cancer with 94% accuracy. The project aimed to make complex medical data accessible and actionable for healthcare professionals while maintaining a clean, professional interface that doesn\'t overwhelm users with information.',
    problem: 'Healthcare professionals struggle with early detection of cervical cancer due to limited access to screening resources and difficulty interpreting complex medical data. Traditional methods are time-consuming, expensive, and often inaccessible in underserved areas. There was a critical need for an AI-powered solution that could democratize access to early detection while maintaining high accuracy and user trust.',
    constraints: [
      'Strict HIPAA compliance and medical data privacy regulations',
      'Need for 95%+ accuracy to gain medical professional trust',
      'Complex medical terminology that needed to be accessible',
    ],
    approach: 'I started with extensive research, interviewing 15+ healthcare professionals to understand their workflow and pain points. Created user journey maps and information architecture that prioritized critical data. Developed a design system that balanced professional medical aesthetics with modern UI patterns. Iteratively tested prototypes with doctors and nurses, refining the interface based on their feedback.',
    keyFeatures: [
      { image: '/cervcare1i.png' },
      { image: '/cervcare1i.png' },
      { image: '/cervcare1i.png' },
      { image: '/cervcare1i.png' },
    ],
    decisions: [
      {
        decision: 'Simplified Data Visualization',
        rationale: 'Instead of overwhelming doctors with raw AI output, we created intuitive visual indicators (color codes, progress bars, trend lines) that allowed quick assessment while providing detailed data on demand.'
      },
      {
        decision: 'Progressive Disclosure',
        rationale: 'Implemented a layered information architecture where critical data is immediately visible, with additional details accessible through expanding sections. This reduced cognitive load while maintaining comprehensive information access.'
      },
      {
        decision: 'Familiar Medical UI Patterns',
        rationale: 'Adopted UI patterns from existing medical software to reduce learning curve, while modernizing the visual design to feel fresh and professional.'
      }
    ],
    results: [
      '94% prediction accuracy validated through clinical trials',
      '60% reduction in diagnosis time compared to traditional methods',
      'Positive feedback from 85% of beta testing healthcare professionals',
      'Successfully integrated into 3 major hospitals\' workflows',
      'Reduced false positives by 40% compared to previous screening methods'
    ],
    reflection: 'This project taught me the critical importance of designing for trust in healthcare applications. Every design decision needed to be justified not just for usability, but for medical accuracy and professional credibility. If I could improve it, I\'d invest more time in accessibility features for visually impaired healthcare workers and add more customization options for different medical practice workflows.',
    nextSteps: [
      'Expand to mobile app for on-the-go access',
      'Add multi-language support for international markets',
      'Integrate telemedicine features for remote consultations',
      'Develop patient-facing interface for self-monitoring'
    ]
  },
  'bongo-hub': {
    title: 'Bongo Hub',
    subtitle: 'Creative Collaboration Platform',
    role: 'Lead UI/UX Designer',
    timeline: '6 months (2023)',
    team: '1 Designer, 4 Engineers, 1 Product Manager',
    heroImage: '/mockuuups-free-macbook-pro-with-female-professional(1).jpeg',
    overview: 'Bongo Hub is a comprehensive platform designed to connect creatives worldwide, enabling seamless collaboration on innovative projects. The platform focuses on building a vibrant community where designers, developers, and creators can find each other, share ideas, and build projects together.',
    problem: 'Creatives often work in isolation, struggling to find collaborators who share their vision and skills. Existing platforms were either too generic (like social media) or too focused on hiring rather than collaboration. There was no dedicated space for creative professionals to organically connect, collaborate, and build meaningful projects together.',
    constraints: [
      'Need to balance social features with professional networking',
      'Complex matching algorithm for finding compatible collaborators',
      'Managing different creative disciplines with varying workflows',
    ],
    approach: 'Conducted extensive user research with 50+ creative professionals across different disciplines. Mapped out collaboration workflows and pain points. Created an information architecture that balanced discovery, communication, and project management. Developed a design system that felt creative yet professional, appealing to diverse creative fields.',
    keyFeatures: [
      { image: '/mockuuups-free-macbook-pro-with-female-professional(1).jpeg' },
      { image: '/mockuuups-free-macbook-pro-with-female-professional(1).jpeg' },
      { image: '/mockuuups-free-macbook-pro-with-female-professional(1).jpeg' },
      { image: '/mockuuups-free-macbook-pro-with-female-professional(1).jpeg' },
    ],
    decisions: [
      {
        decision: 'Portfolio-First Profiles',
        rationale: 'Made visual portfolios the centerpiece of user profiles, allowing creatives to showcase their work immediately and attract like-minded collaborators.'
      },
      {
        decision: 'Skill-Based Matching',
        rationale: 'Implemented intelligent matching system that considers skills, interests, and project needs rather than just keywords, improving collaboration success rates.'
      },
      {
        decision: 'Integrated Project Management',
        rationale: 'Built lightweight project management tools directly into the platform, eliminating the need for external tools and keeping collaboration seamless.'
      }
    ],
    results: [
      '500+ active creatives joined during beta phase',
      '75% of users found at least one collaboration match within first week',
      '200+ projects initiated through the platform in first 3 months',
      '4.5/5 average user satisfaction rating',
      '80% user retention rate after first month'
    ],
    reflection: 'This project taught me the importance of designing for community building and organic connections. The biggest challenge was balancing discoverability with meaningful engagement. I learned that the best collaboration tools get out of the way and let creatives focus on their work.',
    nextSteps: [
      'Add video collaboration features',
      'Implement reputation and review system',
      'Create creative challenges and events',
      'Develop mobile app for on-the-go networking'
    ]
  },
  'salama': {
    title: 'Salama',
    subtitle: 'AI Travel Companion for Athletes',
    role: 'Product Designer',
    timeline: '5 months (2024)',
    team: '1 Designer, 3 Engineers, 1 AI Specialist',
    heroImage: '/mockuuups-female-hand-holding-iphone-14-pro-mockup(3).png',
    overview: 'Salama is an intelligent travel companion app designed specifically for athletes traveling worldwide. It combines AI-powered trip planning with real-time collaboration features and seamless document management, making international travel stress-free for sports professionals.',
    problem: 'Athletes and sports teams face unique challenges when traveling internationally - managing travel documents, coordinating with teammates, finding suitable training facilities, and adapting to new time zones. Existing travel apps don\'t cater to these specific needs, leading to stress and reduced performance preparation.',
    constraints: [
      'Need to work reliably in low-connectivity environments',
      'Multiple languages and currencies across different countries',
      'Integration with various travel and sports APIs',
    ],
    approach: 'Interviewed 25+ professional athletes to understand travel pain points. Analyzed typical athlete travel patterns and requirements. Created user flows that prioritized quick access to critical information. Developed a mobile-first design that works seamlessly offline with smart syncing capabilities.',
    keyFeatures: [
      { image: '/mockuuups-female-hand-holding-iphone-14-pro-mockup(3).png' },
      { image: '/mockuuups-female-hand-holding-iphone-14-pro-mockup(3).png' },
      { image: '/mockuuups-female-hand-holding-iphone-14-pro-mockup(3).png' },
      { image: '/mockuuups-female-hand-holding-iphone-14-pro-mockup(3).png' },
    ],
    decisions: [
      {
        decision: 'AI-Powered Itinerary Building',
        rationale: 'Automated trip planning based on competition schedules, training needs, and recovery time, reducing planning burden on athletes and coaches.'
      },
      {
        decision: 'Offline-First Architecture',
        rationale: 'Ensured all critical features work offline, with intelligent syncing when connection is available, perfect for international travel scenarios.'
      },
      {
        decision: 'Team Coordination Hub',
        rationale: 'Built collaborative features for team travel, allowing coaches to manage entire teams while giving athletes individual control over their journeys.'
      }
    ],
    results: [
      'Adopted by 5 professional sports teams for international competitions',
      '90% reduction in travel-related issues and missed connections',
      'Average 2 hours saved per trip in planning and coordination',
      '95% user satisfaction rate among athlete beta testers',
      'Successful coordination of 50+ international trips'
    ],
    reflection: 'Working on Salama taught me the importance of designing for high-stress scenarios and unreliable connectivity. Athletes need tools that work flawlessly when they need them most. The project reinforced the value of domain-specific solutions over generic apps.',
    nextSteps: [
      'Add nutrition and meal planning features',
      'Integrate with wearable fitness devices',
      'Expand to support sports fans traveling to events',
      'Add facility booking and reservation features'
    ]
  },
  'meal-prep': {
    title: 'Meal Prep App',
    subtitle: 'Healthy Food Delivery Platform',
    role: 'UX Designer',
    timeline: '4 months (2023)',
    team: '1 Designer, 2 Engineers, 1 Nutritionist',
    heroImage: '/mockuuups-free-transparent-iphone-air-mockup(2).png',
    overview: 'A mobile application designed to simplify healthy eating through customized meal prep plans. The app connects busy professionals with nutritious, pre-prepared meals tailored to their dietary preferences and health goals, making healthy eating accessible and convenient.',
    problem: 'Busy professionals want to eat healthy but lack time for meal planning and preparation. Generic meal delivery apps don\'t account for individual dietary needs, preferences, or health goals. Users needed a solution that combines nutrition expertise with convenience and personalization.',
    constraints: [
      'Complex dietary restrictions and allergy management',
      'Real-time inventory and delivery coordination',
      'Balancing customization with operational efficiency',
    ],
    approach: 'Conducted user research with 30+ working professionals about their eating habits and pain points. Collaborated with nutritionists to understand meal planning best practices. Created user flows that make customization simple and ordering effortless. Developed a visual design that emphasizes food quality and freshness.',
    keyFeatures: [
      { image: '/mockuuups-free-transparent-iphone-air-mockup(2).png' },
      { image: '/mockuuups-free-transparent-iphone-air-mockup(2).png' },
      { image: '/mockuuups-free-transparent-iphone-air-mockup(2).png' },
      { image: '/mockuuups-free-transparent-iphone-air-mockup(2).png' },
    ],
    decisions: [
      {
        decision: 'Visual Meal Planning',
        rationale: 'Created an intuitive weekly meal planner with drag-and-drop interface, making it easy to visualize and customize meal plans at a glance.'
      },
      {
        decision: 'Nutrition-First Information',
        rationale: 'Displayed nutritional information prominently without overwhelming users, helping them make informed choices about their meals.'
      },
      {
        decision: 'Flexible Subscription Model',
        rationale: 'Offered flexible plans that adapt to changing schedules and preferences, reducing cancellations and improving long-term retention.'
      }
    ],
    results: [
      '1,000+ active subscribers within first 3 months',
      '85% week-over-week retention rate',
      'Average order value increased by 35% after redesign',
      '4.7/5 app store rating with 500+ reviews',
      '70% of users reported improved eating habits'
    ],
    reflection: 'This project taught me how to design for habit formation and behavior change. The key was making healthy choices the easiest choice, not the hardest. I learned that good UX in food apps goes beyond ordering - it\'s about building trust and helping users achieve their goals.',
    nextSteps: [
      'Add social features for sharing meal plans',
      'Integrate with fitness tracking apps',
      'Expand to include grocery delivery options',
      'Add cooking tutorials for DIY meal prep'
    ]
  },
  'a1-cleaning': {
    title: 'A1 Professional Cleaning',
    subtitle: 'Service Website Redesign',
    role: 'Web Designer & Developer',
    timeline: '2 months (2022)',
    team: 'Solo project with client collaboration',
    heroImage: '/image.png',
    overview: 'A complete website redesign for A1 Professional Cleaning, a local cleaning service company. The project focused on creating a modern, responsive website that enhances online presence, builds trust, and streamlines the client booking process.',
    problem: 'The existing website was outdated, non-responsive, and difficult to navigate. Potential clients were leaving without booking due to confusing navigation and lack of clear service information. The company was losing business to competitors with better online presence.',
    constraints: [
      'Limited budget for development and maintenance',
      'Need to maintain existing SEO rankings',
      'Quick turnaround time for launch',
    ],
    approach: 'Analyzed competitor websites and industry best practices. Conducted stakeholder interviews to understand business goals. Created wireframes focusing on conversion optimization. Developed a responsive design using modern web technologies that\'s easy for the client to update.',
    keyFeatures: [
      { image: '/image.png' },
      { image: '/image.png' },
      { image: '/image.png' },
      { image: '/image.png' },
    ],
    decisions: [
      {
        decision: 'Service-First Navigation',
        rationale: 'Restructured navigation to highlight key services immediately, reducing clicks to booking and improving conversion rates.'
      },
      {
        decision: 'Trust Indicators',
        rationale: 'Added prominent testimonials, certifications, and before/after galleries to build credibility and trust with potential clients.'
      },
      {
        decision: 'Mobile-Optimized Booking',
        rationale: 'Simplified the booking form for mobile users, recognizing that most local service searches happen on phones.'
      }
    ],
    results: [
      '150% increase in online bookings within first month',
      '60% reduction in bounce rate',
      'Mobile traffic increased from 40% to 65%',
      '4x increase in contact form submissions',
      'Improved Google search ranking from page 3 to page 1'
    ],
    reflection: 'This project reinforced that good design doesn\'t have to be complex. Sometimes the best solution is a clean, straightforward website that helps users accomplish their goals quickly. The project taught me the importance of understanding business metrics and designing for conversions.',
    nextSteps: [
      'Add online payment processing',
      'Implement customer account portal',
      'Create blog for SEO and content marketing',
      'Add live chat support'
    ]
  },
  'trident': {
    title: 'Trident Solutions',
    subtitle: 'Corporate Technology Website',
    role: 'UI/UX Designer',
    timeline: '3 months (2022)',
    team: '1 Designer, 2 Developers',
    heroImage: '/Trident.png',
    overview: 'Comprehensive UI/UX design for Trident Solutions, a B2B technology company specializing in enterprise software and IT consulting. The project focused on creating a professional, modern website that effectively communicates complex technology solutions to corporate decision-makers.',
    problem: 'Trident Solutions had a generic website that didn\'t reflect their expertise or differentiate them from competitors. Corporate clients needed clear information about services, case studies, and expertise areas, but the existing site buried this information under poor navigation and weak information architecture.',
    constraints: [
      'Need to appeal to enterprise-level decision makers',
      'Complex service offerings requiring clear explanation',
      'Integration with existing CRM and lead tracking systems',
    ],
    approach: 'Conducted stakeholder workshops to understand business positioning and target audience. Analyzed competitor sites and industry trends. Created detailed information architecture for complex service offerings. Developed a professional design system that balances corporate credibility with modern aesthetics.',
    keyFeatures: [
      { image: '/Trident.png' },
      { image: '/Trident.png' },
      { image: '/Trident.png' },
      { image: '/Trident.png' },
    ],
    decisions: [
      {
        decision: 'Industry-Focused Service Pages',
        rationale: 'Organized services by industry vertical rather than technology, helping potential clients quickly identify relevant solutions for their sector.'
      },
      {
        decision: 'Case Study Showcase',
        rationale: 'Created compelling case study layouts that tell success stories and demonstrate ROI, crucial for B2B decision-making.'
      },
      {
        decision: 'Professional Yet Approachable Design',
        rationale: 'Balanced corporate professionalism with modern design trends, making the company appear both credible and innovative.'
      }
    ],
    results: [
      '200% increase in qualified lead generation',
      'Average time on site increased from 1:30 to 4:45',
      'Case study pages became top conversion drivers',
      '85% positive feedback from sales team on lead quality',
      'Won 3 major contracts attributed to improved web presence'
    ],
    reflection: 'This project taught me how to design for B2B audiences and longer sales cycles. The challenge was presenting technical information in an accessible way while maintaining credibility. I learned that in corporate design, clarity and professionalism trump flashy trends.',
    nextSteps: [
      'Develop client portal for project tracking',
      'Add interactive solution configurator',
      'Create resource center with whitepapers and guides',
      'Implement marketing automation integration'
    ]
  },
  'default': {
    title: 'Project Case Study',
    subtitle: 'Coming Soon',
    role: 'UI/UX Designer',
    timeline: 'TBD',
    team: 'Cross-functional team',
    heroImage: '/image.png',
    overview: 'Detailed case study coming soon. This project showcases modern design principles and user-centered approach.',
    problem: 'Case study content is being prepared.',
    constraints: ['To be documented'],
    approach: 'Comprehensive design process with user research and iterative testing.',
    keyFeatures: [
      { image: '/image.png' },
      { image: '/image.png' },
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
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 to-charcoal-900/95" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-orange-600 mb-8">
            Case Study
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-light text-white mb-8 leading-[0.9]">
            {caseStudy.title}
          </h1>
          <p className="text-2xl md:text-3xl text-charcoal-200 font-light max-w-3xl">
            {caseStudy.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Content - Modern Editorial Layout */}
      <article className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-3xl font-light text-white sticky top-32">
                Overview
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg text-charcoal-200 leading-relaxed">
                {caseStudy.overview}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <p className="text-sm text-charcoal-500 uppercase tracking-wider mb-2">Role</p>
                  <p className="text-white">{caseStudy.role}</p>
                </div>
                <div>
                  <p className="text-sm text-charcoal-500 uppercase tracking-wider mb-2">Timeline</p>
                  <p className="text-white">{caseStudy.timeline}</p>
                </div>
                <div>
                  <p className="text-sm text-charcoal-500 uppercase tracking-wider mb-2">Platform</p>
                  <p className="text-white">Mobile & Web</p>
                </div>
                <div>
                  <p className="text-sm text-charcoal-500 uppercase tracking-wider mb-2">Team</p>
                  <p className="text-white">{caseStudy.team}</p>
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
            className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-3xl font-light text-white sticky top-32">
                Problem
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg text-charcoal-200 leading-relaxed">
                {caseStudy.problem}
              </p>
              {caseStudy.constraints && caseStudy.constraints.length > 0 && (
                <div className="space-y-4 pt-4">
                  {caseStudy.constraints.slice(0, 3).map((constraint: string, index: number) => (
                    <div key={index} className="p-6 bg-charcoal-800/50 border border-white/5 rounded-xl">
                      <h3 className="text-white font-medium mb-2">{constraint}</h3>
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
            className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-3xl font-light text-white sticky top-32">
                Approach
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-charcoal-200 leading-relaxed mb-8">
                {caseStudy.approach}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-4 text-center border-l-2 border-orange-600">
                  <div className="text-2xl text-orange-600 mb-2">01</div>
                  <p className="text-charcoal-300 text-sm">Research</p>
                </div>
                <div className="p-4 text-center border-l-2 border-orange-600">
                  <div className="text-2xl text-orange-600 mb-2">02</div>
                  <p className="text-charcoal-300 text-sm">Design</p>
                </div>
                <div className="p-4 text-center border-l-2 border-orange-600">
                  <div className="text-2xl text-orange-600 mb-2">03</div>
                  <p className="text-charcoal-300 text-sm">Testing</p>
                </div>
                <div className="p-4 text-center border-l-2 border-orange-600">
                  <div className="text-2xl text-orange-600 mb-2">04</div>
                  <p className="text-charcoal-300 text-sm">Iterate</p>
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
              className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
            >
              <div className="md:col-span-4">
                <h2 className="text-3xl font-light text-white sticky top-32">
                  Key Decisions
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="space-y-8">
                  {caseStudy.decisions.map((decision: any, index: number) => (
                    <div key={index} className="border-l-4 border-orange-600 pl-6 py-2">
                      <h3 className="text-xl text-white font-medium mb-3">{decision.decision}</h3>
                      <p className="text-charcoal-300 leading-relaxed">{decision.rationale}</p>
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
        <section className="mb-32 py-20 bg-charcoal-800/30">
          <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-light text-white mb-16"
            >
              Solution
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.keyFeatures.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative aspect-[4/3] bg-charcoal-800 rounded-xl overflow-hidden group"
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
      <article className="pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-3xl font-light text-white sticky top-32">
                Outcome
              </h2>
            </div>
            <div className="md:col-span-8">
              {Array.isArray(caseStudy.results) && caseStudy.results.length > 0 && (
                <div className="space-y-4 mb-12">
                  {caseStudy.results.map((result: string, index: number) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-charcoal-800/30 border border-white/5 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600/20 border border-orange-600/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-charcoal-200 flex-1">{result}</p>
                    </div>
                  ))}
                </div>
              )}
              {caseStudy.reflection && (
                <div>
                  <h3 className="text-xl text-white font-medium mb-4">Reflection</h3>
                  <p className="text-lg text-charcoal-200 leading-relaxed">
                    {caseStudy.reflection}
                  </p>
                </div>
              )}
              {caseStudy.nextSteps && caseStudy.nextSteps.length > 0 && (
                <div className="mt-12 p-8 bg-orange-600/5 border border-orange-600/10 rounded-xl">
                  <h3 className="text-xl text-white font-medium mb-6">Next Steps</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.nextSteps.map((step: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-orange-600 font-medium">{String(index + 1).padStart(2, '0')}</span>
                        <p className="text-charcoal-300 text-sm">{step}</p>
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
