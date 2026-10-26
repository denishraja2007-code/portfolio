import {
  FaJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaProjectDiagram,
  FaRobot,
  FaBrain,
} from 'react-icons/fa'
import {
  SiC,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiPostman,
} from 'react-icons/si'

export const categories = [
  'All',
  'Languages',
  'Frontend',
  'Backend & Database',
  'Other',
]

export const skills = [
  { name: 'JavaScript', icon: FaJs, color: '#f7df1e', category: 'Languages' },
  { name: 'Python', icon: FaPython, color: '#3776ab', category: 'Languages' },
  { name: 'Java', icon: FaJava, color: '#f89820', category: 'Languages' },
  { name: 'C', icon: SiC, color: '#a8b9cc', category: 'Languages' },
  { name: 'SQL', icon: FaDatabase, color: '#38bdf8', category: 'Languages' },

  { name: 'React', icon: FaReact, color: '#61dafb', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', category: 'Frontend' },
  { name: 'HTML', icon: FaHtml5, color: '#e34f26', category: 'Frontend' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572b6', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', category: 'Frontend' },

  { name: 'Node.js', icon: FaNodeJs, color: '#68a063', category: 'Backend & Database' },
  { name: 'Django', icon: SiDjango, color: '#44b78b', category: 'Backend & Database' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248', category: 'Backend & Database' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1', category: 'Backend & Database' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e', category: 'Backend & Database' },

  { name: 'DSA', icon: FaProjectDiagram, color: '#f472b6', category: 'Other' },
  { name: 'Generative AI', icon: FaBrain, color: '#a78bfa', category: 'Other' },
  { name: 'n8n', icon: FaRobot, color: '#ea4b71', category: 'Other' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032', category: 'Other' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37', category: 'Other' },
]