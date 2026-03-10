import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TalkToAI } from './components/TalkToAI';
import { Hero } from './components/sections/Hero';
import { WhyChoose } from './components/sections/WhyChoose';
import { Services } from './components/sections/Services';
import { AIVoiceAgents } from './components/sections/AIVoiceAgents';
import { Methodology } from './components/sections/Methodology';
import { RobotBanner } from './components/sections/RobotBanner';
import { VoiceDemos } from './components/sections/VoiceDemos';
import { Testimonials } from './components/sections/Testimonials';
import { DiscoveryCall } from './components/sections/DiscoveryCall';
import { TrustedBy } from './components/sections/TrustedBy';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { PopupModal } from 'react-calendly';

// Pages
import ServicesPage from './components/pages/ServicesPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import ContentPage from './components/pages/ContentPage';
import PricingPage from './components/pages/PricingPage';
import TeamPage from './components/pages/TeamPage';

function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <AIVoiceAgents />
      <Methodology />
      <RobotBanner />
      <VoiceDemos />
      <Testimonials />
      <DiscoveryCall />
      <TrustedBy />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function App() {
  const [activePage, setActivePage] = useState('home');
  const [calendlyState, setCalendlyState] = useState<{ open: boolean, url: string }>({
    open: false,
    url: ''
  });

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Global event listener for Calendly triggers
  useEffect(() => {
    const handleOpenCalendly = (e: any) => {
      setCalendlyState({ open: true, url: e.detail.url });
    };
    window.addEventListener('openCalendly', handleOpenCalendly);
    return () => window.removeEventListener('openCalendly', handleOpenCalendly);
  }, []);

  const renderPage = () => {
    switch (activePage.toLowerCase()) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'case studies':
        return <CaseStudiesPage />;
      case 'content':
        return <ContentPage />;
      case 'pricing':
        return <PricingPage />;
      case 'team':
        return <TeamPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-bg min-h-screen font-sans text-text antialiased selection:bg-purple/30 selection:text-white overflow-x-hidden">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex min-h-screen flex-col bg-bg">
        {renderPage()}
      </main>

      <Footer />
      <TalkToAI />

      {/* Global Calendly Modal */}
      <PopupModal
        url={calendlyState.url}
        onModalClose={() => setCalendlyState({ ...calendlyState, open: false })}
        open={calendlyState.open}
        rootElement={document.getElementById('root')!}
      />
    </div>
  );
}

export default App;
