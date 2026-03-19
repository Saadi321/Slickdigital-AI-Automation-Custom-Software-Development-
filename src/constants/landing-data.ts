import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Code2,
  Gauge,
  Handshake,
  Layers3,
  LifeBuoy,
  Lock,
  Puzzle,
  Rocket,
  Search,
  ServerCog,
  TestTube2,
  UploadCloud,
  Users,
  Workflow,
} from 'lucide-react';
import { type FeatureItem, type ServiceItem } from '@/types';

export const navLinks = ['Home', 'Services', 'Solutions', 'Case Studies', 'Pricing', 'Contact'];

export const trustedLogos = ['NovaTech', 'LinearIQ', 'AetherCloud', 'PulseOps', 'Vertex Labs', 'Stackline'];

export const services: ServiceItem[] = [
  { icon: Bot, title: 'AI Automation', description: 'Streamline repetitive workflows with custom AI agents and orchestration systems.' },
  { icon: Code2, title: 'Custom Software Development', description: 'Build tailored enterprise software with modern, secure architecture.' },
  { icon: Layers3, title: 'SaaS Development', description: 'Launch scalable SaaS platforms with subscription, analytics, and integrations.' },
  { icon: Building2, title: 'CRM / ERP Systems', description: 'Unify operations with centralized, data-driven CRM and ERP implementations.' },
  { icon: Puzzle, title: 'API Integrations', description: 'Connect all business-critical tools through reliable APIs and automation layers.' },
];

export const solutionCards = [
  {
    audience: 'For Startups',
    painPoints: 'Slow product cycles, limited engineering bandwidth, uncertain architecture choices.',
    solution: 'MVP acceleration squads, AI-powered product workflows, and roadmap execution.',
    outcome: 'Go-to-market up to 2x faster with strong technical foundations.',
  },
  {
    audience: 'For Enterprises',
    painPoints: 'Legacy systems, siloed teams, and manual operations limiting scale.',
    solution: 'Modernization, secure integrations, and AI-driven process automation.',
    outcome: 'Operational efficiency, lower risk, and enterprise-grade reliability.',
  },
  {
    audience: 'For Agencies',
    painPoints: 'Client delivery bottlenecks and difficulty scaling technical execution.',
    solution: 'White-label development pods and reusable automation frameworks.',
    outcome: 'Higher margins, faster deliverables, and stronger client retention.',
  },
];

export const features: FeatureItem[] = [
  { icon: Clock3, title: 'Fast Delivery', description: 'Lean sprint cycles with transparent timelines and measurable output.' },
  { icon: ServerCog, title: 'Scalable Architecture', description: 'Future-proof systems designed for high growth and enterprise workloads.' },
  { icon: Lock, title: 'Secure Systems', description: 'Security-first engineering aligned with modern compliance expectations.' },
  { icon: BrainCircuit, title: 'AI-Driven Workflows', description: 'Practical AI implementation that delivers real operational impact.' },
  { icon: LifeBuoy, title: 'Dedicated Support', description: 'Proactive partnership with strategic guidance and rapid troubleshooting.' },
];

export const processSteps = [
  { icon: Search, title: 'Discovery', description: 'We map requirements, risks, and opportunities.' },
  { icon: Workflow, title: 'Planning', description: 'Architecture, milestones, and sprint planning are finalized.' },
  { icon: BriefcaseBusiness, title: 'Development', description: 'Your product is built with clean, maintainable code.' },
  { icon: TestTube2, title: 'Testing', description: 'Robust QA with performance and security validation.' },
  { icon: UploadCloud, title: 'Deployment', description: 'Seamless launch, monitoring, and post-release optimization.' },
];

export const caseStudies = [
  { project: 'Synapse CRM', industry: 'SaaS', result: '+300% team efficiency' },
  { project: 'PulseOps AI', industry: 'Logistics', result: '-45% manual operations' },
  { project: 'Vertex Finance Hub', industry: 'FinTech', result: '+120% workflow speed' },
];

export const testimonials = [
  {
    name: 'Elena Tran',
    role: 'Founder, NovaFlow',
    feedback: 'They delivered our AI workflow platform in record time with outstanding product quality.',
  },
  {
    name: 'Marcus Li',
    role: 'CTO, ApexStack',
    feedback: 'The team merged enterprise reliability with startup speed. A rare technical partner.',
  },
  {
    name: 'Sophia Reed',
    role: 'COO, BrightScale Agency',
    feedback: 'Their automation systems transformed our delivery model and client satisfaction metrics.',
  },
];

export const pricing = [
  {
    tier: 'Starter',
    price: '$4.9k',
    details: 'Ideal for MVPs and rapid prototypes.',
    perks: ['Strategy workshop', '1 product squad', 'Weekly delivery'],
  },
  {
    tier: 'Growth',
    price: '$12k',
    details: 'Best for scaling SaaS and internal platforms.',
    perks: ['Dedicated cross-functional team', 'AI workflow setup', 'Priority support'],
    featured: true,
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    details: 'Complex modernization and multi-team execution.',
    perks: ['Security & compliance support', 'SLA-backed operations', 'Executive reporting'],
  },
];

export const footerLinks = {
  product: ['Services', 'Solutions', 'Pricing'],
  company: ['Case Studies', 'About', 'Careers'],
  resources: ['Blog', 'Documentation', 'Contact'],
};

export const stats = [
  { label: 'Delivery acceleration', value: '2.4x' },
  { label: 'Project success rate', value: '98.2%' },
  { label: 'Global clients', value: '120+' },
];

export const socialIcons = [Handshake, Users, Gauge, Rocket];
