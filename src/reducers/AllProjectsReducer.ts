import {types} from '../actionTypes/actionTypes';
import {projects} from '../data/projects';


export const initialState = {
    projects : [
        projects[0],
        projects[1],
    ],
    previous: -1,
    current: 0,
    next: 1
}

export const showProjectsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case types.PROJECT_PREVIOUS :
            
            const optionPrv = state.previous - 1 >= -1;

            let previousPrv = (state.current >= 1) && optionPrv ? (state.previous) - 1 : state.previous;
            let currentPrv = (state.current >= 1) && optionPrv ? (state.current) - 1 : state.current;
            let nextPrv = state.next >= 2 && optionPrv ? (state.next) - 1 : state.next;

            return {
                previous: previousPrv,
                current: currentPrv,
                next: nextPrv,
                projects: [projects[currentPrv], projects[nextPrv]]                
            };   
        
        case types.PROJECT_NEXT :

            const option = state.next + 1 < projects.length + 1;

            let previousNext = (state.current >= 0) && option ? (state.previous) + 1 : state.previous;
            let currentNext = (state.current >= 0) && option ? (state.current) + 1 : state.current;
            let nextNxt = state.next >= 1 && option ? (state.next) + 1 : state.next;    

                   
            return {
                previous: previousNext,
                current: currentNext,
                next: nextNxt,
                projects: [projects[currentNext], projects[nextNxt] ? projects[nextNxt] : [] ]                
            };     
            
        default:
            return state;
    }
}

