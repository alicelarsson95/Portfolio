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
  /** Which part of the image stays visible when it's cropped (CSS object-position). Defaults to 'center'. */
  imagePosition?: string
  /** Optional video that plays when hovering the image (desktop only). Also in public/projects. */
  video?: string
  /** Optional stamp in the card's corner, e.g. 'Work experience'. */
  badge?: string
  /** Optional small label shown instead of links, e.g. when there is no public link. */
  note?: string
}

export const projects: Project[] = [
  {
    name: 'Bilprospekt',
    description:
      'Six months in a dev team working on a paid service for the car industry. I built search features, worked with data flows and helped modernize an older table system.',
    tech: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Elasticsearch'],
    links: [],
    note: 'Internal product · no public link',
    badge: 'Work experience',
    // Placeholder illustration until there's a real screenshot
    image: '/projects/bilprospekt.svg',
    imageAlt: 'Illustration of a pixel car below a search field',
  },
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
    image: '/projects/meetverse.webp',
    imageAlt: 'Screenshot of the Meetverse website',
    video: '/projects/meetverse.mp4',
  },
  {
    name: 'Portfolio',
    description:
      "The site you're looking at! Designed in Figma and built with React, TypeScript and Claude Code.",
    tech: ['React', 'TypeScript', 'Vite', 'CSS', 'Figma'],
    links: [{ label: 'GitHub', href: 'https://github.com/alicelarsson95/Portfolio' }],
    image: '/projects/portfolio.webp',
    imageAlt: "Screenshot of Alice Larsson's portfolio",
    imagePosition: 'left center',
  },
]
