import {types} from '../actionTypes/actionTypes';

export const changeProject = (project: any) => ({
    type: types.CHANGE_PROJECT,
    project: {
        title: 'trocado'
    }
});