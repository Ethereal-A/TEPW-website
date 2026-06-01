import React, { useEffect, useState } from 'react';
import { Navbar2 } from './components/Navbar2';
import { HeroCard } from './components/HeroCard';
import { WhyChooseUsCard } from './components/WhyChooseUsCard';
import { ProblemCard } from './components/ProblemCard';
import { ServicesCard } from './components/ServicesCard';
import { HowItWorksCard } from './components/HowItWorksCard';
import { BeforeAfterCard } from './components/BeforeAfterCard';
import { TestimonialsCard } from './components/TestimonialsCard';
import { FinalCTACard } from './components/FinalCTACard';
import { Footer } from './components/Footer';
import { Terms } from './components/Terms';

export default function App() {
  // Simple client-side routing. Tracks the current pathname.
  const [pathname, setPathname] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  // Listen for browser back/forward button clicks.
  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Route handling — add more routes here in the future.
  if (pathname === '/terms' || pathname === '/terms/') {
    return <Terms />;
  }

  // Default route — homepage
  return (
    <div className="min-h-screen font-sans bg-[#F4F5F7] p-2 sm:p-4 lg:p-6 text-brand-navy selection:bg-brand-red selection:text-white">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-4">
        {/* Top Navbar */}
        <Navbar2 />
        
        {/* Bento Grid Top Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:min-h-[600px]">
           <div className="lg:col-span-2">
             <HeroCard />
           </div>
           <div className="lg:col-span-1">
             <WhyChooseUsCard />
           </div>
        </div>
        
        {/* Bento Grid Middle Layer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           <div className="lg:col-span-1">
             <ProblemCard />
           </div>
           <div className="md:col-span-2 lg:col-span-2">
             <ServicesCard />
           </div>
           <div className="lg:col-span-1">
             <HowItWorksCard />
           </div>
        </div>

        {/* Reviews and Images Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
           <BeforeAfterCard />
           <TestimonialsCard />
        </div>

        {/* Final CTA Layer */}
        <div className="mb-4">
          <FinalCTACard />
        </div>

        <Footer />
      </div>
    </div>
  );
}