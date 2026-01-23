import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import Impact from '@/components/Impact';
import Writing from '@/components/Writing';
import Footer from '@/components/Footer';

export default function Home() {
  const featuredProjects = [
    {
      title: 'CervCareAI',
      role: 'Lead Designer',
      productType: 'Healthcare AI',
      outcome: 'AI-powered cervical cancer prediction system with clean, professional interface delivering accurate insights for early detection.',
      image: '/cervcare1i.png',
      href: '/work/cervcare',
      tags: ['AI', 'Machine Learning', 'Next.js'],
    },
    {
      title: 'Bongo Hub',
      role: 'UI/UX Designer',
      productType: 'Creative Platform',
      outcome: 'Comprehensive UI/UX design for creatives to connect, collaborate and build together.',
      image: '/mockuuups-free-macbook-pro-with-female-professional(1).jpeg',
      href: '/work/bongo-hub',
      tags: ['UI Design', 'Figma', 'Wireframing'],
    },
    {
      title: 'Salama',
      role: 'Product Designer',
      productType: 'Travel App',
      outcome: 'AI-powered travel companion for athletes that helps plan trips, connect with other athletes, and manage travel documents.',
      image: '/mockuuups-female-hand-holding-iphone-14-pro-mockup(3).png',
      href: '/work/salama',
      tags: ['UI Design', 'Figma', 'AI'],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-wider text-base-dark/50 font-medium mb-4">
            Featured Work
          </p>
          <h2 className="text-5xl md:text-6xl font-display font-semibold text-base-dark mb-6">
            Selected Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="/work"
            className="inline-block px-8 py-4 glass rounded-full text-base-dark font-medium hover:bg-white/80 transition-all duration-300"
          >
            View All Work →
          </a>
        </div>
      </section>
      <Capabilities />
      <Impact />
      <Writing />
      <Footer />
    </main>
  );
}
