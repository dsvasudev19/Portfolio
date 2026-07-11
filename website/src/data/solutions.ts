export type Accent = "lime" | "blue" | "coral" | "ink";

export type ServicePackage = {
  slug: string;
  title: string;
  tagline: string;
  bestFor: string;
  pricingNote: string;
  includes: string[];
  accent: Accent;
};

export const servicePackages: ServicePackage[] = [
  {
    slug: "mvp-sprint",
    title: "MVP Sprint",
    tagline: "A production-ready MVP in 2–4 weeks — built, deployed, and ready for real users.",
    bestFor: "Early-stage startups",
    pricingNote: "Fixed-scope engagement",
    includes: [
      "Product scoping & architecture",
      "Full-stack build — React/Next.js + Node.js or Spring Boot",
      "Auth, database, and deployment",
      "2 weeks of post-launch support",
    ],
    accent: "lime",
  },
  {
    slug: "agentic-integration",
    title: "Agentic AI Integration",
    tagline: "Ship an MCP server that lets AI agents like Claude take real actions on your product — not just chat about it.",
    bestFor: "Teams shipping AI features",
    pricingNote: "Custom quote",
    includes: [
      "MCP server architecture & tool schema design",
      "Secure API integration with your existing platform",
      "Agent workflow testing",
      "Documentation & handoff",
    ],
    accent: "blue",
  },
  {
    slug: "platform-audit",
    title: "Platform Audit & Scale-Up",
    tagline: "A deep audit of your architecture, security, and data flows — with a concrete plan to scale without a rewrite.",
    bestFor: "Growing products hitting friction",
    pricingNote: "Fixed-scope engagement",
    includes: [
      "System design review (HLD + LLD)",
      "Security & RBAC audit",
      "Performance bottleneck analysis",
      "Prioritized scale-up roadmap",
    ],
    accent: "coral",
  },
];

export type Feature = {
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  title: string;
  status: "In Development" | "Available";
  tagline: string;
  includes: string[];
  cta: string;
  accent: Accent;
  problem: string;
  features: Feature[];
  idealFor: string[];
  techStack: string[];
  engagementModel: string;
};

export const products: Product[] = [
  {
    slug: "core",
    title: "CORE",
    status: "Available",
    tagline: "One platform for a startup to run its entire office — people, projects, and operations in one place.",
    includes: [
      "Employee & team management",
      "Project & task tracking with Kanban boards",
      "Centralized company operations dashboard",
      "Role-based access for every department",
    ],
    cta: "Get a Quote",
    accent: "ink",
    problem:
      "Early teams end up stitching together five different tools — a project tracker, an HR spreadsheet, a Slack channel for approvals, a doc for who owns what. CORE replaces all of it with one system built around how a small team actually works.",
    features: [
      {
        title: "Team & Org Chart",
        description: "Manage employees, roles, and reporting lines in one place, with role-based access built in from day one.",
      },
      {
        title: "Project & Task Management",
        description: "Kanban boards, task assignment, and deadlines tied directly to the people and departments responsible.",
      },
      {
        title: "Company Operations Dashboard",
        description: "A single view of what's happening across every department — no more chasing updates in five channels.",
      },
      {
        title: "Role-Based Access Control",
        description: "Give every department exactly the access it needs, nothing more — enforced at the platform level.",
      },
      {
        title: "Approvals & Workflows",
        description: "Leave requests, expense approvals, and internal sign-offs routed automatically to the right person.",
      },
      {
        title: "Built on Domain-Driven Design",
        description: "A microservice architecture that scales with your org instead of becoming unmaintainable at 50 people.",
      },
    ],
    idealFor: [
      "Seed-to-Series A startups replacing spreadsheets",
      "Teams outgrowing generic project management tools",
      "Founders who want one system of record for the whole company",
    ],
    techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "MCP"],
    engagementModel:
      "Licensed and deployed to your infrastructure — you own the codebase and the data, with optional ongoing support.",
  },
  {
    slug: "opshub",
    title: "OPs HUB",
    status: "In Development",
    tagline: "Everything a freelancer needs to run their business — projects, time, and invoices in one dashboard.",
    includes: [
      "Project & client tracking",
      "Time tracking tied to tasks",
      "Invoice generation & payment tracking",
      "Built for solo operators — no accounting degree required",
    ],
    cta: "Get in Touch",
    accent: "coral",
    problem:
      "Freelancers end up running their business across a notes app, a spreadsheet for invoices, and a separate time tracker — and half of it falls through the cracks at tax time. OPs HUB is the one dashboard that replaces all three.",
    features: [
      {
        title: "Client & Project Tracking",
        description: "Every client, every project, every deadline in one dashboard — no more digging through email threads.",
      },
      {
        title: "Time Tracking Tied to Work",
        description: "Track time against specific tasks and projects, not just a generic timer.",
      },
      {
        title: "Invoice Generation",
        description: "Turn tracked time and fixed-price work into a professional invoice in a couple of clicks.",
      },
      {
        title: "Payment Tracking",
        description: "See what's paid, what's outstanding, and what's overdue at a glance.",
      },
      {
        title: "Simple, No-Nonsense Dashboard",
        description: "Built for solo operators — no onboarding call required, no accounting jargon.",
      },
      {
        title: "Export-Ready Reports",
        description: "Pull time and revenue reports for tax season without reconstructing everything from memory.",
      },
    ],
    idealFor: [
      "Freelance developers, designers, and consultants",
      "Small agencies with 2–5 people",
      "Anyone billing hourly or project-based who's outgrown spreadsheets",
    ],
    techStack: ["Node.js", "TypeScript", "React", "PostgreSQL"],
    engagementModel: "One-time license per organization — deployed for you or handed off as source, your choice.",
  },
  {
    slug: "elevatehub",
    title: "ElevateHub",
    status: "In Development",
    tagline: "A single platform for training institutions to manage trainees, trainers, and AI-assisted upskilling.",
    includes: [
      "Trainee & trainer management",
      "AI mentorship & automated feedback loops",
      "RAG-powered knowledge base for trainee questions",
      "Real-time skill graph & competency tracking",
    ],
    cta: "Get in Touch",
    accent: "lime",
    problem:
      "Training institutions juggle attendance sheets, scattered feedback, and no real way to track whether a trainee's skills are actually improving. ElevateHub gives trainers and trainees one shared platform — with AI doing the busywork.",
    features: [
      {
        title: "Trainee & Trainer Management",
        description: "Onboard trainees, assign trainers, and track cohorts without a spreadsheet in sight.",
      },
      {
        title: "AI Mentorship & Feedback",
        description: "Automated, contextual feedback on trainee work — freeing trainers to focus on what needs a human.",
      },
      {
        title: "RAG-Powered Knowledge Base",
        description: "Trainees get instant, accurate answers to course questions, grounded in your institution's material.",
      },
      {
        title: "Real-Time Skill Graph",
        description: "See exactly which competencies each trainee has — and hasn't — mastered, updated as they work.",
      },
      {
        title: "Communication Dashboard",
        description: "Trainee-trainer messaging and feedback loops in one place, not scattered across email and chat apps.",
      },
      {
        title: "Progress Reporting",
        description: "Exportable reports on cohort and individual progress for institutional reporting.",
      },
    ],
    idealFor: [
      "Coding bootcamps and technical training institutes",
      "Corporate L&D teams running structured upskilling programs",
      "Any institution measuring competency, not just attendance",
    ],
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "React", "OpenAI API"],
    engagementModel: "Licensed per institution — deployed to your infrastructure with your branding.",
  },
  {
    slug: "digischool",
    title: "DigiSchool",
    status: "Available",
    tagline: "One platform for schools to manage staff, operations, and AI-powered features — deployed for your school.",
    includes: [
      "Staff & school operations management",
      "Attendance, grading, and reporting",
      "AI-powered features for teaching & admin",
      "Delivered and handed off to your team",
    ],
    cta: "Get a Quote",
    accent: "blue",
    problem:
      "Schools run on a patchwork of legacy systems — one for attendance, another for grading, a third for payroll — none of which talk to each other. DigiSchool replaces the patchwork with one platform, built from focused services instead of a fragile monolith.",
    features: [
      {
        title: "Staff & Operations Management",
        description: "Manage staff records, scheduling, and day-to-day school operations from one dashboard.",
      },
      {
        title: "Attendance & Grading",
        description: "Digital attendance and grade management, with automatic report card generation.",
      },
      {
        title: "AI-Powered Admin Tools",
        description: "AI assistance for the repetitive parts of teaching and admin — drafting reports, flagging at-risk students.",
      },
      {
        title: "Role-Based Access",
        description: "Six-plus distinct roles (admin, teacher, staff) with granular permissions and zero privilege-escalation surface.",
      },
      {
        title: "Secure, Modern Authentication",
        description: "JWT-based auth with MFA, built for a system that holds student data.",
      },
      {
        title: "Built for Reliability",
        description: "Backed by real observability (Prometheus, Grafana, Loki) — not a black box you have to hope stays up.",
      },
    ],
    idealFor: [
      "K-12 schools replacing legacy management software",
      "Education groups running multiple campuses",
      "Institutions that need AI features without sending student data to a third party",
    ],
    techStack: ["Java", "Spring Boot 3", "React 19", "MySQL", "Prometheus", "Grafana", "Loki"],
    engagementModel: "Deployed and delivered to your school's infrastructure, fully handed off to your IT team.",
  },
];
