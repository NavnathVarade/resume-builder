import { CVData } from '../types/CVTypes';
import { v4 as uuidv4 } from 'uuid';

export const initialCVData: CVData = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    location: '',
    email: '',
    phone: '',
  },
  skills: [],
  education: [],
  experience: [],
  summary: '',
  links: [],
  projects: [],
  certifications: [],
  languages: [],
  awards: [],
};

export const exampleCVData: CVData = {
  personalInfo: {
    fullName: 'Taylor Bennett',
    jobTitle: 'Full Stack Developer',
    location: 'Denver, CO',
    email: 'taylor.bennett@example.com',
    phone: '(720) 555-3210',
  },
  summary:
    'Full Stack Developer with 5+ years of experience building scalable web applications using modern technologies. Proficient in React, Node.js, and cloud infrastructure. Strong focus on performance, clean code, and team collaboration. Passionate about solving real-world problems through intuitive software solutions.',
  skills: [
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'MongoDB' },
    { name: 'PostgreSQL' },
    { name: 'GraphQL' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'AWS (EC2, S3, Lambda)' },
    { name: 'CI/CD' },
    { name: 'Git & GitHub Actions' },
  ],
  education: [
    {
      id: uuidv4(),
      degree: 'B.S. in Computer Engineering',
      institution: 'Colorado State University',
      startYear: '2014',
      endYear: '2018',
      description:
        'Studied software development, networking, and system design. Graduated with honors. Built a senior project around distributed systems and microservices.',
    },
  ],
  experience: [
    {
      id: uuidv4(),
      title: 'Full Stack Developer',
      company: 'ClearByte Software',
      startDate: '2021',
      endDate: '',
      current: true,
      achievements: [
        'Led development of a SaaS platform using React, Next.js, and Node.js that served over 150,000 users.',
        'Designed and implemented REST and GraphQL APIs with PostgreSQL and MongoDB.',
        'Automated CI/CD pipelines with GitHub Actions, Docker, and AWS ECS.',
        'Worked closely with UX designers to implement responsive and accessible UIs.',
      ],
    },
    {
      id: uuidv4(),
      title: 'Junior Web Developer',
      company: 'MountainTech Labs',
      startDate: '2018',
      endDate: '2021',
      current: false,
      achievements: [
        'Maintained and refactored legacy JavaScript codebases into modern React apps.',
        'Created REST APIs using Express.js and integrated with frontend using Axios.',
        'Set up logging and error tracking using Sentry and New Relic.',
        'Wrote unit and integration tests using Jest and React Testing Library.',
      ],
    },
  ],
  links: [
    {
      id: uuidv4(),
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/taylorbennett',
    },
    {
      id: uuidv4(),
      name: 'GitHub',
      url: 'https://github.com/taylorbennett',
    },
    {
      id: uuidv4(),
      name: 'Portfolio',
      url: 'https://taylorbennett.dev',
    },
  ],
  projects: [
    {
      id: uuidv4(),
      name: 'RemoteCollab',
      description:
        'Built a real-time team collaboration tool using WebSockets, React, and Node.js. Includes task boards, chat, and user presence indicators.',
      url: 'https://github.com/taylorbennett/remotecollab',
    },
    {
      id: uuidv4(),
      name: 'DevTracker',
      description:
        'A developer productivity app that helps track goals, commits, and pull requests over time. Built with Next.js, GraphQL, and MongoDB.',
      url: 'https://devtracker.taylorbennett.dev',
    },
  ],
  certifications: [
    {
      id: uuidv4(),
      name: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
    },
    {
      id: uuidv4(),
      name: 'Full Stack Web Development',
      issuer: 'Coursera (offered by Meta)',
      date: '2022',
    },
  ],
  languages: [
    {
      id: uuidv4(),
      name: 'English',
      proficiency: 'Native',
    },
    {
      id: uuidv4(),
      name: 'French',
      proficiency: 'Basic',
    },
  ],
  awards: [
    {
      id: uuidv4(),
      title: 'Best Internal Tool Award',
      issuer: 'ClearByte Software',
      date: '2022',
      description:
        'Awarded for creating a deployment dashboard that reduced downtime and improved visibility into app status.',
    },
  ],
};