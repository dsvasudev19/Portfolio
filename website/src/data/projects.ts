export type ProjectStatus = "shipped" | "in-development" | "in-progress";

export type Project = {
  slug?: string;
  title: string;
  description: string;
  status: ProjectStatus;
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
    title: "ElevateHub",
    description:
      "AI-native learning management system & AI solutions suite featuring an AI Interview Coach, Skill Gap Analyzer, AI Resume Builder, RAG Q&A engine, and real-time trainee skill graph.",
    status: "in-development",
    coverType: "brand",
    accent: "lime",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "React", "OpenAI API", "RAG Engine", "WebSockets"],
    featured: true,
  },
  {
    slug: "core-platform",
    title: "CORE (AI Native Collaborative Organizational Resource Engine)",
    description:
      "Enterprise startup management platform built with DDD & microservices — MCP servers let AI agents delegate tasks and execute operations in natural language.",
    status: "shipped",
    coverType: "brand",
    accent: "ink",
    tags: ["Java", "Spring Boot", "React", "Node.js", "MCP", "DDD"],
    featured: true,
  },
  {
    slug: "mcp-connector",
    title: "Portfolio MCP Connector",
    description:
      "Model Context Protocol (MCP) server exposing profile, experience, projects, skills, and calendar booking as callable tools for AI agents like Claude & ChatGPT.",
    status: "shipped",
    coverType: "brand",
    accent: "lime",
    tags: ["MCP", "TypeScript", "Node.js", "Claude API", "AI Agent Tools"],
    featured: true,
  },
  {
    slug: "digischool",
    title: "DigiSchool Apps",
    description:
      "Upcoming AI-powered platform for managing whole school operations (staff, students, academics, attendance, and administrative workflows) across 8 microservices.",
    status: "shipped",
    coverType: "brand",
    accent: "blue",
    tags: ["Java", "Spring Boot 3", "React 19", "MySQL", "Multi-tenant SaaS", "AI School Management"],
    featured: true,
  },
  {
    slug: "kupa-co-investing",
    title: "Co-Investing Platform",
    description:
      "In progress at Kupa Inc — co-investment workflows and real-time portfolio tracking for high-net-worth investors.",
    status: "in-progress",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
    coverType: "image",
    thumbnail: "/assets/banking.png",
    github: "https://github.com/dsvasudev19/bankingsystem.github.io",
    live: "https://dsvasudev.000webhostapp.com/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "roughAge E-Commerce",
    description: "Fresh produce delivery platform with same-day delivery service.",
    status: "shipped",
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
  status: ProjectStatus;
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
    title: "ElevateHub",
    subtitle: "AI Native Learning Management System & AI Solutions Provider",
    status: "in-development",
    overview:
      "ElevateHub is an enterprise AI-native learning management system and solutions suite designed to upskill trainees and power training programs within organizations through autonomous AI coaching, automated gap analysis, and vector-search Q&A engines.",
    features: [
      "AI Interview Coach: Interactive real-time technical interview practice with automated AI evaluation & speech feedback",
      "Skill Gap Analyzer: Dynamic competency tracking mapping trainee skills to targeted learning paths",
      "AI Resume Builder: Intelligent resume optimization tailored to specific engineering role criteria",
      "RAG Knowledge Engine: Contextual vector search knowledge base using OpenAI embeddings for instant Q&A",
      "Live Trainee Skill Graph: Real-time progress dashboard tracking competency metrics across cohorts",
      "Multi-Role Dashboard: Dedicated interfaces for trainees, trainers, and organization admins",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "React 19", "OpenAI API", "RAG Engine", "Vector DB", "WebSockets"],
    screenshots: [],
  },
  "core-platform": {
    slug: "core-platform",
    title: "CORE (AI Native Collaborative Organizational Resource Engine)",
    subtitle: "Enterprise Startup Management System — All Operations, One Interface",
    status: "shipped",
    overview:
      "An AI-native collaborative organizational resource engine built with microservices and Domain-Driven Design to manage every facet of startup operations — employees, projects, Kanban boards, communications, and resource allocation — with MCP servers bridging AI agents to platform APIs.",
    features: [
      "Microservice architecture with Domain-Driven Design for clean bounded contexts",
      "MCP servers bridging AI agents with platform APIs — natural language operations for task delegation",
      "Automated sprint planning and resource allocation through AI agent integration — 40% reduction in admin overhead",
      "Real-time WebSocket messaging using Node.js and Socket.IO with sub-100ms latency for cross-team collaboration",
    ],
    tech: ["Java", "Spring Boot", "React", "Node.js", "MCP", "WebSocket", "Docker", "Socket.IO"],
    screenshots: [],
  },
  "mcp-connector": {
    slug: "mcp-connector",
    title: "Portfolio MCP Connector",
    subtitle: "Model Context Protocol Server for AI Assistant Integration",
    status: "shipped",
    overview:
      "A custom Model Context Protocol (MCP) server that exposes Vasudev's complete engineering profile — work history, projects, skills, system design principles, and live calendar booking — as executable tools for AI agents like Claude and ChatGPT.",
    features: [
      "16+ custom MCP tools: get_profile, get_projects, get_skills, check_slots, book_appointment",
      "Connects directly with Claude custom connectors for interactive live Q&A",
      "Enables AI agents to query experience metrics and schedule meetings dynamically",
      "Built with TypeScript and Model Context Protocol SDK",
    ],
    tech: ["TypeScript", "Node.js", "Model Context Protocol", "Claude API", "JSON Schema"],
    screenshots: [],
    live: "https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Vasudev&connectorUrl=https%3A%2F%2Fai.dsvasudev.in%2Fmcp",
  },
  digischool: {
    slug: "digischool",
    title: "DigiSchool Apps",
    subtitle: "Upcoming AI-Powered Platform for Managing Whole School Operations",
    status: "shipped",
    overview:
      "An upcoming AI-powered platform for managing whole school ecosystems — staff, students, academics, attendance, payroll, and administration — across 8 independent multi-tenant microservices.",
    features: [
      "Whole-school management covering staff, student profiles, academics, attendance, and payroll",
      "8 independent microservices: attendance, grades, payroll, library, notifications, authentication, reporting, and admin",
      "AI-driven automated attendance tracking, grade analytics, and report generation",
      "JWT-based stateless authentication with MFA and granular RBAC for 6+ user roles",
    ],
    tech: ["Java", "Spring Boot 3.x", "React 19", "MySQL", "Prometheus", "Grafana", "Multi-tenant SaaS"],
    screenshots: [],
  },
  "kupa-co-investing": {
    slug: "kupa-co-investing",
    title: "Co-Investing Platform",
    subtitle: "Co-Investment Workflows & Real-Time Portfolio Tracking",
    status: "in-progress",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
