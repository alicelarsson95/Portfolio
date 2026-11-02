export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  description: string
  tech: string[]
  links: ProjectLink[]
  /**
   * Screenshot at the top of the card (16:10 works best).
   * Put the file in public/projects and use its path, e.g. '/projects/Meetverse.png'.
   * Leave out to show a gray placeholder.
   */
  image?: string
  imageAlt?: string
  /** Optional video that plays when hovering the image (desktop only). Also in public/projects. */
  video?: string
}

export const projects: Project[] = [
  {
    name: 'ByAhlcrona',
    description:
      'Website for an artist, showcasing her murals and artwork. Portfolio and webshop, work in progress.',
    tech: ['React', 'React Router', 'Vite', 'CSS Modules'],
    links: [{ label: 'GitHub', href: 'https://github.com/alicelarsson95/ByAhlcrona' }],
    image: '/projects/byahlcrona.webp',
    imageAlt: 'Screenshot of the ByAhlcrona website',
    video: '/projects/byahlcrona.mp4',
  },
  {
    name: 'Meetverse',
    description: 'A meetup platform where you can find events, sign up and leave reviews.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Express', 'MongoDB'],
    links: [
      { label: 'Frontend', href: 'https://github.com/alicelarsson95/Meetverse-frontend' },
      { label: 'Backend', href: 'https://github.com/alicelarsson95/Meetverse-backend' },
    ],
  },
]
