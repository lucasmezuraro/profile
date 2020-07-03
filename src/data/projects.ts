import { Project } from "../interfaces/Project"

const portfolioProject: Project = {
    title: 'Portfolio',
    description: 'A project ....',
    startAt: new Date(),
    endAt: new Date(),
    progress: 40,
    tools: ['typescript', 'react'],
    responsive: true,
    image: '',
    type: 'Front end'
}

const personalSiteProject: Project = {
    title: 'personal site',
    description: 'A project ....',
    startAt: new Date(),
    endAt: new Date(),
    progress: 100,
    tools: ['jest', 'react'],
    responsive: true,
    image: '',
    type: 'Front end'
}

const pizzaFinderProject: Project = {
    title: 'Pizza finder',
    description: 'A project of delivery food ....',
    startAt: new Date(),
    endAt: new Date(),
    progress: 100,
    tools: ['jest', 'react'],
    responsive: true,
    image: '',
    type: 'Back end'
}

const apiUsingNestProject: Project = {
    title: 'A API Using Nest.js',
    description: 'A project of delivery food ....',
    startAt: new Date(),
    endAt: new Date(),
    progress: 100,
    tools: ['typescript', 'typeorm'],
    responsive: true,
    image: '',
    type: 'Front end'
}


export const projects = [
    portfolioProject,
    personalSiteProject,
    apiUsingNestProject,
    pizzaFinderProject
]