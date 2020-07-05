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
            
            const conditionToComeBack = state.previous - 1 >= -1;
            const currentPositionBiggerThenOne = state.current >= 1;
            const nextPositionMustBeBiggerThenTwo = state.next >= 2;

            let previousPositionToComeBack = currentPositionBiggerThenOne && conditionToComeBack ? (state.previous) - 1 : state.previous;
            let currentPositionToComeBack = currentPositionBiggerThenOne && conditionToComeBack ? (state.current) - 1 : state.current;
            let nextPositionToComeBack = nextPositionMustBeBiggerThenTwo && conditionToComeBack ? (state.next) - 1 : state.next;

            return {
                previous: previousPositionToComeBack,
                current: currentPositionToComeBack,
                next: nextPositionToComeBack,
                projects: [projects[currentPositionToComeBack], projects[nextPositionToComeBack]]                
            };   
        
        case types.PROJECT_NEXT :

            const conditionToAdvance = state.next + 1 < projects.length + 1;
            const currentPositionBiggerThenZero = state.current >= 0;
            const nextPositionMustBeBiggerThenOne = state.next >= 1;

            let previousPositionToAdvance = currentPositionBiggerThenZero && conditionToAdvance ? (state.previous) + 1 : state.previous;
            let currentPositionToAdvance = currentPositionBiggerThenZero && conditionToAdvance ? (state.current) + 1 : state.current;
            let nextPositionToAdvance = nextPositionMustBeBiggerThenOne && conditionToAdvance ? (state.next) + 1 : state.next;    

                   
            return {
                previous: previousPositionToAdvance,
                current: currentPositionToAdvance,
                next: nextPositionToAdvance,
                projects: [projects[currentPositionToAdvance], projects[nextPositionToAdvance] ? projects[nextPositionToAdvance] : [] ]                
            };     
            
        default:
            return state;
    }
}

