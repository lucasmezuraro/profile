import { Project } from "../interfaces/Project"

const portfolioProject: Project = {
    title: 'Portfolio',
    description: "This project it's a thought about why i'd to present my work for headhunters and the general public",
    startAt: new Date(),
    endAt: new Date(),
    progress: 40,
    tools: ['typescript', 'sass', 'redux', 'Travis CI'],
    responsive: true,
    image: '/images/portfolio_principal_image.png',
    type: 'Front end',
    github: 'https://github.com/lucasmezuraro/profile',
    site: 'https://lpmezuraro-portfolio.netlify.app/',
    integration: true,
    docker: false,
    screenshots: ['/images/portfolio_scr1.png', '', '']
}

const personalSiteProject: Project = {
    title: 'personal site',
    description: 'The project of my personal site built in React too.',
    startAt: new Date(),
    endAt: new Date(),
    progress: 100,
    tools: ['jest', 'react'],
    responsive: true,
    image: '/images/personal_site_principal_image.png',
    type: 'Front end',
    github: 'https://github.com/lucasmezuraro/blog_personal',
    site: 'https://lpmezuraro.netlify.app/',
    integration: false,
    docker: false,
    screenshots: ['', '', '']
}

const pizzaFinderProject: Project = {
    title: 'Pizza finder',
    description: 'A project of delivery food that i am developing to test the NestJS and to keep me learning',
    startAt: new Date(),
    endAt: new Date(),
    progress: 100,
    tools: ['jest', 'react'],
    responsive: true,
    image: '/images/pizz_finder_principal_image.png',
    type: 'Back end',
    github: '',
    site: '',
    integration: false,
    docker: false,
    screenshots: ['/images/pizz_finder_scr1.png', '', '']
}

const apiUsingNestProject: Project = {
    title: 'A API Using Nest.js',
    description: 'I am working on this project with goal of learning about his architecture',
    startAt: new Date(),
    endAt: new Date(),
    progress: 100,
    tools: ['typescript', 'postgres', 'docker','mongodb'],
    responsive: true,
    image: '',
    type: 'Front end',
    github: '',
    site: '',
    integration: false,
    docker: false,
    screenshots: ['', '', '']
}


export const projects = [
    portfolioProject,
    personalSiteProject,
    apiUsingNestProject,
    pizzaFinderProject
]