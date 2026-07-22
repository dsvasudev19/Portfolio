export const site = {
  name: "Vasudev Darse Shikari",
  brand: "Vasu{.dev}",
  location: "Hyderabad, Telangana, India",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dsvasudev.netlify.app",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-N6W7M2ZB",

  hero: {
    eyebrow: "Full Stack Engineer — Agentic AI · MCP Servers · RAG",
    headline: ["I build", "Agentic AI,", "MCP servers,", "and robust APIs."],
    description:
      "I'm Vasudev — a Full Stack Engineer specializing in Agentic AI, custom MCP servers, and RAG pipelines. I build secure backends on Java/Spring Boot and Node/TypeScript, design tools that let AI agents take real actions on production systems, and design robust architectures that power autonomous execution.",
    stats: [
      { label: "Projects Shipped", value: "11+" },
      { label: "Companies", value: "3" },
      { label: "Status", value: "Open to Work", highlight: true },
    ],
  },

  roles: [
    "Full Stack Engineering",
    "Agentic AI & MCP Servers",
    "System Design (HLD + LLD)",
    "Java & Spring Boot",
    "Node.js & TypeScript",
  ],

  about: {
    kicker: "01 / About",
    lead: "I work at the intersection of the code and the customer.",
    paragraphs: [
      "I'm a Full Stack Engineer based in Hyderabad with 2+ years of production experience across FinTech, EdTech, and SaaS. I write Java and Spring Boot for enterprise microservice systems, Node.js and TypeScript for SaaS and startup-scale backends, and React for the front end.",
      "I've containerised services with Docker, automated mobile releases to the Play Store and App Store via GitHub Actions, and built MCP servers that bridge AI agents with real platform APIs — this portfolio's chat connector is one of them.",
      "Currently I'm at Kupa Inc, architecting a co-investing platform for high-net-worth investors. On the side I'm building ElevateHub, an AI-first upskilling platform, and preparing deeply on system design and domain-driven design.",
    ],
    facts: [
      { label: "Now", value: "Full Stack Engineer @ Kupa Inc" },
      { label: "Building", value: "ElevateHub — AI upskilling platform" },
      { label: "Education", value: "B.Tech CSE, Malla Reddy Engineering College" },
      { label: "Certified", value: "Microsoft Azure Fundamentals (AZ-900)" },
    ],
  },

  resume: "/assets/Darse_Shikari_Vasudev_Resume.pdf",

  social: {
    github: "https://github.com/dsvasudev19",
    linkedin: "https://www.linkedin.com/in/darseshikarivasudev/",
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
    "I built a personal MCP server that exposes my entire profile — experience, projects, skills, and even my calendar — as callable tools for AI agents like Claude. Instead of scraping a resume, an agent can query it directly and hold a real, up-to-date conversation about my work.",
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
