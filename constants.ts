
import type { NavLink, Project } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Aura Finance Dashboard',
    description: 'A sleek, intuitive dashboard for a fintech startup, focusing on data visualization and user-friendly transaction management.',
    tags: ['UI/UX', 'Figma', 'React', 'Data Viz'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Zenith Mobile App',
    description: 'A wellness and meditation app designed to promote mindfulness with a calming interface and personalized user journeys.',
    tags: ['Mobile UI', 'Prototyping', 'User Research'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Eclipse E-commerce',
    description: 'A futuristic e-commerce platform for a high-end fashion brand, featuring immersive product views and a seamless checkout experience.',
    tags: ['E-commerce', 'UX Strategy', 'Web Design'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Nova Creative Portfolio',
    description: 'A portfolio website template for digital artists and photographers, emphasizing visual storytelling and minimalism.',
    tags: ['Web Design', 'Interaction Design', 'CMS'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    liveUrl: '#',
  },
   {
    id: 5,
    title: 'Helios Travel Planner',
    description: 'A collaborative travel planning tool that helps users organize trips with friends, from itinerary building to budget tracking.',
    tags: ['UI Design', 'Collaboration', 'Productivity'],
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
    liveUrl: '#',
  },
   {
    id: 6,
    title: 'Orion Data Analytics',
    description: 'A complex data analytics platform simplified into an accessible and powerful tool for business intelligence professionals.',
    tags: ['Dashboard', 'B2B', 'SaaS', 'UX'],
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
    liveUrl: '#',
  },
];
