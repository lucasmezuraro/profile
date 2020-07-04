import {types} from '../actionTypes/actionTypes';
import {projects} from '../data/projects';


export const initialState = projects[0];

export const selectedProjectReducer = (state = initialState, action: {type: string, project: any}) => {
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