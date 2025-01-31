import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}