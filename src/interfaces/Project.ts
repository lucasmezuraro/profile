export interface Project {
    title: string,
    startAt: Date,
    endAt: Date,
    progress?: number,
    responsive?: boolean,
    tools: string[],
    image: string,
    description: string
}