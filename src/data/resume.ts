export const personalInfo = {
  name: "Utkarsh Sarvjeet Tiwari",
  headline: "Electronics & CS student building intelligent systems with Python, AI/ML, and IoT",
  email: "utkarshtiwari4412@gmail.com", // Update with actual email
  linkedin: "https://www.linkedin.com/in/utkarsh-tiwari-45813728b/", // Update with actual
  github: "https://github.com/Utkarsh4412", // Update with actual
  resumePdf: "/Utkarsh_Tiwari_Resume.pdf",
};

export const about = `I'm a third-year Electronics and Computer Science student at Shah and Anchor Kutchhi Engineering College, Mumbai. My work sits at the intersection of software development and intelligent systems.

I've built projects ranging from voice AI agents using local LLMs to quantum computing research with industry partners. I'm particularly interested in applying machine learning to real-world problems—whether that's optimizing irrigation with IoT sensors or developing NLP-powered applications.

Currently seeking AI/ML and software development roles where I can contribute to meaningful technical work.`;

export const experience = [
  {
    role: "Research Intern (AI/ML)",
    company: "NLIP Lab, IIT Hyderabad",
    duration: "February 2026 – Present",
    type: "Research internship",
    responsibilities: [
      "Contributing to development of an AI-based product/system",
      "Building data pipelines and preprocessing workflows for real-world datasets",
      "Performing model evaluation and optimization to improve accuracy and response time",
      "Collaborating with research scholars and faculty on system architecture and experimentation",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Aryahs World Infotech (OPC) Pvt. Ltd.",
    duration: "December 2025 – January 2026",
    type: "Internship",
    responsibilities: [
      "Developed WhatsApp automation system for customer interaction and workflow management",
      "Built ML-based symptom classifier mapping user inputs to probable medical conditions",
      "Implemented automated email generation system for context-aware communication",
      "Contributed to full-stack product features using Python, Flask, MySQL & JavaScript",
      "Worked with real-time datasets, testing, and Agile sprint collaboration",
    ],
  },
];

export const projects = [
  {
    title: "Quantum Computing Research Project",
    subtitle: "Industry-Defined Problem by Cybranex Pvt. Ltd.",
    status: "Ongoing",
    description:
      "Designed and trained quantum autoencoder models for data compression and feature extraction as part of an industry-defined research problem under faculty mentorship. Simulating quantum circuits and exploring hybrid quantum–classical architectures for dimensionality reduction. Conducting research and documentation under faculty mentorship as part of a college–industry collaboration program.",
    tech: ["Qiskit", "Python", "NumPy", "Matplotlib"],
    github: null,
  },
  {
    title: "Local Voice AI Agent",
    date: "August 2025",
    description:
      "A Windows-first voice chat application using local AI models (Gemma 3 via Ollama) with real-time speech-to-text and text-to-speech pipeline. Features conversational memory, retry logic, performance metrics, and configurable CLI with multiple deployment modes.",
    tech: ["Python", "Ollama", "Gradio", "WebRTC", "YAML"],
    github: "https://github.com/Utkarsh4412/Local-Voice-AI-Agent",
  },
  {
    title: "Artha Mart",
    subtitle: "Ecommerce Web Application",
    date: "June 2025",
    description:
      "A group-based e-commerce platform with user authentication, product management, cart operations, and order processing. Designed the MySQL database schema and built secure backend logic in Flask.",
    tech: ["Flask", "MySQL", "Python", "HTML", "CSS"],
    github: "https://github.com/Utkarsh4412",
  },
  {
    title: "Harry Potter Invisibility Cloak",
    date: "March 2025",
    description:
      "Computer vision project simulating the invisibility effect using color detection and HSV masking in real-time video. Includes real-time trackbar tuning for color calibration.",
    tech: ["OpenCV", "Python", "NumPy"],
    github: "https://github.com/Utkarsh4412",
  },
  {
    title: "Smart Home Automation System",
    date: "December 2024",
    description:
      "C++ project simulating smart home automation with device control, temperature monitoring, energy usage calculation, and state persistence to file.",
    tech: ["C++", "File I/O"],
    github: "https://github.com/Utkarsh4412",
  },
];

export const skills = {
  languages: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"],
  aiMl: [
    "Machine Learning",
    "NLP",
    "Sentence Transformers",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "TF-IDF",
    "Logistic Regression",
  ],
  dataViz: ["NumPy", "Pandas", "Matplotlib", "Data Preprocessing"],
  webFrameworks: ["Flask", "Node.js", "React.js"],
  databases: ["MySQL", "MongoDB", "Git", "VS Code", "OpenCV"],
  quantum: ["Qiskit", "PennyLane"],
};

export const education = {
  institution: "Shah and Anchor Kutchhi Engineering College",
  degree: "B.Tech in Electronics and Computer Science Engineering",
  year: "Third Year, Semester 6",
  graduation: "2027",
  duration: "Sept 2023 – Present",
  location: "Mumbai, Maharashtra",
};

export const certifications = [
  {
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    description: "Linux system commands, file management, and shell operations",
  },
  {
    title: "Embedded System Developer",
    issuer: "AICTE Virtual Internship (Eduskills Foundation)",
    description: "Microcontrollers, sensor interfacing, and Embedded C programming",
  },
];

export const hackathons = [
  {
    event: "Innovate-a-thon – IIT (ISM) Dhanbad (Concetto'25)",
    result: "Finalist",
    description: "Proposed Reloop, an AI-driven circular economy platform for waste reduction",
  },
  {
    event: "HackWithUttarPradesh 2025 – Chandigarh University",
    result: "Shortlisted",
    theme: "Agentic AI",
    description: "Smart Irrigation System using IoT sensors and ML",
  },
  {
    event: "HackSetu 1.0 – Amity University, Gwalior",
    result: "Grand Finale Shortlist",
    description: "AI + IoT irrigation prototype with real-time sensor data",
  },
  {
    event: "E² Calonics'25 – E.G.S. Pillay Engineering College",
    result: "Paper Presentation Selection",
    description: "ML approach for optimizing irrigation using environmental parameters",
  },
  {
    event: "Bharatiya Antariksh Hackathon 2025",
    result: "Participant",
    description: "AI-based drought and land risk prediction using satellite imagery",
  },
];

export const achievements = [
  "Led and managed a team of campus ambassadors at ISRC",
  "Finalist in national-level innovation challenges at IIT (ISM) Dhanbad and Amity University",
  "Shortlisted for multiple hackathon grand finales with AI/IoT-based solutions",
];
