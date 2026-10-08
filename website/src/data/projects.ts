export type Project = {
  slug?: string;
  title: string;
  description: string;
  coverType: "image" | "brand";
  thumbnail?: string;
  accent?: "lime" | "blue" | "coral" | "ink";
  github?: string;
  live?: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "elevatehub",
    title: "ElevateHub (Astravora)",
    description:
      "AI-native learning and career platform live at astravora.in — proctored exams, coding challenges in 8 languages, a six-agent project reviewer, AI mock interviews and an MCP server for instructors.",
    coverType: "brand",
    accent: "lime",
    github: "https://github.com/Tech-by-Vasu/Edu-Tech-Platform",
    live: "https://astravora.in",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "React 19", "React Native", "Temporal", "MCP"],
    featured: true,
  },
  {
    slug: "core-platform",
    title: "CORE (Cross Operational Resource Engine)",
    description:
      "Enterprise workforce and project platform — HR, agile project management and messaging, with a LangGraph agent layer and an OAuth-secured MCP server exposing about 145 tools to AI clients.",
    coverType: "brand",
    accent: "ink",
    github: "https://github.com/dsvasudev19/CORE",
    live: "https://core.dsvasudev.in",
    tags: ["Java", "Spring Boot", "LangGraph", "MCP", "React 19", "Socket.IO", "Temporal", "Docker"],
    featured: true,
  },
  {
    slug: "mcp-connector",
    title: "Agentic AI Portfolio (MCP Connector)",
    description:
      "A live AI agent that answers questions about me, built on a Model Context Protocol server with 16 tools that Claude and ChatGPT can also use — plus calendar booking.",
    coverType: "brand",
    accent: "lime",
    tags: ["MCP", "LangGraph", "LangChain", "TypeScript", "Node.js", "AI Agent Tools"],
    featured: true,
  },
  {
    slug: "digischool",
    title: "DigiSchool Apps",
    description:
      "School management ERP on Spring Cloud microservices, with a student and parent mobile app, Temporal workflows and an AI study assistant behind a server-side child-safety pipeline.",
    coverType: "brand",
    accent: "blue",
    tags: ["Java", "Spring Cloud", "React", "React Native", "MySQL", "Temporal", "AI Safety"],
    featured: true,
  },
  {
    slug: "kupa-co-investing",
    title: "Co-Investing Platform",
    description:
      "At Kupa Inc — co-investment workflows and real-time portfolio tracking for high-net-worth investors.",
    coverType: "brand",
    accent: "coral",
    tags: ["Node.js", "TypeScript", "React", "PostgreSQL", "Docker"],
    featured: true,
  },
  {
    slug: "projexpert",
    title: "ProjeXpert",
    description:
      "Comprehensive project management platform with GitHub integration, task tracking, and Kanban boards.",
    coverType: "image",
    thumbnail:
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227527/c01mnt3r0tqe0fg3tfgu.png",
    github: "https://github.com/dsvasudev19/ProjeXpert",
    live: "https://projexpert.vercel.app/",
    tags: ["React", "Node.js", "MySQL", "GitHub API"],
    featured: true,
  },
  {
    slug: "smarttransit",
    title: "SmartTransit System",
    description:
      "Urban transportation and carpool services platform built with Spring Boot microservices and Angular.",
    coverType: "image",
    thumbnail: "/assets/urbanpulse.png",
    github: "https://github.com/dsvasudev19/Capstone-Project",
    live: "https://smart-transit.vercel.app/",
    tags: ["Spring Boot", "Microservices", "PostgreSQL", "Docker"],
  },
  {
    slug: "vehicle-rental",
    title: "Vehicle Rentals System",
    description:
      "Vehicle rental marketplace with vendor listings and user reservations using Spring Boot and Angular.",
    coverType: "image",
    thumbnail: "/assets/image.png",
    github: "https://github.com/dsvasudev19/vehicle-rental-system-microservices",
    live: "https://onthego-rentals-dashboard.vercel.app",
    tags: ["Spring Boot", "Angular", "React", "MySQL"],
  },
  {
    slug: "chatterbox",
    title: "Chatterbox",
    description:
      "Real-time messaging and file sharing platform built with Node.js, Express, MySQL and React.",
    coverType: "image",
    thumbnail:
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1733584417/screencapture-chatterbox-dev-vercel-app-2024-11-18-15_50_55_nhs7op.png",
    github: "https://github.com/dsvasudev19/ChatterBox",
    live: "https://chatterbox-dev.vercel.app/",
    tags: ["React", "Socket.IO", "Tailwind CSS"],
  },
  {
    title: "Banking Website",
    description: "Secure banking website with robust architecture and user-friendly interface.",
    coverType: "image",
    thumbnail: "/assets/banking.png",
    github: "https://github.com/dsvasudev19/bankingsystem.github.io",
    live: "https://dsvasudev.000webhostapp.com/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "roughAge E-Commerce",
    description: "Fresh produce delivery platform with same-day delivery service.",
    coverType: "image",
    thumbnail: "/assets/ecommerce.png",
    github: "https://github.com/dsvasudev19/roughAge_eCommerce",
    live: "https://roughage.vercel.app",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

export type ProjectDetail = {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  features: string[];
  tech: string[];
  screenshots: string[];
  github?: string;
  live?: string;
  diagrams?: { src: string; alt: string }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  elevatehub: {
    slug: "elevatehub",
    title: "ElevateHub (Astravora)",
    subtitle: "AI-native learning, exam and career platform — live in production",
    overview:
      "ElevateHub (Astravora) is a polyglot Turborepo monorepo built as federated microservices with micro-frontends and a native mobile app. It separates learning delivery, proctored exams, coding challenges, marketing, real-time collaboration, AI agents and identity into loosely coupled services — 7 applications, about 10 backend services and a PostgreSQL database of 112 models — and runs in production at astravora.in.",
    features: [
      "Anti-cheating exam proctoring: screen capture, logging of full-screen exits and tab switches, and blocking of browsers with built-in AI assistants during exams",
      "Coding challenges in 8 languages (JS, TS, Python, Java, C++, C, Go, Rust) run in an isolated Piston sandbox, with AI-generated problems and hidden test cases",
      "Six-agent project review: audits a student's GitHub repo against the project goals, checks UI screenshots with a vision model and comments on the pull request",
      "AI mock interviewer (8 adaptive rounds, STAR scoring), skill gap analyzer, Socratic AI tutor, soft-skills coach and notes copilot",
      "Aura Resume AI Studio: live preview, four layouts, AI rewriting for a target job and an ATS score analyzer (resume.astravora.in)",
      "Collaborative notes on Yjs CRDTs with live presence and automatic snapshots every 10 minutes",
      "MCP server with 60+ tools so instructors can build courses and exams from Claude or ChatGPT",
      "Learner, instructor, admin and marketing portals, a React Native mobile app, hackathons, certificates and Cashfree / Razorpay payments",
      "Security: OAuth 2.0 / OIDC with PKCE, RS256 JWTs through JWKS, TOTP two-factor and HMAC-signed service-to-service calls with replay protection",
    ],
    tech: ["TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL 16", "React 19", "TanStack Start", "React Native (Expo)", "Temporal", "Piston", "Yjs", "MCP SDK", "Docker", "Nginx", "Grafana + Loki"],
    screenshots: [],
    github: "https://github.com/Tech-by-Vasu/Edu-Tech-Platform",
    live: "https://astravora.in",
  },
  "core-platform": {
    slug: "core-platform",
    title: "CORE (Cross Operational Resource Engine)",
    subtitle: "Enterprise workforce and project intelligence platform with an agentic AI layer",
    overview:
      "CORE is a full-stack enterprise platform that combines HR management, agile project management, real-time messaging and a comprehensive agentic AI layer built on LangGraph and the Model Context Protocol. It has separate portals for admins, employees and clients, and is a pnpm + Turborepo monorepo of 2 apps, 6 services and 3 shared packages, deployed with Docker behind Nginx.",
    features: [
      "HR suite: employee lifecycle, magic-link onboarding, attendance, leave approvals, payroll with PDF payslips, performance reviews, recruitment and more",
      "Agile project management: projects, epics, issues, sprints, a Kanban board, time tracking, bug tracking and stand-ups",
      "Client portal and invoicing, with PDF invoices and project visibility for clients",
      "AgentFlow: a no-code visual workflow builder where AI generates a workflow from plain language, self-corrects it, and runs it with live step streaming",
      "Human-in-the-loop sprint manager: the AI proposes changes, a person approves them, and every action is audited",
      "MCP server secured with OAuth 2.1 + PKCE: about 145 role-gated tools in 14 categories so Claude and other AI clients can work with CORE data",
      "AI chat assistant with RAG over company documents; 15 LangGraph graphs on OpenRouter, OpenAI, Claude or Gemini, traced with LangSmith",
      "Real-time messaging: channels, direct messages, threads, mentions, reactions and presence",
      "Security: JWT with JWKS, Google / GitHub / OIDC sign-in, TOTP MFA, WebAuthn biometrics, RBAC and full audit logs",
    ],
    tech: ["Java 17", "Spring Boot 3.4", "TypeScript", "LangChain.js", "LangGraph.js", "MCP SDK", "React 19", "Next.js 16", "Socket.IO", "PostgreSQL", "Temporal", "Docker", "Nginx"],
    screenshots: [],
    github: "https://github.com/dsvasudev19/CORE",
    live: "https://core.dsvasudev.in",
  },
  "mcp-connector": {
    slug: "mcp-connector",
    title: "Agentic AI Portfolio (MCP Connector)",
    subtitle: "A live AI agent and MCP server that answers questions about Vasudev",
    overview:
      "A portfolio that can talk back. A Model Context Protocol (MCP) server exposes Vasudev's engineering profile — work history, projects, skills, system design principles and live calendar booking — as 16 tools. A LangChain + LangGraph agent uses those same tools to power the assistant on this site, and Claude, ChatGPT and other MCP clients can connect to the server directly.",
    features: [
      "16 MCP tools: get_profile, get_projects, get_skills, get_project_deep_dive, check_slots, book_appointment and more",
      "LangGraph agent that calls the tools, streams its answer to the website and shows what it is doing step by step",
      "Connects directly to Claude and other MCP clients as a custom connector for live Q&A",
      "Checks real calendar availability and can book meetings with email confirmation",
      "Reliable by design: model fallbacks, retries, per-visitor rate limits and no AI keys in the browser",
    ],
    tech: ["TypeScript", "Node.js", "Model Context Protocol", "LangChain", "LangGraph", "OpenRouter", "Express", "Google Calendar API"],
    screenshots: [],
    live: "https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Vasudev&connectorUrl=https%3A%2F%2Fai.dsvasudev.in%2Fmcp",
  },
  digischool: {
    slug: "digischool",
    title: "DigiSchool Apps",
    subtitle: "School management ERP with a student and parent app and a safe AI study assistant",
    overview:
      "DigiSchool is an Integrated School Management System for K-12: a Spring Cloud microservice backend, React dashboards for administrators and teachers, Next.js sites, an Expo mobile app (ClassBoard) for students and parents, Temporal workflows for long-running school processes and an AI learning assistant protected by a server-side child-safety pipeline.",
    features: [
      "School ERP: admissions, student and parent profiles, staff, classes, timetables and daily attendance",
      "Exams, marks entry, GPA / percentage calculation and report cards with teacher remarks",
      "Fees with flexible structures, instalments, payments, receipts and reconciliation; transport routes; library circulation with fines; certificates from templates",
      "Staff leave policies with automatic accrual, plus payroll and payslips",
      "Temporal workflows: student promotion at year end, fee reminders, notification reconciliation and leave accrual",
      "ClassBoard mobile app with biometric unlock and an AI School tab: doubt solver, teacher, step-by-step calculator, story teller, study buddy and mindful moments",
      "AI safety: parent-student authorisation, a daily quota, moderation of both questions and answers, grade-aware prompts and a full audit log — no AI keys ever reach the phone",
      "Security: JWT with refresh rotation and JWKS, TOTP MFA, SMS one-time passwords, WebAuthn biometrics and declarative role-based permissions",
      "Multi-tenant controls (school provisioning, feature flags, quotas) and observability with Prometheus alerts, Grafana and Loki",
    ],
    tech: ["Java 17/21", "Spring Boot 3", "Spring Cloud", "Temporal", "MySQL 8", "PostgreSQL 15", "React", "Next.js 16", "React Native (Expo)", "OpenRouter", "Prometheus", "Grafana", "Loki"],
    screenshots: [],
  },
  "kupa-co-investing": {
    slug: "kupa-co-investing",
    title: "Co-Investing Platform",
    subtitle: "Co-Investment Workflows & Real-Time Portfolio Tracking",
    overview:
      "Building the co-investing platform at Kupa Inc — enabling high-net-worth investors to discover, participate in, and manage co-investment deals across multiple asset classes.",
    features: [
      "Co-investment workflow engine with real-time portfolio tracking",
      "Scalable RESTful APIs for secure financial data flows and investment transactions",
      "Automated mobile release pipelines — 80% reduction in deployment effort",
      "Containerised services with 99.9% production uptime",
    ],
    tech: ["Node.js", "TypeScript", "React", "PostgreSQL", "Docker", "GitHub Actions"],
    screenshots: [],
  },
  projexpert: {
    slug: "projexpert",
    title: "ProjeXpert",
    subtitle: "Comprehensive Project Management Platform with GitHub Integration",
    overview:
      "A robust platform for managing projects and tasks within an organization, with seamless GitHub integration for automatic repository creation and issue management.",
    features: [
      "Client onboarding with secure information management",
      "Automatic GitHub repository creation on project setup",
      "Task assignment, bug tracking synced as GitHub issues",
      "Personalized Kanban boards with drag-and-drop",
      "Role-based JWT authentication (Admin, Manager, Employee)",
      "Secure file management per project",
    ],
    tech: ["Node.js", "Express.js", "React.js", "MySQL", "Sequelize", "GitHub API", "JWT"],
    screenshots: [
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227527/c01mnt3r0tqe0fg3tfgu.png",
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227521/k09jmcombszpagadr30h.png",
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227520/xnksymlkrv27ix1cnqgl.png",
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227519/d7bqf7pgg5lj0xinhf9l.png",
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227517/q0vbalxcwkmjemzyf9pe.png",
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227515/vvfwtasj8feclodgyo2i.png",
    ],
    github: "https://github.com/dsvasudev19/ProjeXpert",
    live: "https://projexpert.vercel.app/",
  },
  smarttransit: {
    slug: "smarttransit",
    title: "SmartTransit System",
    subtitle: "Microservices-Based Smart Public Transportation System",
    overview:
      "A scalable microservices architecture for smart public transportation — carpooling, bus scheduling, live tracking via Ola Maps, payments, and centralized authentication.",
    features: [
      "Live bus tracking with Ola Maps integration",
      "Carpooling and route optimization services",
      "Centralized JWT authentication via API Gateway",
      "Netflix Eureka service discovery",
      "Payment, notification, and feedback microservices",
      "Docker containerization for deployment",
    ],
    tech: ["Spring Boot", "Spring Cloud", "PostgreSQL", "Docker", "Netflix Eureka", "JWT", "Ola Maps"],
    screenshots: [],
    diagrams: [
      { src: "/assets/ARCHITECTURE.JPEG", alt: "SmartTransit Architecture" },
      { src: "/assets/sequence-diagram.png", alt: "SmartTransit Sequence Diagram" },
    ],
    github: "https://github.com/dsvasudev19/Capstone-Project",
    live: "https://smart-transit.vercel.app/",
  },
  "vehicle-rental": {
    slug: "vehicle-rental",
    title: "Vehicle Rentals System",
    subtitle: "Comprehensive Vehicle Rental Platform",
    overview:
      "A microservices-based vehicle rental platform with Angular client UI, React admin dashboard, and Spring Boot backend services.",
    features: [
      "User and vendor management",
      "Vehicle listing, booking, and availability tracking",
      "Feedback and coupon management",
      "JWT-secured RESTful microservices",
      "Admin dashboard for operations",
    ],
    tech: ["Spring Boot", "Spring Cloud", "Angular", "React", "MySQL", "Docker", "JWT"],
    screenshots: [
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1733584417/screencapture-chatterbox-dev-vercel-app-2024-11-18-15_50_55_nhs7op.png",
    ],
    github: "https://github.com/dsvasudev19/vehicle-rental-system-microservices",
    live: "https://onthego-rentals-dashboard.vercel.app",
  },
  chatterbox: {
    slug: "chatterbox",
    title: "Chatterbox",
    subtitle: "Real-time Chat Application",
    overview:
      "A real-time chatting application with instant messaging, user authentication, and a fully responsive design across all devices.",
    features: [
      "Real-time communication with Socket.IO",
      "Secure user authentication",
      "Responsive design for all screen sizes",
      "Smooth, modern chat experience",
    ],
    tech: ["React.js", "Socket.IO", "Tailwind CSS", "Styled-components"],
    screenshots: [
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1733584417/screencapture-chatterbox-dev-vercel-app-2024-11-18-15_50_55_nhs7op.png",
      "https://res.cloudinary.com/dxqrg09mq/image/upload/v1733584384/screencapture-chatterbox-dev-vercel-app-chat-2024-11-18-15_53_25_rozqyt.png",
    ],
    github: "https://github.com/dsvasudev19/ChatterBox",
    live: "https://chatterbox-dev.vercel.app/",
  },
};

export function getProjectSlugs() {
  return Object.keys(projectDetails);
}
