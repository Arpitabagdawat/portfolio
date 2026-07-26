import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';
import {
  SiPython,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiGithub,
  SiJupyter,
  SiPycharm,
} from 'react-icons/si';
import {
  TbChartBar,
  TbChartDots,
  TbDatabase,
  TbChartHistogram,
  TbFileExcel,
  TbBrandAzure,
  TbBrandVscode,
} from 'react-icons/tb';
import type { IconType } from 'react-icons';

/* ── Navigation ───────────────────────────────── */
export const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Education', href: 'education' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
];

/* ── Social Links ─────────────────────────────── */
export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Arpitabagdawat',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arpitabagdawat-dataanalyst/',
    icon: FiLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:arpitabagdawat@gmail.com',
    icon: FiMail,
  },
];

/* ── Contact Info ─────────────────────────────── */
export const contactInfo = [
  {
    label: 'Email',
    value: 'arpitabagdawat@gmail.com',
    href: 'mailto:arpitabagdawat@gmail.com',
    icon: FiMail,
  },
  {
    label: 'Phone',
    value: '+91-7354928701',
    href: 'tel:+917354928701',
    icon: FiPhone,
  },
  {
    label: 'Location',
    value: 'Ujjain, Madhya Pradesh, India',
    href: '#',
    icon: FiMapPin,
  },
  {
    label: 'GitHub',
    value: 'github.com/Arpitabagdawat',
    href: 'https://github.com/Arpitabagdawat',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/arpitabagdawat-dataanalyst',
    href: 'https://www.linkedin.com/in/arpitabagdawat-dataanalyst/',
    icon: FiLinkedin,
  },
];

/* ── Experience ───────────────────────────────── */
export const experiences = [
  {
    title: 'Data Analyst Intern',
    company: 'Indus AI',
    type: 'Internship',
    period: 'April 2026 – May 2026',
    responsibilities: [
      'Cleaned and analyzed 10,000+ records',
      'Built interactive Power BI dashboards',
      'Optimized SQL queries',
      'Generated business reports',
    ],
    achievements: [
      'Improved reporting efficiency by 30%',
      'Increased data consistency',
    ],
  },
];

/* ── Education ────────────────────────────────── */
export const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Mahakal Institute of Technology',
    period: 'July 2022 – May 2026',
    score: 'CGPA: 7.43/10',
  },
  {
    degree: 'Class XII',
    field: 'Mathematics Stream',
    institution: '',
    period: '',
    score: '84%',
  },
  {
    degree: 'Class X',
    field: '',
    institution: '',
    period: '',
    score: '90%',
  },
];

/* ── Projects ─────────────────────────────────── */
export const projects = [
  {
    title: 'Kickstarter Success Analysis',
    description:
      'Analyzed 50K+ crowdfunding campaigns to identify key success factors and built 8+ interactive dashboards for business KPI reporting.',
    image: '/images/projects/kickstarter.png',
    technologies: ['Python', 'SQL', 'Power BI', 'Excel', 'DAX'],
    highlights: [
      '50K+ records analyzed',
      '8+ dashboards',
      'Business KPI reporting',
    ],
    github: 'https://github.com/Arpitabagdawat/Kickstarter-Success-Analysis',
    liveDemo: '',
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Built a machine learning model to predict customer churn with 89% accuracy using classification algorithms.',
    image: '/images/projects/churn.png',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    highlights: ['89% accuracy'],
    github: 'https://github.com/Arpitabagdawat/Customer-Churn-Prediction',
    liveDemo: '',
  },
  {
    title: 'Airbnb NYC Data Analysis',
    description:
      'Exploratory data analysis of 48K+ Airbnb listings to find pricing and location insights across New York City neighborhoods.',
    image: '/images/projects/airbnb.png',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    highlights: ['48K+ listings analyzed'],
    github: 'https://github.com/Arpitabagdawat/Airbnb-NYC-Data-Analysis',
    liveDemo: '',
  },
];

/* ── Skills ───────────────────────────────────── */
export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: TbDatabase },
    ],
  },
  {
    category: 'Data Analysis',
    skills: [
      { name: 'Power BI', icon: TbChartHistogram },
      { name: 'Excel', icon: TbFileExcel },
      { name: 'Matplotlib', icon: TbChartBar },
      { name: 'Seaborn', icon: TbChartDots },
    ],
  },
  {
    category: 'Libraries',
    skills: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Streamlit', icon: SiStreamlit },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'Microsoft Azure', icon: TbBrandAzure },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'GitHub', icon: SiGithub },
      { name: 'Jupyter Notebook', icon: SiJupyter },
      { name: 'VS Code', icon: TbBrandVscode },
      { name: 'PyCharm', icon: SiPycharm },
      { name: 'pgAdmin 4', icon: TbDatabase },
    ],
  },
];

/* ── Certifications ───────────────────────────── */
export const certifications = [
  {
    title: 'Power BI for Beginners',
    issuer: 'Microsoft',
    image: '/images/certificates/microsoft.png',
  },
  {
    title: 'Data Analytics',
    issuer: 'Accenture FutureLearn',
    image: '/images/certificates/accenture.png',
  },
  {
    title: 'Data Analytics Program',
    issuer: 'Infosys',
    image: '/images/certificates/infosys.png',
  },
];

/* ── Statistics ───────────────────────────────── */
export const statistics = [
  { value: 1, suffix: '', label: 'Internship' },
  { value: 3, suffix: '', label: 'Featured Projects' },
  { value: 3, suffix: '', label: 'Certifications' },
  { value: 10, suffix: ',000+', label: 'Records Analyzed' },
  { value: 50, suffix: ',000+', label: 'Crowdfunding Records Studied' },
  { value: 89, suffix: '%', label: 'ML Model Accuracy' },
];

/* ── EmailJS Config (placeholder) ─────────────── */
export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
};
