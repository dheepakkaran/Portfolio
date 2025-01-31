import { SectionTitle } from '../common/SectionTitle';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const Contact = () => (
  <section id="contact" className="py-20 bg-black">
    <div className="container mx-auto px-4">
      <SectionTitle>Get in Touch</SectionTitle>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
);