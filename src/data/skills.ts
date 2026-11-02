export type SkillGroup = {
  title: string
  /** Label background and card shadow */
  color: string
  /** Chip background */
  lightColor: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'FRONTEND',
    color: '#FF8AC6',
    lightColor: '#FFE3F1',
    skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'BACKEND & DATA',
    color: '#C8F25A',
    lightColor: '#F0FBD0',
    skills: ['Node.js', 'Express', 'REST APIs', 'SQL', 'NoSQL', 'MongoDB', 'Elasticsearch'],
  },
  {
    title: 'CLOUD & DEVOPS',
    color: '#FFD34E',
    lightColor: '#FFF4CC',
    skills: ['Docker', 'CI/CD', 'GitHub Actions', 'AWS', 'Azure'],
  },
  {
    title: 'TOOLS & WORKFLOW',
    color: '#B9A8FF',
    lightColor: '#ECE6FF',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Claude Code', 'Trello', 'Scrum'],
  },
]
