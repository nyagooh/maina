import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  // In a real app, you'd fetch this data based on the slug
  const caseStudy = {
    title: 'Project Title',
    overview: 'Project overview and context.',
    problem: 'The problem statement and context.',
    constraints: 'Key constraints and limitations.',
    approach: 'Design approach and methodology.',
    results: 'Measurable results and outcomes.',
    reflection: 'Reflection and next improvements.',
  };

  return (
    <main className="min-h-screen bg-charcoal-900">
      <Navigation />
      <article className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-light text-white mb-6">
            {caseStudy.title}
          </h1>
        </div>

        <section className="mb-20 space-y-6">
          <h2 className="text-3xl font-display font-light text-white mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-charcoal-300 leading-relaxed">
            {caseStudy.overview}
          </p>
        </section>

        <section className="mb-20 space-y-6">
          <h2 className="text-3xl font-display font-light text-white mb-4">
            Problem & Context
          </h2>
          <p className="text-lg text-charcoal-300 leading-relaxed">
            {caseStudy.problem}
          </p>
        </section>

        <section className="mb-20 space-y-6">
          <h2 className="text-3xl font-display font-light text-white mb-4">
            Constraints
          </h2>
          <p className="text-lg text-charcoal-300 leading-relaxed">
            {caseStudy.constraints}
          </p>
        </section>

        <section className="mb-20 space-y-6">
          <h2 className="text-3xl font-display font-light text-white mb-4">
            Approach
          </h2>
          <p className="text-lg text-charcoal-300 leading-relaxed">
            {caseStudy.approach}
          </p>
        </section>

        <section className="mb-20 space-y-6">
          <h2 className="text-3xl font-display font-light text-white mb-4">
            Key Screens
          </h2>
          <div className="space-y-4">
            {/* Placeholder for screens */}
            <div className="p-8 aspect-video flex items-center justify-center text-charcoal-400 border border-charcoal-800 bg-charcoal-800">
              Key Screens Gallery
            </div>
          </div>
        </section>

        <section className="mb-20 space-y-6">
          <h2 className="text-3xl font-display font-light text-white mb-4">
            Decisions & Trade-offs
          </h2>
          <p className="text-lg text-charcoal-300 leading-relaxed">
            Key design decisions and the trade-offs considered.
          </p>
        </section>

        <section className="mb-20 space-y-6">
          <h2 className="text-3xl font-display font-light text-white mb-4">
            Results
          </h2>
          <p className="text-lg text-charcoal-300 leading-relaxed">
            {caseStudy.results}
          </p>
        </section>

        <section className="mb-20 space-y-6">
          <h2 className="text-3xl font-display font-light text-white mb-4">
            Reflection / Next Improvements
          </h2>
          <p className="text-lg text-charcoal-300 leading-relaxed">
            {caseStudy.reflection}
          </p>
        </section>
      </article>
      <Footer />
    </main>
  );
}
