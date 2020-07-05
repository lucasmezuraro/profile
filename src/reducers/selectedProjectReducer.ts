import {types} from '../actionTypes/actionTypes';
import {projects} from '../data/projects';
import { Project } from '../interfaces/Project';


export const initialState: Project = projects[0];

export const selectedProjectReducer = (state = initialState, action: {type: string, project: Project}) => {
    switch(action.type) {
        case types.CHANGE_PROJECT:
            return {
                ...state,
                ...action.project
            };
        default:
            return state;
    }
}