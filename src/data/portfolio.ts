import chefliPreview from '../assets/chefli-preview.jpg';
import voteChainPreview from '../assets/VoteChain.png';
import coverlyPreview from '../assets/coverly-ai.svg';
import subtrackerPreview from '../assets/Subtracker.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string | any;
  tags: string[];
  github?: string;
  live?: string;
  appStore?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'databases' | 'cloud';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: 'Gianmarco Arena',
  titles: ['Full-Stack Developer', 'Computer Engineering Graduate'],
  email: 'gianmarco88arena@gmail.com',
  location: 'Toronto, Canada',
  about: `I’m a developer passionate about building thoughtful, responsive user experiences with clean, maintainable code. My favorite work lives at the intersection of intuitive design and full-stack engineering. Creating applications that feel fast, scale well, and solve real problems.`,
  resume: '/resume.pdf'
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Gxarena',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/gianmarco-arena',
    icon: 'linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:gianmarco.arena@example.com',
    icon: 'mail'
  }
];

export const experiences: Experience[] = [
  {
    id: 'aesthera',
    company: 'Aesthera Tech',
    role: 'Frontend Developer',
    period: 'Mar 2025 – Present',
    description: 'Built and launched an AI-powered widget for pre-clinic botox visualization, embedded in real-world client websites.',
    technologies: ['React', 'Tailwind', 'Vite', 'iFrame Embeds'],
    achievements: [
      'Led UI development for widget and marketing site from scratch',
      'Enabled real-time AI botox previews for users using clinic-branded UI',
      'Delivered responsive builds with full embedding compatibility'
    ]
  },
  {
    id: 'falcon-bot',
    company: 'Falcon Bot',
    role: 'Software Developer Intern',
    period: 'Jul 2024 – Sep 2024',
    description: 'Built and scaled backend services for a Telegram-based crypto bot managing $400K+ trading volume.',
    technologies: ['FastAPI', 'Docker', 'GCP', 'Redis', 'Telegram API'],
    achievements: [
      'Reduced backend latency 40% via Redis caching',
      'Shipped wallet manager with real-time portfolio tracking',
      'Containerized APIs and deployed via Cloud Build and Cloud Run'
    ]
  },
  {
    id: 'dopple-labs',
    company: 'Dopple Labs',
    role: 'Software Developer Intern',
    period: 'Mar 2024 – Jun 2024',
    description: 'Supported internal AI tooling and subscription infra at scale for 300K+ users.',
    technologies: ['React', 'FastAPI', 'Stripe', 'Python', 'Zilliz'],
    achievements: [
      'Built moderator admin panel to flag content with 2x faster turnaround',
      'Created AI prompt engineering sandbox for non-devs',
      'Integrated Stripe billing for self-serve subscriptions'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'chefli-app',
    title: 'Chefli App',
    description: 'AI-powered meal assistant app',
    longDescription: 'Cross-platform mobile app that generates AI-curated recipes and grocery lists based on dietary preferences. Built with React Native and deployed via Expo.',
    image: chefliPreview,
    tags: ['React Native', 'Expo', 'AI', 'Firebase'],
    github: 'https://apps.apple.com/ca/app/chefli/id6740599710',
    featured: true
  },
  {
    id: 'coverly-ai',
    title: 'Coverly AI',
    description: 'AI-powered cover letter generator',
    longDescription: 'A powerful Chrome extension that automatically extracts job descriptions from job boards and generates personalized cover letters using AI.',
    image: coverlyPreview,
    tags: ['React', 'Tailwind', 'TypeScript', 'Firebase', 'Python', 'FastAPI', 'OpenAI', 'Chrome Extension'],
    github: 'https://github.com/Gxarena/coverly-ai',
    featured: true
  },
  {
    id: 'subtracker-telegram-bot',
    title: 'Subtracker Telegram Bot',
    description: 'Automated subscription-based access control for Telegram communities',
    longDescription: `A production-grade Telegram bot built for a VIP sports betting group. It handles subscription payments, validates access in real-time, and automatically removes users when their subscription expires. The bot also offers status checks and onboarding flows, fully integrated into the group chat for seamless admin-free operation.`,
    image: subtrackerPreview,
    tags: ['Python', 'Stripe API', 'Telegram API', 'GCP', 'Webhooks'],
    github: 'https://github.com/Gxarena/AMBetz-Telegram-Bot',
    featured: true
  },
  {
    id: 'blockchain-voting',
    title: 'Blockchain Voting System',
    description: 'Decentralized Ethereum-based voting platform',
    longDescription: 'An on-chain voting dApp using Solidity smart contracts, JWT auth, and a responsive React frontend. Designed to simulate real-time elections with verifiable vote integrity.',
    image: voteChainPreview,
    tags: ['Solidity', 'React', 'Ethers.js', 'MongoDB', 'Node.js'],
    github: 'https://github.com/Malshalab/Blockchain-Voting-System',
    featured: true
  }
];

export const skills: Skill[] = [
  { name: 'JavaScript', category: 'languages', level: 'expert' },
  { name: 'TypeScript', category: 'languages', level: 'intermediate' },
  { name: 'Python', category: 'languages', level: 'advanced' },
  { name: 'Java', category: 'languages', level: 'intermediate' },
  { name: 'Solidity', category: 'languages', level: 'beginner' },

  { name: 'React', category: 'frameworks', level: 'advanced' },
  { name: 'FastAPI', category: 'frameworks', level: 'advanced' },
  { name: 'React Native', category: 'frameworks', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'frameworks', level: 'advanced' },
  { name: 'Node.js', category: 'frameworks', level: 'intermediate' },

  { name: 'Git', category: 'tools', level: 'expert' },
  { name: 'Docker', category: 'tools', level: 'advanced' },
  { name: 'Vite', category: 'tools', level: 'advanced' },
  { name: 'Expo', category: 'tools', level: 'intermediate' },
  { name: 'YAML', category: 'tools', level: 'advanced' },

  { name: 'MongoDB', category: 'databases', level: 'intermediate' },
  { name: 'PostgreSQL', category: 'databases', level: 'advanced' },
  { name: 'Firebase', category: 'databases', level: 'intermediate' },
  { name: 'Redis', category: 'databases', level: 'intermediate' },

  { name: 'GCP', category: 'cloud', level: 'intermediate' },
];

export const skillCategories = {
  languages: 'Programming Languages',
  frameworks: 'Frameworks & Libraries',
  tools: 'Development Tools',
  databases: 'Databases',
  cloud: 'Cloud Platforms',
}; 