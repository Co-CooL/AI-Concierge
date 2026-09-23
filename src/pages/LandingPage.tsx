import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <Hero />
        <TrustSection />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
