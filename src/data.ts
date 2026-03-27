export const personalInfo = {
  name: "Priyaank Sinha",
  roles: ["Full-Stack Developer", "Technical Lead", "Open Source Enthusiast"],
  bio: "I'm a seasoned Full Stack Developer and Technical Lead with 4+ years of experience in building scalable, high-performance web applications. Currently leading technical initiatives at Simlify3x Software Pvt. Ltd.",
  bioShort: "Technical leader passionate about architecting scalable solutions and building high-performance web applications. I specialize in creating scalable web applications using modern technologies like React, Next, Python and various databases. I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible.",
  birthDate: "November 25, 1992",
  location: "Bangalore, Karnataka, India",
  educationInfo: "MCA, Amity University, Noida",
  cgpa: "9.10",
  email: "priyaank.sinha025@gmail.com",
  phone: "+91-7350422112",
  socialLinks: {
    github: "https://github.com/PriyaankSinha", // Assuming from URL
    linkedin: "https://linkedin.com/in/priyaanksinha", // Assuming from URL
  },
  resumeLink: "https://drive.google.com/file/d/166iy37ovTbx-SxASBfB-QAl05wMJ6mwP/view"
};

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Happy Clients", value: "5+" }
];

export const skills = [
  {
    category: "Programming Languages",
    icon: "FaCode",
    items: [
      { name: "TypeScript", percentage: 95 },
      { name: "JavaScript", percentage: 90 },
      { name: "Python", percentage: 85 },
      { name: "C#", percentage: 80 },
      { name: "R Programming", percentage: 75 },
    ],
  },
  {
    category: "Libraries & Frameworks",
    icon: "FaGlobe",
    items: [
      { name: "React", percentage: 95 },
      { name: "Tailwind CSS", percentage: 95 },
      { name: "Next.js", percentage: 90 },
      { name: "Material UI", percentage: 90 },
      { name: "Framer Motion", percentage: 80 },
      { name: "Angular", percentage: 75 },
      { name: "Vue.js", percentage: 75 },
    ],
  },
  {
    category: "Databases",
    icon: "FaDatabase",
    items: [
      { name: "PostgreSQL", percentage: 90 },
      { name: "MySQL", percentage: 85 },
      { name: "MongoDB", percentage: 80 },
      { name: "Supabase", percentage: 80 },
    ],
  },
  {
    category: "Development Tools",
    icon: "FaTools",
    items: [
      { name: "Cursor", percentage: 95 },
      { name: "Visual Studio Code", percentage: 95 },
      { name: "Antigravity", percentage: 90 },
      { name: "Visual Studio", percentage: 85 },
      { name: ".NET Core", percentage: 80 },
      { name: "Android Studio", percentage: 75 },
      { name: "R Studio", percentage: 75 },
      { name: "MATLAB", percentage: 70 },
    ],
  },
  {
    category: "AI Tools",
    icon: "FaRobot",
    items: [
      { name: "ChatGPT", percentage: 90 },
      { name: "Claude", percentage: 85 },
      { name: "Bolt.new", percentage: 80 },
      { name: "Perplexity", percentage: 75 },
      { name: "Gemini", percentage: 70 },
      { name: "Make.com", percentage: 65 },
    ],
  },
  {
    category: "Languages",
    icon: "FaLanguage",
    items: [
      { name: "English", percentage: 95 },
      { name: "Hindi", percentage: 90 },
      { name: "Marathi", percentage: 35 },
      { name: "German", percentage: 15 },
    ],
  },
];

export const experience = [
  {
    company: "Simplify3x Software Pvt. Ltd.",
    role: "Technical Lead",
    duration: "June 2025 - Present",
    location: "Bangalore, India",
    description: "Leading technical initiatives and delivering high-quality software solutions to clients.",
    achievements: [
      "Leading technical initiatives and delivering high-quality software solutions to clients.",
      "Mentoring and guiding junior developers",
      "Collaborating with cross-functional teams to define and implement new features",
      "Optimizing application performance and reliability",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Material UI", "Tailwind CSS", "Redux", "MongoDB", "PostgreSQL"],
  },
  {
    company: "Simplify3x Software Pvt. Ltd.",
    role: "Software Developer",
    duration: "June 2023 - June 2025",
    location: "Bangalore, India",
    description: "Worked on multiple client projects including Elevance Health Care, Malaysia Airlines, and various in-house products, delivering scalable front-end solutions.",
    achievements: [
      "Created UI interface tool for testers to generate LLM queries for Q-Gen Chat Bot (Elevance Health Care)",
      "Designed and developed Timesheet application with role-based access control and approval workflows",
      "Led Resource Management (RMG) project development and team management",
      "Delivered Baggage Tracking and Food Tracking solutions for Malaysia Airlines",
      "Developed Hire3x product features including Video Resume, Typing Test, and Identity Verification"
    ],
    technologies: ["React", "NextJS", "Node.js", "Express", "Tailwind CSS", "Material UI", "Redux", "TypeScript", "PostgreSQL", "MongoDB", "JavaScript"],
  },
  {
    company: "Coforge",
    role: "Software Engineer",
    duration: "September 2021 - June 2023",
    location: "Gurugram, India",
    description: "Worked on live insurance sector projects for AXA client, focusing on Underwriting and Policy applications with full-stack development responsibilities.",
    achievements: [
      "Developed new functionality for Underwriting and Policy applications in insurance sector",
      "Implemented Angular component-based architecture for reusable UI components",
      "Designed efficient database schema, tables, and stored procedures in MySQL",
      "Developed custom conditional directives and implemented JWT authentication",
      "Used Reactive Forms, Observables, and Promises for CRUD operations"
    ],
    technologies: ["Angular", "TypeScript", "C#", "MySQL", "JWT", "Reactive Forms"],
  }
];

export const projects = [
  {
    title: "Osmosys 2.0",
    client: "AB InBev (Anheuser-Busch InBev)",
    status: "In Progress",
    duration: "3+ months",
    teamSize: "8+ members",
    description: "Leading the development and delivery of Osmosys platform solutions for AB InBev, managing cross-functional teams and ensuring enterprise-level technical excellence.",
    features: [
      "Enterprise-level platform development and delivery",
      "Cross-functional team management and leadership",
      "Client requirement analysis and technical solution design"
    ],
    technologies: ["Next.js", "SSMS SQL", "C#", "Enterprise Architecture"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Justo Verse & Justo Works",
    client: "Justo Real Fintech",
    status: "In Progress",
    duration: "4+ months",
    teamSize: "2 members",
    description: "Leading end-to-end delivery for Justo Verse and Justo Works fintech platforms, architecting scalable solutions and managing cross-functional development teams.",
    features: [
      "End-to-end fintech platform delivery",
      "Cross-functional team management and sprint planning",
      "System architecture design for performance and security"
    ],
    technologies: ["Odoo", "React Native", "Node.js", "React", "Fintech Solutions"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Human Capital Management (HCM) Platform",
    status: "In Progress",
    duration: "8+ months",
    teamSize: "6 members",
    description: "A comprehensive multi-tenant HCM platform enabling onboarding and management of multiple organisations within a single instance with role-based access control.",
    features: [
      "Multi-tenant architecture with tenant isolation",
      "Role-based access control (RBAC) implementation",
      "Custom payroll formula engine"
    ],
    technologies: ["React", "TypeScript", "Material UI", "Redux", "PostgreSQL", "React Hooks"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AITDM - LLM Query Generator",
    status: "Completed",
    duration: "3 months",
    teamSize: "1 member",
    description: "A UI interface tool for testers to generate LLM queries for Q-Gen Chat Bot product, completely automating test cases for chatbot testing.",
    features: [
      "Automated LLM query generation",
      "Integration with Q-Gen Chat Bot",
      "Complete test case automation"
    ],
    technologies: ["React", "TypeScript", "Material UI", "Redux", "MongoDB", "React Hooks"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Timesheet Management System",
    status: "Completed",
    duration: "4 months",
    teamSize: "6 members",
    description: "A comprehensive timesheet application with role-based access control, project management, and 2-step approval workflow for tracking employee working hours.",
    features: [
      "Role-based access control",
      "Project creation and employee onboarding",
      "2-step approval workflow"
    ],
    technologies: ["React", "TypeScript", "Material UI", "Redux", "PostgreSQL", "React Hooks"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Resource Management (RMG)",
    status: "Completed",
    duration: "6 months",
    teamSize: "4 members",
    description: "A resource management application for tracking and managing company resources with team collaboration features and bug tracking capabilities.",
    features: [
      "Resource allocation and tracking",
      "Team management and collaboration",
      "Bug tracking and defect management"
    ],
    technologies: ["React", "TypeScript", "Material UI", "Redux", "React Hooks"],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Malaysia Airlines - Baggage & Food Tracking",
    status: "Completed",
    duration: "4 months",
    teamSize: "1 members",
    description: "Dual tracking system for Malaysia Airlines including baggage tracking and food service tracking with real-time updates and user-friendly interfaces.",
    features: [
      "Real-time baggage tracking system",
      "Food service tracking and management",
      "Responsive design for multiple devices"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Hooks"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Hire3x - Recruitment Platform",
    status: "Completed",
    duration: "7 months",
    teamSize: "35 members",
    description: "A comprehensive recruitment platform with video resume functionality, typing tests, identity verification, and complete job progress tracking for candidates.",
    features: [
      "Video resume recording and playback",
      "Typing speed test for candidates",
      "Identity verification with ID snapshot"
    ],
    technologies: ["Vue.js", "HTML", "CSS", "Media Stream", "JavaScript"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Movie Recommender System",
    status: "Completed",
    duration: "2 months",
    teamSize: "1 member",
    description: "A hybrid movie recommendation system combining collaborative and content-based filtering with a simple GUI interface built using Python.",
    features: [
      "Hybrid recommendation algorithm",
      "Collaborative filtering implementation",
      "Content-based filtering system"
    ],
    technologies: ["Python", "Machine Learning", "GUI", "Pandas", "NumPy"],
    link: "https://github.com/PriyaankSinha/Movie-Recommendation-System-Using-ML",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Data Analysis Projects",
    status: "Completed",
    duration: "3 months",
    teamSize: "1 member",
    description: "Multiple data analysis projects including diabetes dataset analysis using R commands and rainfall data analysis for Indian cities with machine learning predictions.",
    features: [
      "Diabetes dataset analysis with ANOVA testing",
      "Machine learning prediction models",
      "Rainfall data analysis for Indian cities"
    ],
    technologies: ["R Programming", "Machine Learning", "ANOVA", "Neural Networks", "Regression Analysis"],
    link: "https://github.com/PriyaankSinha/Prediction-Analysis-using-ML",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Amity University, Noida",
    duration: "2018 - 2021",
    cgpa: "9.10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kalinga University, Kalinga University of Information Technology",
    duration: "2013 - 2016",
    cgpa: "75%",
  }
];

export const certifications = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "August 2025",
    status: "Active",
    validity: "Lifetime",
    description: "This certification delivers the detailed use case of Gen AI tools and also provides guidance on improving the prompts. This certification delivers the detailed use case of Gen AI tools and also provides guidance on improving the prompts.",
    skills: ["Generative AI Tools", "Prompt Engineering"],
    link: "https://drive.google.com/file/d/1r5lfSHII9EDuKpW_TnbO_kGES_u20FBu/view",
  },
  {
    title: "Claude 3.7",
    issuer: "Coursiv",
    date: "August 2025",
    status: "Active",
    validity: "Lifetime",
    description: "Certification demonstrating proficiency in using Claude 3.7 and other generative AI tools for various applications and use cases.",
    credentialId: "37fa6582-ea38-4cbc-bde2-792d16a20a08",
    skills: ["Generative AI Tools"],
    link: "https://drive.google.com/file/d/1xcLPyCsMbNDvZ9eXrBZB4grlN-QFlYS3/view",
  },
  {
    title: "Power BI Certificate of Completion",
    issuer: "Skill Nation",
    date: "August 2024",
    status: "Active",
    validity: "Lifetime",
    description: "Comprehensive certification covering Microsoft Power BI fundamentals, data visualization, and advanced analytics techniques for business intelligence.",
    skills: ["Microsoft Power BI", "Data Analysis"],
    link: "https://drive.google.com/file/d/1rTcAW9kr2dZxlKYrn_mA0L9wMTtFdKbd/view",
  }
];

export const publications = [
  {
    title: "A Conceptual Framework for Mitigating the Risk in eCommerce Websites",
    details: "Published in ICRITO'20 (IEEE Xplore)",
    date: "September 15, 2020",
    description: "Research paper focusing on identifying and mitigating security risks in modern e-commerce platforms using advanced authentication and AI-driven fraud detection.",
    link: "https://ieeexplore.ieee.org/document/9197827"
  }
];

export const patents = [
  {
    title: "AN INTERACTIVE HELMET CONNECTED WITH AN IGNITION SYSTEM OF A TWO-WHEELER",
    patentNo: "IN 202011054158",
    date: "December 12, 2020",
    description: "Patent application for an innovative interactive helmet system that connects with the ignition system of two-wheeler vehicles for enhanced safety and security."
  }
];

export const contactDetails = {
  email: "priyaank.sinha025@gmail.com",
  phone: "+91-7350422112",
  location: "Bangalore, Karnataka, India",
};
