import cyberAvatar from '../assets/images/rakshitha_portrait_1788874727609.jpg';
import sakuraFan from '../assets/images/cyber_sakura_fan_1788875554639.jpg';
import sakuraBranch from '../assets/images/sakura_branch_glow_1788864983987.jpg';
import trafficFlowImg from '../assets/images/traffic_flow_ai_1788865004889.jpg';
import heritageMapImg from '../assets/images/heritage_map_web_1788865025147.jpg';
import urlShortenerImg from '../assets/images/url_shortener_app_1788866071969.jpg';
import noticeBoardImg from '../assets/images/notice_board_app_1788866090413.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  problemSolved: string;
  bullets: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status: 'Completed' | 'Production' | 'Deployed';
}

export interface SkillItem {
  name: string;
  category: string;
  proficiency: 'Comfortable' | 'Working Knowledge' | 'Exploring' | 'Learning';
  iconName: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  organization: string;
  year: string;
  description: string;
  highlight?: boolean;
  projectName?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  timeline: string;
  score: string;
  status: string;
  description: string;
  focusAreas: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  skills: string[];
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

export const PORTFOLIO_OWNER = {
  name: "Rakshitha HK",
  phone: "+91 8660630178",
  role: "Information Science & Engineering Student | Full-Stack & AI Developer",
  academicStatus: "Information Science Engineering Student at SVIT (CGPA 8.77)",
  cgpa: "8.77",
  tagline: "Information Science Engineering student with hands-on experience across the full SDLC — building backend systems, REST APIs, full-stack web applications, and AI pipelines with an unwavering focus on code quality and debugging.",
  summary: "Information Science Engineering student (CGPA 8.77) with hands-on experience across the full software development lifecycle: requirements, design, coding, testing, debugging, and deployment. Built and validated backend systems, REST APIs, and full-stack applications independently and in teams, with a consistent focus on code quality, edge-case handling, and root-cause debugging. Proficient in Python, Java, C, and JavaScript with working knowledge of SQL/NoSQL databases, Git-based collaborative workflows, and Agile practices.",
  email: "rakshithahk127@gmail.com",
  github: "https://github.com/rakshithahk",
  linkedin: "https://www.linkedin.com/in/rakshitha-h-k-b1a2ba362/",
  location: "Bengaluru, India",
  college: "Sai Vidya Institute of Technology (SVIT)",
  puCollege: "Sujala PU College",
  assets: {
    avatar: cyberAvatar,
    fan: sakuraFan,
    branch: sakuraBranch,
  }
};

export const STATS = [
  { value: "8.77", label: "Engineering CGPA", sub: "Department Rank Holder" },
  { value: "93.3%", label: "Pre-University (PCMB)", sub: "Sujala PU College" },
  { value: "Full SDLC", label: "Software Engineering", sub: "Design, Test, Deploy" },
  { value: "Fest & Club", label: "Campus Leadership", sub: "Coordinator & NSS" }
];

export const TECH_MARQUEE = [
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Node.js", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "TensorFlow", category: "AI / ML" },
  { name: "YOLO (Custom)", category: "Vision AI" },
  { name: "LSTM / GNN", category: "Deep Learning" },
  { name: "HTML5 & CSS3", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Docker", category: "DevOps" },
  { name: "Vercel", category: "Deployment" },
  { name: "REST APIs", category: "Architecture" },
  { name: "Agile / Scrum", category: "Methodology" }
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "Python", category: "languages", proficiency: "Comfortable", iconName: "Terminal", description: "Backend APIs with Flask, data processing with Pandas, ML model training" },
      { name: "Java", category: "languages", proficiency: "Comfortable", iconName: "Cpu", description: "Object-Oriented Programming (OOP), Data Structures & algorithmic problem solving" },
      { name: "JavaScript", category: "languages", proficiency: "Comfortable", iconName: "Code2", description: "Modern ES6+, asynchronous DOM scripting, AJAX, Node.js REST services" },
      { name: "C", category: "languages", proficiency: "Working Knowledge", iconName: "Terminal", description: "Memory management fundamentals, pointers, algorithms, procedural logic" },
      { name: "PHP", category: "languages", proficiency: "Working Knowledge", iconName: "Server", description: "Server-side web scripting, session handling, RBAC, MySQL integration" },
      { name: "HTML5 & CSS3", category: "languages", proficiency: "Comfortable", iconName: "Layout", description: "Semantic markup, CSS Grid, Flexbox, responsive design, cross-browser compatibility" }
    ] as SkillItem[]
  },
  {
    id: "backend",
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", category: "backend", proficiency: "Comfortable", iconName: "Server", description: "REST backend architecture, route controllers, error handling & async middleware" },
      { name: "Flask", category: "backend", proficiency: "Working Knowledge", iconName: "Zap", description: "Lightweight Python microservices, model inference serving, REST endpoints" },
      { name: "PHP (Server-side)", category: "backend", proficiency: "Working Knowledge", iconName: "Server", description: "Session-based authentication, role-aware access control & backend routing" },
      { name: "MySQL", category: "backend", proficiency: "Comfortable", iconName: "Database", description: "Normalized schemas, CRUD queries, parameterized security & indexing" },
      { name: "MongoDB", category: "backend", proficiency: "Comfortable", iconName: "Database", description: "Document schemas, Mongoose models, aggregation & NoSQL persistence" },
      { name: "SQL (PostgreSQL-compatible)", category: "backend", proficiency: "Working Knowledge", iconName: "Database", description: "Relational queries, JOINs, data integrity constraints & transactions" }
    ] as SkillItem[]
  },
  {
    id: "frontend",
    title: "Frontend & Web Technologies",
    skills: [
      { name: "HTML5 & CSS3", category: "frontend", proficiency: "Comfortable", iconName: "Layout", description: "Accessible markup, typography, media queries, CSS custom properties" },
      { name: "Tailwind CSS", category: "frontend", proficiency: "Comfortable", iconName: "Palette", description: "Utility-first design systems, responsive prefixes, custom themes & UI tokens" },
      { name: "JavaScript / ES6+", category: "frontend", proficiency: "Comfortable", iconName: "FileCode", description: "Event loop, fetch/async promises, DOM manipulation, client state" },
      { name: "Responsive Design", category: "frontend", proficiency: "Comfortable", iconName: "Layout", description: "Mobile-first layouts, fluid grids, cross-device testing & viewport tuning" },
      { name: "AJAX & jQuery", category: "frontend", proficiency: "Working Knowledge", iconName: "Zap", description: "Asynchronous background requests, seamless page updates without reload" }
    ] as SkillItem[]
  },
  {
    id: "aiml",
    title: "Data & Machine Learning",
    skills: [
      { name: "Pandas", category: "aiml", proficiency: "Comfortable", iconName: "Brain", description: "Data cleaning, feature transformation, tabular analysis & metrics aggregation" },
      { name: "TensorFlow", category: "aiml", proficiency: "Working Knowledge", iconName: "Sparkles", description: "Neural network layers, training loops, evaluation & loss curve monitoring" },
      { name: "YOLO (Custom Fine-tuning)", category: "aiml", proficiency: "Working Knowledge", iconName: "Eye", description: "Object detection, dataset labeling, multi-class vehicle inference & edge tuning" },
      { name: "LSTM / GNN", category: "aiml", proficiency: "Exploring", iconName: "Brain", description: "Sequential traffic volume forecasting and graph-based network simulations" },
      { name: "Power BI & Excel", category: "aiml", proficiency: "Comfortable", iconName: "BookOpen", description: "Analytical reporting, KPI visualization dashboards & data presentation" }
    ] as SkillItem[]
  },
  {
    id: "software-dev",
    title: "Software Engineering & Practices",
    skills: [
      { name: "Object-Oriented Programming (OOP)", category: "software-dev", proficiency: "Comfortable", iconName: "Cpu", description: "Encapsulation, inheritance, polymorphism, abstraction & clean module design" },
      { name: "Data Structures & Algorithms", category: "software-dev", proficiency: "Comfortable", iconName: "Code2", description: "Arrays, linked lists, trees, sorting, searching, hashing & time complexity" },
      { name: "REST API Design", category: "software-dev", proficiency: "Comfortable", iconName: "Server", description: "Resource endpoints, HTTP verbs, status codes, payload contracts & pagination" },
      { name: "Unit Testing & Debugging", category: "software-dev", proficiency: "Working Knowledge", iconName: "Zap", description: "Edge-case reproduction, breakpoint analysis, root-cause debugging & test cases" },
      { name: "Software Development Lifecycle (SDLC)", category: "software-dev", proficiency: "Working Knowledge", iconName: "GitBranch", description: "Requirements gathering, architectural design, coding, validation & deployment" }
    ] as SkillItem[]
  },
  {
    id: "tools",
    title: "Tools & Methodologies",
    skills: [
      { name: "Git & GitHub", category: "tools", proficiency: "Comfortable", iconName: "Github", description: "Branch-based collaboration, code reviews, PR workflows & merge strategies" },
      { name: "Agile / Scrum", category: "tools", proficiency: "Working Knowledge", iconName: "GitBranch", description: "Iterative sprints, sprint planning, standups & incremental milestone delivery" },
      { name: "Docker", category: "tools", proficiency: "Exploring", iconName: "Server", description: "Container concepts, Dockerfile definitions & isolated runtime environments" },
      { name: "CI/CD Concepts", category: "tools", proficiency: "Learning", iconName: "Cloud", description: "Automated test pipelines, GitHub Actions, continuous deployment workflows" },
      { name: "Vercel", category: "tools", proficiency: "Comfortable", iconName: "Cloud", description: "Serverless deployments, environment variable management & preview URLs" },
      { name: "XAMPP", category: "tools", proficiency: "Comfortable", iconName: "Server", description: "Local Apache & MySQL server environment for PHP web application testing" }
    ] as SkillItem[]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "adaptive-traffic-control",
    title: "Traffic Flow Optimizer",
    subtitle: "AI-Based Predictive Modelling & Adaptive Signal Control",
    category: "AI / ML",
    shortDescription: "An end-to-end intelligent traffic monitoring pipeline using custom fine-tuned YOLO object detection, LSTM/GNN prediction, and reinforcement learning optimization to reduce urban congestion.",
    problemSolved: "Fixed-time traffic signals fail to adapt to dynamic road conditions, causing severe congestion bottlenecks. This system uses real-time computer vision and machine learning predictions to dynamically calculate green-light durations and minimize vehicle delays.",
    bullets: [
      "Collaborated with a cross-functional team of 4 through the full development lifecycle from requirements and design to implementation and validation to build a production style traffic monitoring pipeline.",
      "Designed, developed, and unit tested a custom YOLO object-detection module to classify multi-class vehicles in real time, iteratively debugging misclassification issues to improve detection accuracy.",
      "Integrated LSTM/GNN prediction with reinforcement learning optimization; performed root-cause analysis on simulation discrepancies to tune dynamic green time splits and reduce simulated delays vs. fixed time baselines.",
      "Built and tested RESTful API endpoints in Flask, troubleshooting integration issues between model inference and the monitoring dashboard.",
      "Maintained shared codebase on GitHub using branch-based collaboration and peer code reviews to improve code quality and maintainability."
    ],
    technologies: ["Python", "Flask", "TensorFlow", "Pandas", "YOLO (Custom)", "LSTM/GNN", "Git"],
    image: trafficFlowImg,
    githubUrl: "https://github.com/RakshithaHK/Traffic-Flow-Optimizer",
    liveUrl: "#",
    featured: true,
    status: "Completed"
  },
  {
    id: "herimap",
    title: "HeriMap",
    subtitle: "Interactive Cultural Heritage & Geolocation Platform",
    category: "Full Stack",
    shortDescription: "An interactive cultural heritage platform providing rich geospatial exploration of historical monuments, architectural heritage, and cultural landmarks with verified historical contexts.",
    problemSolved: "Traditional heritage documentation is fragmented, lacking interactive spatial exploration and community engagement. HeriMap bridges history and modern web tech with interactive maps, spatial search, monument clustering, and multimedia cultural timelines.",
    bullets: [
      "Engineered an interactive mapping frontend with custom vector markers, clustering for dense historical hubs, and responsive category-based query filtering.",
      "Architected RESTful API endpoints for spatial queries, monument categorization, photo gallery uploads, and community review validations.",
      "Structured a normalized database schema with indexed geospatial coordinates (latitude/longitude) for high-performance proximity searches.",
      "Implemented responsive glassmorphic UI with audio guide walkthroughs, bookmarking, and rich historical summaries optimized for cultural tourists."
    ],
    technologies: ["React", "JavaScript", "Leaflet / Maps API", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"],
    image: heritageMapImg,
    githubUrl: "https://github.com/RakshithaHK/india-heritage-explorer",
    liveUrl: "#",
    featured: true,
    status: "Completed"
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    subtitle: "Full-Stack Web Application",
    category: "Full Stack",
    shortDescription: "A robust, high-performance URL shortening web application featuring a Node.js + MongoDB REST backend, fast redirection, and detailed click analytics.",
    problemSolved: "Long, unwieldy URLs are prone to breaking and impossible to track. This service generates persistent, customized short links, handles edge-case validations, and captures redirect analytics.",
    bullets: [
      "Designed and developed a Node.js + MongoDB REST backend for URL creation, redirection, and analytics, following structured coding and testing practices.",
      "Debugged and resolved edge-case failures (link expiry, duplicate slugs, invalid input) by implementing appropriate HTTP status codes and server-side validation.",
      "Deployed to Vercel with environment-based configuration; conducted end-to-end testing across client → API → database → redirect flow before release."
    ],
    technologies: ["Node.js", "MongoDB", "JavaScript", "HTML5", "CSS3", "Vercel", "REST APIs"],
    image: urlShortenerImg,
    githubUrl: "https://github.com/RakshithaHK/Cloud-URL-Shortener-Development-",
    liveUrl: "#",
    featured: true,
    status: "Deployed"
  },
  {
    id: "online-notice-board",
    title: "Online Notice Board",
    subtitle: "Web Application with Auth & CRUD",
    category: "Web Application",
    shortDescription: "A secure department communication platform built with PHP and MySQL featuring session-based authentication, role-aware access control (RBAC), and full CRUD operations.",
    problemSolved: "Physical bulletin boards lack auditability and cannot enforce role-based announcement privileges. This web application offers centralized notice management, parameterized security against SQL injection, and asynchronous AJAX frontend updates.",
    bullets: [
      "Built a PHP server-side application with session-based authentication and role-aware access control, documenting module design and access control logic.",
      "Designed a normalized MySQL schema and implemented full CRUD operations using parameterized queries; identified and fixed SQL injection vulnerabilities through security-focused testing.",
      "Delivered and validated a responsive frontend integrated with the PHP backend via form submissions and AJAX calls."
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "AJAX", "XAMPP"],
    image: noticeBoardImg,
    githubUrl: "https://github.com/RakshithaHK/Noticeboard",
    liveUrl: "#",
    featured: true,
    status: "Completed"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "svit-be",
    degree: "Bachelor of Engineering in Information Science and Engineering",
    institution: "Sai Vidya Institute of Technology (SVIT)",
    timeline: "2023 – Present",
    score: "CGPA: 8.77",
    status: "Department Level Rank Holder",
    description: "Rigorous engineering curriculum covering the entire software development lifecycle, core computer science principles, database design, and intelligent systems.",
    focusAreas: [
      "Object-Oriented Programming (OOP) & Data Structures",
      "Database Management Systems (RDBMS & SQL)",
      "REST API Architecture & Web Development",
      "Software Testing, Debugging & SDLC Practices"
    ]
  },
  {
    id: "sujala-pu",
    degree: "Pre-University Course (PCMB)",
    institution: "Sujala PU College",
    timeline: "2023",
    score: "Score: 93.3%",
    status: "Graduated with Distinction",
    description: "Comprehensive foundation in Physics, Chemistry, Mathematics, and Biology with high academic distinction and mathematical analytical rigor.",
    focusAreas: [
      "Advanced Mathematics & Calculus",
      "Physics & Analytical Problem Solving",
      "Logical Deduction & Computational Thinking",
      "Academic Excellence (93.3% Aggregate)"
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "dept-rank",
    title: "Department Level Rank Holder",
    award: "Rank Holder (CGPA 8.77)",
    organization: "Dept. of Information Science & Engineering, SVIT",
    year: "2023 – Present",
    description: "Maintained exceptional academic standing (CGPA 8.77) through rigorous conceptual mastery in algorithms, software systems, and engineering mathematics.",
    highlight: true
  },
  {
    id: "sanchalana-coordinator",
    title: "Sanchalana Cultural Fest Coordinator",
    award: "Event Coordinator",
    organization: "Sai Vidya Institute of Technology",
    year: "2024",
    description: "Led cross-team coordination for a department-wide cultural event, managing student committees, logistics, schedule planning, and stage operations.",
    highlight: true
  },
  {
    id: "hostel-placement-coordinator",
    title: "Hostel & Student Placement Coordinator",
    award: "Student Coordinator",
    organization: "SVIT Administration",
    year: "2024 – Present",
    description: "Acted as key liaison between the student body and college administration, facilitating communications, student welfare, and placement outreach drives.",
    highlight: true
  },
  {
    id: "ise-club-nss",
    title: "Member — ISE Club & NSS",
    award: "Active Core Member",
    organization: "Department of ISE & National Service Scheme",
    year: "Active",
    description: "Actively contributing to technical workshops, coding meetups, peer mentoring sessions, and community service social initiatives.",
    highlight: false
  },
  {
    id: "sih-hackathon",
    title: "Smart India Hackathon (SIH)",
    award: "Participant",
    organization: "Ministry of Education & AICTE",
    year: "2024",
    description: "Participated in India's flagship nationwide innovation hackathon, collaborating on technology solutions addressing real-world software and civic challenges.",
    highlight: true
  },
  {
    id: "mini-project-expo",
    title: "Mini Project Expo",
    award: "Second Runner-Up",
    organization: "SVIT Engineering Exhibition",
    year: "2024",
    projectName: "Traffic Flow Optimizer",
    description: "Awarded Second Runner-Up for demonstrating 'Traffic Flow Optimizer' — a real-time intelligent traffic management and adaptive signal control prototype evaluated on technical execution, innovation, and real-world applicability.",
    highlight: true
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-1",
    name: "Python & Data Structures",
    issuer: "Technical Foundations",
    year: "2024",
    skills: ["Python", "Data Structures", "OOP", "Debugging"],
    isPlaceholder: false
  },
  {
    id: "cert-2",
    name: "Full-Stack Web Development",
    issuer: "Software Engineering",
    year: "2024",
    skills: ["Node.js", "REST APIs", "MongoDB", "MySQL"],
    isPlaceholder: false
  },
  {
    id: "cert-3",
    name: "Foundations of AI / Machine Learning",
    issuer: "Intelligent Systems",
    year: "2024",
    skills: ["TensorFlow", "YOLO", "Computer Vision", "Pandas"],
    isPlaceholder: false
  }
];

export const LEARNING_JOURNEY: Milestone[] = [
  {
    year: "2023",
    title: "Pre-University Distinction & Engineering Matriculation",
    category: "Milestone",
    description: "Graduated Sujala PU College with 93.3% in PCMB, joining Sai Vidya Institute of Technology in Information Science & Engineering.",
    technologies: ["Mathematics", "Physics", "Analytical Problem Solving"]
  },
  {
    year: "2023 – 2024",
    title: "Programming Core & OOP Foundations",
    category: "Coding",
    description: "Mastered Python, Java, and C with heavy focus on Object-Oriented Programming, Data Structures, memory fundamentals, and algorithmic efficiency.",
    technologies: ["Python", "Java", "C", "Data Structures", "OOP"]
  },
  {
    year: "2024",
    title: "Full-Stack Development & Database Systems",
    category: "Web",
    description: "Engineered production-style web applications: URL Shortener using Node.js + MongoDB, and Online Notice Board with PHP + MySQL, implementing auth and edge-case testing.",
    technologies: ["Node.js", "MongoDB", "PHP", "MySQL", "Vercel", "AJAX"]
  },
  {
    year: "2024",
    title: "Traffic Flow Optimizer (AI & Computer Vision)",
    category: "AI / ML",
    description: "Collaborated on an end-to-end traffic management solution using custom fine-tuned YOLO, LSTM/GNN prediction, and Flask REST APIs.",
    technologies: ["YOLO", "TensorFlow", "Flask", "Pandas", "Git"]
  },
  {
    year: "2024 – Present",
    title: "Department Rank & Campus Leadership",
    category: "Award",
    description: "Recognized as Department Level Rank Holder (CGPA 8.77); served as Sanchalana Fest Coordinator, Student Placement Coordinator, and Hostel Coordinator.",
    technologies: ["Leadership", "Cross-Team Coordination", "Academic Rigor"]
  }
];
