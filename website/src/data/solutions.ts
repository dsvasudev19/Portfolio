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
    tagline: "One platform for a company to run its people, projects and clients — with AI agents that work under real permissions.",
    includes: [
      "HR: onboarding, attendance, leave, payroll, recruitment",
      "Agile projects, Kanban boards, sprints and time tracking",
      "Client portal with invoicing",
      "AI assistant and an MCP server for AI clients",
    ],
    cta: "Get a Quote",
    accent: "ink",
    problem:
      "Growing teams end up stitching together separate tools — an HR system, a project tracker, a chat app, a billing tool. CORE puts them in one platform and adds an AI layer that can act on that data, with approvals and an audit trail for everything it does.",
    features: [
      {
        title: "HR & People",
        description: "Employee records, magic-link onboarding, attendance, leave approvals, payroll with PDF payslips, performance reviews and recruitment.",
      },
      {
        title: "Agile Project Management",
        description: "Projects, epics, issues, sprints, a Kanban board, time tracking, bug tracking and stand-ups.",
      },
      {
        title: "Client Portal & Invoicing",
        description: "Give clients visibility into their projects and bill them with PDF invoices from the same system.",
      },
      {
        title: "AgentFlow Workflow Builder",
        description: "Describe a process in plain language and AI builds the workflow; run it with live, step-by-step progress.",
      },
      {
        title: "AI That Asks First",
        description: "The sprint-manager agent proposes changes; a person approves them, and every step is written to an audit log.",
      },
      {
        title: "MCP Server & Security",
        description: "An OAuth 2.1 MCP server exposes about 145 role-gated tools to AI clients. Sign-in with Google, GitHub or OIDC, TOTP MFA, WebAuthn and RBAC.",
      },
    ],
    idealFor: [
      "Growing companies replacing a patchwork of HR and project tools",
      "Teams that want AI agents working with their data under proper permissions",
      "Organisations that need an audit trail for people, projects and AI actions",
    ],
    techStack: ["Java", "Spring Boot", "LangGraph", "MCP", "React", "PostgreSQL", "Docker"],
    engagementModel:
      "Licensed and deployed to your infrastructure — you own the codebase and the data, with optional ongoing support.",
  },
  {
    slug: "opshub",
    title: "OPs HUB",
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
    title: "ElevateHub (Astravora)",
    tagline: "An AI-native platform for training institutions: courses, proctored exams, coding practice and AI career coaching in one place.",
    includes: [
      "Courses, cohorts, exams and certificates",
      "Proctored exams and coding challenges",
      "AI mock interviews, tutor and skill gap analysis",
      "AI project review and an MCP server for instructors",
    ],
    cta: "Get a Quote",
    accent: "lime",
    problem:
      "Training institutions juggle separate tools for courses, exams, coding practice and career preparation, with no easy way to check whether trainees can really do the work. ElevateHub brings them together and lets AI handle the repetitive parts.",
    features: [
      {
        title: "Proctored Exams",
        description: "Anti-cheating checks: screen capture, logging of full-screen exits and tab switches, and blocking of browsers with built-in AI assistants during exams.",
      },
      {
        title: "Coding Challenges",
        description: "Code runs in 8 languages inside an isolated sandbox, with AI-generated problems and hidden test cases.",
      },
      {
        title: "AI Project Review",
        description: "Six agents audit a trainee's GitHub project against its goals and comment directly on the pull request.",
      },
      {
        title: "AI Career Coaching",
        description: "An 8-round mock interviewer, skill gap analyzer, Socratic tutor, soft-skills coach and a resume studio with an ATS score.",
      },
      {
        title: "MCP for Instructors",
        description: "Instructors can build courses and exams from Claude or ChatGPT through a 60+ tool MCP server.",
      },
      {
        title: "Learning Tools",
        description: "Collaborative notes, RAG answers from study material, hackathons, gamification, certificates, and a mobile app.",
      },
    ],
    idealFor: [
      "Coding bootcamps and technical training institutes",
      "Corporate L&D teams running structured upskilling programs",
      "Institutions that need proctored exams and verified practical skills",
    ],
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "React", "React Native", "Temporal"],
    engagementModel: "Licensed per institution — deployed to your infrastructure with your branding.",
  },
  {
    slug: "digischool",
    title: "DigiSchool",
    tagline: "One platform for schools to run academics, fees, staff and communication, with a supervised AI study assistant for students.",
    includes: [
      "Admissions, attendance, exams and report cards",
      "Fees, payroll, library and transport",
      "Student and parent mobile app",
      "AI study assistant with child-safety controls",
    ],
    cta: "Get a Quote",
    accent: "blue",
    problem:
      "Schools run on a patchwork of legacy systems — one for attendance, another for grading, a third for fees and payroll — none of which talk to each other. DigiSchool replaces the patchwork with one platform built from focused services.",
    features: [
      {
        title: "School Operations",
        description: "Admissions, student and parent profiles, staff, classes, timetables, daily attendance, transport and a library.",
      },
      {
        title: "Exams & Report Cards",
        description: "Marks entry, GPA and percentage calculation, and report cards with teacher remarks.",
      },
      {
        title: "Fees, Payroll & Leave",
        description: "Fee structures with instalments and reconciliation, staff payroll, and leave policies with automatic accrual.",
      },
      {
        title: "Automated Workflows",
        description: "Durable background jobs handle year-end promotion, fee reminders and notification reconciliation.",
      },
      {
        title: "Student & Parent App",
        description: "A mobile app with biometric unlock and an AI School tab: doubt solver, teacher, calculator and study tools.",
      },
      {
        title: "Safe AI & Strong Security",
        description: "AI answers pass parent authorisation, daily quotas and two-way moderation, with an audit log. Sign-in with MFA, SMS codes and biometrics.",
      },
    ],
    idealFor: [
      "K-12 schools replacing legacy management software",
      "Education groups running multiple campuses",
      "Schools that want supervised, audited AI for students",
    ],
    techStack: ["Java", "Spring Cloud", "React", "React Native", "MySQL", "Temporal", "Prometheus"],
    engagementModel: "Deployed and delivered to your school's infrastructure, fully handed off to your IT team.",
  },
];
