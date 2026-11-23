import { useState } from 'react';
import AudienceTracksSection from './components/AudienceTracksSection';
import ConsultationFormSection from './components/ConsultationFormSection';
import CurriculumBentoSection from './components/CurriculumBentoSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PosterModal from './components/PosterModal';
import WhyAxCodySection from './components/WhyAxCodySection';

export default function App() {
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [selectedInquiryTopic, setSelectedInquiryTopic] = useState<string | null>(null);

  const handleSelectTrackForInquiry = (trackLabel: string) => {
    setSelectedInquiryTopic(trackLabel);
    const target = document.getElementById('consultation');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <HeroSection onOpenPoster={() => setIsPosterOpen(true)} />
        <AudienceTracksSection onSelectTrackForInquiry={handleSelectTrackForInquiry} />
        <CurriculumBentoSection />
        <WhyAxCodySection />
        <ConsultationFormSection preselectedTopic={selectedInquiryTopic} />
      </main>
      <Footer />
      <PosterModal isOpen={isPosterOpen} onClose={() => setIsPosterOpen(false)} />
    </div>
  );
}
