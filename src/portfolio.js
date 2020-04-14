/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from 'react-easy-emoji'

const greeting = {
  title: "Hello, I'm Kevin",
  subTitle: 'I code, travel, and think too much.',
  resumeLink: '',
}

const socialMediaLinks = {
  github: 'https://github.com/KevinJMC',
  linkedin: 'https://www.linkedin.com/in/k3vinjmc/',
  gmail: 'kevinjmccann+github@gmail.com',
}

const skillsSection = {
  title: 'Talents & Skills',
  subTitle:
    "Full Stack Application Developer, on a mission to reduce friction in the work place, streamlining processes, making sure the end user gets what they want, even if they don't know what that is exactly",
  skills: [
    emoji('⚡ Specializing in Global-Scale, Data-Driven Applications, mostly in JS, some Java'),
    emoji('⚡ Progressive Web Applications & Single Page Apps in Angular, Vue, or React'),
    emoji('⚡ Taming monolithic beasts into manageable, scalable serverless data integrations'),
  ],
  softwareSkills: [
    {
      skillName: 'TypeScript',
      fontAwesomeClassname: 'fab fa-ts',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'Angular',
      fontAwesomeClassname: 'fab fa-angular',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: 'postgreSQL',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'linux',
      fontAwesomeClassname: 'fab fa-linux',
    },
    {
      skillName: 'azure',
      fontAwesomeClassname: 'fab fa-microsoft',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'fab fa-git',
    },
    {
      skillName: 'github',
      fontAwesomeClassname: 'fab fa-github',
    },
  ],
}

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: 'Serverless Event-Driven Architecture - Azure/AWS',
      progressPercentage: '80%',
    },
    {
      Stack: 'MEAN/MERN stack - Node.js/Express, Angular/React',
      progressPercentage: '96%',
    },
    {
      Stack: 'Azure Devops/Jenkins/Github Actions - CI/CD',
      progressPercentage: '80%',
    },
    {
      Stack: 'Java Spring Boot Web Services',
      progressPercentage: '75%',
    },
  ],
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: '',
  githubUserName: 'KevinJMC',
}

// Some Big Projects You have worked with your company

const bigProjects = {
  title: 'Projects',
  subtitle: 'Location-Based Inventory System - goPuff',
  projects: [
    {
      image: 'https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY',
      link: 'http://saayahealth.com/',
    },
    {
      image: 'https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf',
      link: 'http://nextu.se/',
    },
  ],
}

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle: "Got a project I'd be perfect for? Or just wanna talk about an interesting idea? Hit me up, inbox is open",
  email_address: 'kevinjmccann+gituhb@gmail.com',
}

export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, contactInfo }
