import {types} from '../actionTypes/actionTypes';

export const changeProject = (project: any) => ({
    type: types.CHANGE_PROJECT,
    project: {
        ...project
    }
});

export const previousProject = () => ({
    type: types.PROJECT_PREVIOUS
});

export const nextProject = () => ({
    type: types.PROJECT_NEXT
});