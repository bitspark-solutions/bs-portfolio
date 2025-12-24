import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BackendSection from '@/components/sections/BackendSection';
import FintechSection from '@/components/sections/FintechSection';
import CloudSection from '@/components/sections/CloudSection';
import FrontendSection from '@/components/sections/FrontendSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechStackSection from '@/components/sections/TechStackSection';
import MethodologySection from '@/components/sections/MethodologySection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BackendSection />
      <FintechSection />
      <CloudSection />
      <FrontendSection />
      <ProjectsSection />
      <TechStackSection />
      <MethodologySection />
      {/* <CertificationsSection />s */}
      <ContactSection />
      <Footer />
    </main>
  );
}
