import { Mail } from "lucide-react"
import aiAgentImage from "../assets/project-ai-agent.svg"
import travelleImage from "../assets/project-travelle.svg"
import visionMaxImage from "../assets/project-vision-max.svg"

export const socials = [
  { label: "Email", href: "mailto:sarvesh.d2024aiml@sece.ac.in", icon: Mail },
  { label: "GitHub", href: "https://github.com/Sarvesh-d-07" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sarvesh-d" },
]

export const details = [
  ["Name", "Sarvesh D"],
  ["Role", "B.E CSE (AI & ML)"],
  ["Year", "2nd Year"],
  ["College", "Sri Eshwar College of Engineering"],
  ["CGPA", "8.23"],
  ["Email", "sarvesh.d2024aiml@sece.ac.in"],
  ["GitHub", "Sarvesh-d-07"],
  ["LinkedIn", "sarvesh-d"],
]

export const tags = [
  "AI & ML",
  "Automation",
  "Full Stack",
  "Salesforce",
  "Problem Solving",
  "Software Development",
  "Hackathons",
  "Public Speaking",
]

export const exposure = {
  title: "PayPal Career Academy - Tech Team",
  description:
    "Selected for the PayPal Career Academy Tech Team mentorship program focused on structured learning, industry exposure, real-world engineering practices, and technical growth.",
}

export const experiences = [
  {
    company: "Synapslogic",
    role: "Marketing & Technology Intern",
    date: "July 2025",
    points: [
      "Assisted with frontend development and technical support",
      "Contributed to digital marketing activities",
      "Worked on lead generation",
      "Startup workflow exposure",
    ],
  },
  {
    company: "India Space Academy",
    role: "Winter Internship (Remote Sensing & GIS)",
    date: "1 month",
    points: [
      "Satellite imagery analysis",
      "AI-assisted geospatial analysis",
      "Surface water extraction using NDWI",
      "Remote sensing concepts",
    ],
  },
]

export const projects = [
  {
    title: "Vision Max",
    file: "main.dart",
    description:
      "Assistive navigation with live obstacle detection, voice guidance, and offline-first support.",
    tech: ["Flutter", "Machine Learning", "Computer Vision"],
    image: visionMaxImage,
    github: "https://github.com/Sarvesh-d-07",
    demo: "#contact",
  },
  {
    title: "AI Agent",
    file: "app.py",
    description:
      "Prompt-led automation for reliable task execution and cleaner operational handoffs.",
    tech: ["Python", "Playwright", "NLP"],
    image: aiAgentImage,
    github: "https://github.com/Sarvesh-d-07",
    demo: "#contact",
  },
  {
    title: "Travelle",
    description:
      "Travel safety companion with SOS flows, live tracking, alerts, and hazard reporting.",
    file: "travelle.dart",
    tech: ["Flutter", "Location Services", "Safety Systems"],
    image: travelleImage,
    github: "https://github.com/Sarvesh-d-07",
    demo: "#contact",
  },
]

export const certifications = [
  {
    title: "Salesforce - Agentforce Specialist",
    subtitle: "Autonomous AI Agent Architecture & CRM Configurations",
    issuer: "Salesforce Trailhead",
    date: "Verified credential",
    originalUrl: "/certificates/salesforce-agentforce.png",
  },
  {
    title: "India Space Academy - Winter Internship",
    subtitle: "Remote Sensing, GIS & AI-Assisted Geospatial Analysis",
    issuer: "India Space Academy",
    date: "Winter internship",
    originalUrl: "/certificates/india-space-academy.png",
    pdfUrl: "/certificates/india-space-academy.pdf",
  },
  {
    title: "JLPT N5 - Japanese Language Certified",
    subtitle: "Professional Linguistic and Intercultural Competence",
    issuer: "Japanese Language Proficiency Test",
    date: "N5 certification",
    originalUrl: "/certificates/jlpt-n5-certificate.png",
    pdfUrl: "/certificates/jlpt-n5-certificate.pdf",
  },
]
