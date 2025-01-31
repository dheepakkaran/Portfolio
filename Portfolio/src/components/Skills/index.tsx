import { SectionTitle } from '../common/SectionTitle';
import { SkillGrid } from './SkillGrid';

export const Skills = () => (
  <section id="skills" className="py-12">
    <div className="container mx-auto px-4">
      <SectionTitle>Skills</SectionTitle>
      <SkillGrid />
    </div>
  </section>
);