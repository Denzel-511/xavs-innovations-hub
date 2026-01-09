import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PartnersSection } from '@/components/PartnersSection';
import { LocationsSection } from '@/components/LocationsSection';
import { HowWeWorkSection } from '@/components/HowWeWorkSection';
import { ChoosePathSection } from '@/components/ChoosePathSection';
import { InitiativesSection } from '@/components/InitiativesSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { TrainingSection } from '@/components/TrainingSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <LocationsSection />
        <HowWeWorkSection />
        <ChoosePathSection />
        <InitiativesSection />
        <ExperienceSection />
        <TrainingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
