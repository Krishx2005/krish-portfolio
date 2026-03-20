export const personalInfo = {
  name: "Krish P. Patel",
  title: "Data & Full-Stack Developer",
  bio: "Statistics student at Ohio State. I like building dashboards, data pipelines, and full-stack apps — mostly with Python, SQL, and React.",
  email: "krishx2005@gmail.com",
  phone: "(330) 980-8962",
  github: "https://github.com/Krishx2005",
  linkedin: "https://www.linkedin.com/in/krishpatel2005/",
  roles: ["Data Analyst", "Problem Solver", "Python Developer", "Dashboard Builder"],
};

export const projects = [
  {
    title: "FinLens",
    subtitle: "Financial Disparity Analytics",
    tech: ["Python", "FastAPI", "React", "Claude API", "scikit-learn", "SQLite"],
    description:
      "Alternative credit scoring engine analyzing 4 federal datasets (CFPB, HMDA, Census ACS, FDIC) across 3,222 US counties. Built a RandomForest model to surface geographic lending disparities, with an AI-powered natural language SQL interface and interactive BI dashboard.",
    link: "https://finlens-credit-gap.vercel.app",
    github: "https://github.com/Krishx2005/finlens-credit-gap",
    featured: true,
  },
  {
    title: "RuralYield FinOps",
    subtitle: "Toledo Hackathon 2026 — Overall Winner",
    tech: ["Python", "FastAPI", "React", "AWS Bedrock", "ElevenLabs", "Jaseci"],
    description:
      "Autonomous micro-investment platform connecting rural farmers with community investors via AI-powered Local Innovation Bonds. 8-step Jaseci agent orchestrates AWS Bedrock risk scoring, Llama 3 compliance checking via Featherless AI, and ElevenLabs voice UX.",
    link: "https://rural-yield.vercel.app",
    github: "https://github.com/Toledo-Hackathon/RuralYield",
    featured: true,
  },
  {
    title: "NBA Shot Quality Engine",
    tech: ["Python", "dbt", "BigQuery", "Airflow", "FastAPI", "React"],
    description:
      "Full-stack analytics pipeline that scores 219k+ NBA shot attempts from the 2024-25 season using a custom Shot Quality Score metric. Ingests data from the NBA API, transforms it through dbt in BigQuery, and serves it via FastAPI to a React dashboard with sortable stat tables, team defense rankings, and per-player scatter plots.",
    link: "https://nba-analytics-mu.vercel.app",
    github: "https://github.com/Krishx2005/nba-analytics",
    featured: true,
  },
  {
    title: "Sales Performance & Customer Intelligence Hub",
    tech: ["Python", "R", "Node.js", "Express", "SQLite", "React", "Tailwind CSS", "Power BI", "Tableau"],
    description:
      "Full-stack dashboard built on the Superstore dataset (9,994 transactions). Python ETL pipeline handles RFM segmentation and churn scoring, Node.js serves the API, React renders everything. Includes linear regression forecasting and Power BI/Tableau exports.",
    link: "https://sales-intelligence-hub-2gc7.vercel.app",
    github: "https://github.com/Krishx2005/sales-intelligence-hub",
    featured: true,
  },
  {
    title: "KrishAI ⚽",
    tech: ["FastAPI", "PostgreSQL", "Claude AI", "React", "Recharts"],
    description:
      "Natural language to SQL analytics tool for FC 25 player data. Ask questions in plain English about 18,000+ players and get instant results with auto-generated charts.",
    link: "https://krishai-ruby.vercel.app",
    github: "https://github.com/Krishx2005/krishai",
    featured: true,
  },
  {
    title: "Netflix Content Analytics Dashboard",
    tech: ["React", "D3.js", "Node.js", "Express", "SQLite", "Tailwind CSS"],
    description:
      "Interactive dashboard exploring Netflix's content library through 7 chapters. D3 choropleth map, force-directed network graph, animated charts, and a REST API serving 800+ titles from SQLite.",
    link: "https://netflix-content-analytics.vercel.app",
    github: "https://github.com/Krishx2005/netflix-content-analytics",
    featured: true,
  },
  {
    title: "Final Exam Search",
    tech: ["Python", "SQL", "Spring Boot", "React.js", "PostgreSQL"],
    description:
      "Exam scheduling app with a Spring Boot backend and React frontend. PostgreSQL for storage, Python scripts for analyzing usage patterns across 100+ users.",
  },
  {
    title: "Hotel Guests Organizer",
    tech: ["Java", "SQL", "AWS", "Docker"],
    description:
      "Guest records system managing 5,000+ entries across multiple businesses. Java backend, SQL queries for reporting, deployed with AWS and Docker.",
  },
  {
    title: "Full Stack Crypto Swapping Platform",
    tech: ["Solidity", "Web3", "Python", "R"],
    description:
      "Token swapping platform with Solidity smart contracts and Web3 integration. Added analytics dashboards to track transaction volume and platform metrics.",
  },
];

export const experience = [
  {
    company: "PoolSwap.io",
    role: "Founder",
    date: "Jun 2025 - Aug 2025",
    location: "Columbus, OH",
    bullets: [
      "Built analytics dashboards using Python, SQL, and AWS QuickSight to monitor platform transaction activity and track 10+ key performance metrics",
      "Designed data pipelines in BigQuery and Snowflake processing blockchain transaction datasets and generating automated KPI reporting dashboards",
      "Developed interactive data visualizations supporting business intelligence analytics for platform usage and transaction monitoring",
      "Defined standardized data metrics and documentation improving consistency across analytics pipelines and reporting workflows",
    ],
  },
];

export const education = {
  school: "The Ohio State University",
  location: "Columbus, OH",
  degree: "B.S. Statistics",
  graduation: "May 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Statistics & Applications",
  ],
};

export const skills = {
  languages: ["SQL", "Python", "Java", "JavaScript", "R"],
  technologies: [
    "AWS",
    "Docker",
    "Git",
    "BigQuery",
    "Snowflake",
    "Databricks",
    "PostgreSQL",
    "AWS QuickSight",
    "PowerBI",
    "Tableau",
  ],
  concepts: [
    "Data Analysis",
    "Business Analytics",
    "Business Intelligence",
    "Data Visualization",
    "Dashboard Development",
    "KPI Tracking",
    "ETL Pipelines",
    "Data Engineering",
  ],
};
