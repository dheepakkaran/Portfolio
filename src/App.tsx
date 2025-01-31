import { HelmetProvider } from 'react-helmet-async';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { ErrorBoundary } from './components/ErrorBoundary';

export function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEO 
          title="John Developer - Creative Developer Portfolio"
          description="Portfolio of John Developer, showcasing creative development and innovative solutions"
        />
        <div className="bg-black min-h-screen">
          <main>
            <Hero />
            <About />
            <Work />
            <Contact />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}