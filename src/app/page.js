import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import FilmsSection from '@/components/FilmsSection';
import DocumentariesSection from '@/components/DocumentariesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm  from '@/components/Contactform';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <FilmsSection />
      <DocumentariesSection />
      <TestimonialsSection />
      <ContactForm />
    </main>
  );
}