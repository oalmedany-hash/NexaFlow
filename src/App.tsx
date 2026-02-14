import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import PurposesSlider from './components/PurposesSlider';
import Services from './components/Services';
import WorkflowVisualization from './components/WorkflowVisualization';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GetStartedModal from './components/GetStartedModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* AI-themed background decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="ai-circuit-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-n8n-orange/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-n8n-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-n8n-orange/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-n8n-purple/5 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10">
        <Header onGetStarted={() => setIsModalOpen(true)} />
        <Hero onGetStarted={() => setIsModalOpen(true)} />
        <OurStory />
        <PurposesSlider />
        <Services />
        <WorkflowVisualization />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
        <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}

export default App;
