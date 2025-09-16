import type { NavLink, Project } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Tableau de bord Aura Finance',
    description: "Un tableau de bord épuré et intuitif pour une startup fintech, axé sur la visualisation de données et la gestion conviviale des transactions.",
    tags: ['UI/UX', 'Figma', 'React', 'Viz Données'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
  },
  {
    id: 2,
    title: 'App Mobile Zénith',
    description: "Une application de bien-être et de méditation conçue pour promouvoir la pleine conscience avec une interface apaisante et des parcours utilisateurs personnalisés.",
    tags: ['UI Mobile', 'Prototypage', 'Recherche Utilisateur'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
  },
  {
    id: 3,
    title: 'E-commerce Éclipse',
    description: "Une plateforme e-commerce futuriste pour une marque de mode haut de gamme, avec des vues de produits immersives et une expérience de paiement transparente.",
    tags: ['E-commerce', 'Stratégie UX', 'Design Web'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
  },
  {
    id: 4,
    title: 'Portfolio Créatif Nova',
    description: "Un modèle de site portfolio pour les artistes numériques et les photographes, mettant l'accent sur le storytelling visuel et le minimalisme.",
    tags: ['Design Web', "Design d'Interaction", 'CMS'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
  },
   {
    id: 5,
    title: 'Planificateur de Voyage Helios',
    description: "Un outil collaboratif de planification de voyage qui aide les utilisateurs à organiser des voyages entre amis, de la création d'itinéraire au suivi du budget.",
    tags: ['Design UI', 'Collaboration', 'Productivité'],
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
  },
   {
    id: 6,
    title: 'Analyse de Données Orion',
    description: "Une plateforme complexe d'analyse de données simplifiée en un outil accessible et puissant pour les professionnels de la business intelligence.",
    tags: ['Tableau de bord', 'B2B', 'SaaS', 'UX'],
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
  },
];