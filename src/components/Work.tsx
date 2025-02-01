import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'PLC-Based Water Cooling System for Power Generators',
    description: 'Control system prototype for efficient heat removal and power stability',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    tags: ['PLC', 'Ladder Logic', 'LOGO Soft']
  },
  {
    title: 'Stock Revenue Insights',
    description: 'Stock and revenue analysis of Tesla and GameStop using Python',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'BeautifulSoup', 'yfinance ']
  },
  {
    title: 'Subscription Microservices',
    description: 'Subscription microservice with AWS and optimization',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tags: ['Spring Boot', 'Java', 'AWS']
  }
];

export const Work = () => {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};