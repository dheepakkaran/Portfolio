import { BackgroundAnimation } from './BackgroundAnimation';
import { HeroContent } from './HeroContent';
import { ScrollIndicator } from './ScrollIndicator';

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <BackgroundAnimation />
    <HeroContent />
    <ScrollIndicator />
  </section>
);