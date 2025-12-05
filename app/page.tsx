import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import Proof from '@/components/Proof';
import Pricing from '@/components/Pricing';
import Roadmap from '@/components/Roadmap';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Features />
      <Proof />
      <Pricing />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  );
}
