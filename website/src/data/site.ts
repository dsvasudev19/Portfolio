export const site = {
  name: "Vasudev Darse Shikari",
  brand: "Vasu{.dev}",
  location: "Hyderabad, Telangana, India",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dsvasudev.in",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-PS3PQ268",

  hero: {
    eyebrow: "Full-Stack Engineer & Agentic AI Specialist",
    headline: ["Your idea. Shipped as", "production software."],
    description:
      "I build full-stack platforms and agentic AI tooling for startups — from architecture to launch.",
    stats: [
      { label: "Systems Deployed", value: "11+" },
      { label: "Companies", value: "3" },
      { label: "Availability", value: "Open for Engagements", highlight: true },
    ],
  },

  roles: [
    "Java Full Stack Engineering",
    "MERN Stack Development",
    "Agentic AI & MCP Frameworks",
    "Startup 0-to-1 MVP Builder",
    "Freelance Software Engineer",
  ],

  about: {
    kicker: "01 / About",
    lead: "I work at the intersection of the code and the customer.",
    bio: "Full-stack engineer with 2+ years of production experience shipping enterprise systems across FinTech, EdTech, and SaaS. I help founders and engineering teams turn ambitious product visions into high-performance, production-ready software. Currently architecting co-investment platforms at Kupa Inc and available for select technical engagements.",
    facts: [
      { label: "ROLE", value: "Full-Stack Engineer" },
      { label: "NOW", value: "Kupa Inc" },
      { label: "BUILDING", value: "ElevateHub" },
      { label: "EDUCATION", value: "B.Tech CSE" },
    ],
  },

  resume: "/assets/Darse_Shikari_Vasudev_Resume.pdf",

  social: {
    github: "https://github.com/dsvasudev19",
    linkedin: "https://www.linkedin.com/in/darseshikarivasudev/",
    instagram: "https://www.instagram.com/ds.vasudev/",
    whatsapp:
      "https://wa.me/+918328203617?text=Hello%2C%20I%20would%20like%20more%20information%20about%20your%20services.",
    email: "mailto:vasudevds1729@gmail.com",
  },

  contact: {
    location: "Hyderabad, Telangana, India",
    phone: "+91 8328203617",
    email: "vasudevds1729@gmail.com",
    formspree: "https://formspree.io/f/xnnqznyr",
  },

  nav: [
    { label: "About", href: "/#about" },
    { label: "Agentic AI", href: "/#agentic-ai" },
    // { label: "Solutions", href: "/solutions" }, // TODO: re-enable when ready to launch
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Work", href: "/#works" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const mcp = {
  name: "Vasudev MCP",
  url: "https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Vasudev&connectorUrl=https%3A%2F%2Fvasudev-claude.vercel.app%2Fclaude-connector",
  tagline: "Talk to my profile through the Model Context Protocol",
  description:
    "A custom Model Context Protocol (MCP) server exposing my engineering profile, system design principles, and live calendar booking as callable tools for AI agents like Claude & ChatGPT.",
  tools: [
    { name: "get_profile", description: "Core identity, headline, and summary" },
    { name: "get_bio", description: "Extended narrative background" },
    { name: "get_experience", description: "Work history with roles and impact" },
    { name: "get_projects", description: "Full project portfolio" },
    { name: "get_project_detail", description: "Deep-dive on a single project" },
    { name: "get_project_deep_dive", description: "Architecture-level project breakdown" },
    { name: "get_skills", description: "Skills grouped by category and depth" },
    { name: "get_tech_stack", description: "Languages, frameworks, and tools used" },
    { name: "get_system_design", description: "System design decisions and trade-offs" },
    { name: "get_interview_qa", description: "Pre-answered technical interview questions" },
    { name: "get_current_focus", description: "What I'm actively learning or building" },
    { name: "get_work_preferences", description: "Role, team, and work-style fit" },
    { name: "get_contact", description: "Ways to reach me" },
    { name: "get_availability_status", description: "Current open-to-work status" },
    { name: "check_slots", description: "Open meeting slots on my calendar" },
    { name: "book_appointment", description: "Schedules a call directly from the chat" },
  ],
};

export const services = [
  {
    title: "Agentic AI & MCP Servers",
    description:
      "Designing Model Context Protocol servers and tool schemas that let LLM agents like Claude query real data and take real actions — not just chat.",
    icon: "agent" as const,
    accent: "lime" as const,
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end product engineering across Java/Spring Boot and Node/TypeScript backends with React front ends — built to scale, not just to demo.",
    icon: "code" as const,
    accent: "blue" as const,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps with React Native, plus automated release pipelines to the Play Store and App Store via GitHub Actions.",
    icon: "mobile" as const,
    accent: "coral" as const,
  },
  {
    title: "API & Systems Design",
    description:
      "Robust, secure RESTful APIs and microservices — RBAC, JWT auth, idempotent payment flows, and domain-driven service boundaries.",
    icon: "api" as const,
    accent: "ink" as const,
  },
];

export const agenticSkills = [
  { name: "Claude / Anthropic API", icon: "brain" as const },
  { name: "Model Context Protocol", icon: "plug" as const },
  { name: "Agentic Workflows", icon: "workflow" as const },
  { name: "Tool / Function Calling", icon: "wrench" as const },
  { name: "Prompt Engineering", icon: "sparkles" as const },
  { name: "OpenAI API", icon: "bolt" as const },
  { name: "RAG & Vector Search", icon: "database" as const },
  { name: "LLM Orchestration", icon: "layers" as const },
];

export const skillGroups = [
  {
    key: "agentic",
    label: "AI & Agentic Stack",
    items: [
      "Model Context Protocol",
      "Claude / Anthropic API",
      "OpenAI API",
      "Agentic Workflows",
      "Tool Calling",
      "RAG & Vector Search",
      "Prompt Engineering",
      "LLM Orchestration",
    ],
  },
  {
    key: "languages",
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "SQL", "HTML5 / CSS3", "C / C++"],
  },
  {
    key: "frontend",
    label: "Frontend",
    items: ["React.js", "Next.js", "Angular", "React Native", "Tailwind CSS", "TanStack Query", "Bootstrap"],
  },
  {
    key: "backend",
    label: "Backend",
    items: ["Spring Boot", "Node.js", "Express.js", "Microservices", "Spring Security", "Socket.IO", "REST APIs"],
  },
  {
    key: "data",
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
  },
  {
    key: "devops",
    label: "DevOps & Cloud",
    items: ["Docker", "GitHub Actions", "AWS", "Play Store / App Store", "Vercel", "Netlify"],
  },
  {
    key: "observability",
    label: "Observability",
    items: ["Prometheus", "Grafana", "Loki"],
  },
  {
    key: "concepts",
    label: "Architecture & Concepts",
    items: [
      "Domain-Driven Design",
      "Microservice Architecture",
      "Multi-tenant SaaS",
      "System Design (HLD + LLD)",
      "RBAC",
      "JWT Auth",
      "Event-Driven Architecture",
      "Idempotent Payments",
    ],
  },
];

export const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

export const experience = [
  {
    title: "Full Stack Engineer",
    company: "Kupa Inc",
    period: "Dec 2025 — Present",
    status: "Current",
    summary:
      "Architecting a Co-Investing platform for high-net-worth investors — co-investment workflows, real-time portfolio tracking, and third-party financial integrations.",
    highlights: [
      "Architecting a Co-Investing platform using Node.js and TypeScript to support co-investment workflows and real-time portfolio tracking across multiple asset classes",
      "Designing and delivering scalable RESTful APIs managing secure financial data flows, investment transactions, and real-time portfolio updates with strict data integrity guarantees",
      "Automated mobile release pipelines to Google Play Store and Apple App Store via GitHub Actions CI/CD — reducing manual deployment effort by 80% and achieving consistent release cycles",
    ],
    stack: ["Node.js", "TypeScript", "React", "PostgreSQL", "Docker", "GitHub Actions"],
    accent: "lime" as const,
  },
  {
    title: "Software Developer",
    company: "UST",
    period: "Sep 2024 — Dec 2025",
    status: "Previous",
    summary:
      "Built low-code application frameworks, MCP servers integrated with GitHub Copilot, Spring Boot microservices, and reactive Angular UIs for enterprise products.",
    highlights: [
      "Engineered a low-code application framework using JSON-based configuration structures — reducing development time by 25% and eliminating significant boilerplate across enterprise projects",
      "Built and deployed MCP servers integrated with GitHub Copilot, enabling AI-assisted development workflows that reduced coding errors by 15% and accelerated feature delivery",
      "Developed RESTful APIs and Spring Boot microservices handling 1,000+ daily requests with 100% data integrity and optimised query execution",
    ],
    stack: ["Java", "Spring Boot", "Angular", "REST APIs", "Microservices", "MCP", "GitHub Copilot"],
    accent: "blue" as const,
  },
  {
    title: "Full Stack Developer",
    company: "Spack Solutions Pvt Ltd",
    period: "Jan 2024 — Sep 2024",
    status: "Previous",
    summary:
      "Led end-to-end development of secure web and mobile applications using the MERN stack, including an EV charge station management system.",
    highlights: [
      "Led end-to-end development of an EV charge station management system using Node.js and React — enabling real-time charger monitoring, session tracking, and transaction management across 50+ stations",
      "Built a secure MERN-stack application with multi-layered JWT authentication and RBAC, protecting sensitive user data for 500+ users with zero breaches over 12 months",
      "Delivered customisable CMS solutions using React and MongoDB with modular component architecture — improving internal content publishing speed by 40%",
    ],
    stack: ["Node.js", "React", "MongoDB", "MySQL", "Express.js", "JWT", "React Native"],
    accent: "coral" as const,
  },
];
