import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CircleBuilderModal from './components/CircleBuilderModal';
import ProjectDetailModal from './components/ProjectDetailModal';

// Pages
import HomePage from './pages/HomePage';
import CommunityDevelopmentPage from './pages/CommunityDevelopmentPage';
import ResidentialConstructionPage from './pages/ResidentialConstructionPage';
import CommercialConstructionPage from './pages/CommercialConstructionPage';
import ArchitectureDesignPage from './pages/ArchitectureDesignPage';
import InteriorsSmartHomesPage from './pages/InteriorsSmartHomesPage';
import WhyKennixPage from './pages/WhyKennixPage';
import HowItWorksPage from './pages/HowItWorksPage';
import QualityAssurancePage from './pages/QualityAssurancePage';
import ProjectsPage from './pages/ProjectsPage';
import LoginDashboardPage from './pages/LoginDashboardPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme] = useState(() => {
    // Read initial theme from html class
    if (typeof document !== 'undefined' && document.documentElement.classList.contains('light')) {
      return 'light';
    }
    return 'dark';
  });
  const [isCircleModalOpen, setIsCircleModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    // Synchronize html element classes with theme state
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    // Also update body background for instant visual feedback
    document.body.style.backgroundColor = theme === 'dark' ? '#070A09' : '#F8FAF7';
    document.body.style.color = theme === 'dark' ? '#F1F5F9' : '#0F1715';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openCircleModal = () => setIsCircleModalOpen(true);
  const closeCircleModal = () => setIsCircleModalOpen(false);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
      case 'about':
        return (
          <HomePage 
            setActivePage={setActivePage} 
            openCircleModal={openCircleModal} 
            setSelectedProject={setSelectedProject} 
            theme={theme}
          />
        );
      case 'community-development':
        return (
          <CommunityDevelopmentPage 
            openCircleModal={openCircleModal} 
            setActivePage={setActivePage} 
            theme={theme}
          />
        );
      case 'residential-construction':
        return <ResidentialConstructionPage setActivePage={setActivePage} />;
      case 'commercial-construction':
        return <CommercialConstructionPage setActivePage={setActivePage} />;
      case 'architecture-design':
        return <ArchitectureDesignPage setActivePage={setActivePage} />;
      case 'interiors-smart-homes':
        return <InteriorsSmartHomesPage setActivePage={setActivePage} />;
      case 'why-kennix':
        return <WhyKennixPage openCircleModal={openCircleModal} setActivePage={setActivePage} />;
      case 'how-it-works':
        return <HowItWorksPage openCircleModal={openCircleModal} setActivePage={setActivePage} />;
      case 'quality-assurance':
        return <QualityAssurancePage setActivePage={setActivePage} />;
      case 'projects':
        return (
          <ProjectsPage 
            setSelectedProject={setSelectedProject} 
            openCircleModal={openCircleModal} 
          />
        );
      case 'login':
        return <LoginDashboardPage openCircleModal={openCircleModal} />;
      default:
        return (
          <HomePage 
            setActivePage={setActivePage} 
            openCircleModal={openCircleModal} 
            setSelectedProject={setSelectedProject} 
            theme={theme}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-400 font-sans flex flex-col justify-between selection:bg-emerald-500 selection:text-white ${
      theme === 'dark' ? 'bg-[#070A09] text-slate-100' : 'bg-[#F9FAF8] text-slate-900'
    }`}>
      {/* Fixed Luxury Navigation Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openCircleModal={openCircleModal} 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Dynamic Body */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Footer */}
      <Footer 
        setActivePage={setActivePage} 
        openCircleModal={openCircleModal} 
        theme={theme}
      />

      {/* Interactive Circle Builder Wizard Modal */}
      <CircleBuilderModal 
        isOpen={isCircleModalOpen} 
        onClose={closeCircleModal} 
      />

      {/* Project Detail Quick View Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        openCircleModal={openCircleModal} 
      />
    </div>
  );
}
