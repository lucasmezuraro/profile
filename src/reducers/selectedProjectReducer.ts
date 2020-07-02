import {types} from '../actionTypes/actionTypes';



export const initialState = {
    title: 'Portfolio',
    startAt: new Date('07/02/2020'),
    endAt:new Date('07/02/2020'),
    progress: 20,
    responsive: true,
    description: `This project it's a thought about why i'd to present my work for headhunters and the general public, cause...`,
    tools: ['react', 'typescript'],
    image: ''
}

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