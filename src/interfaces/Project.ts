export interface Project {
    title: string,
    startAt: Date,
    endAt: Date,
    progress?: number,
    responsive?: boolean,
    tools: string[],
    image: string,
    description: string,
    type: string,
    github: string,
    site: string,
    integration: boolean,
    docker: boolean,
    screenshots : [string, string, string]
}