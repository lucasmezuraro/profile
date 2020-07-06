import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Main from '../components/Main/main';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced, MockStore } from 'redux-mock-store';
import {initialState} from '../reducers/AllProjectsReducer';
import {nextProject, previousProject} from '../actions/changeProject';
import Move from '../components/Move/move';
import { projects } from '../data/projects';
import {types} from '../actionTypes/actionTypes';
import thunk, { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

type DispatchExts = ThunkDispatch<any, void, AnyAction>;

const middlewares = [thunk];
const mockStore = configureStore<any, DispatchExts>(middlewares);

describe('Move component', () => {

    
    let store: any;

    beforeEach(() => {
        store = mockStore({
           showProjects: initialState,
        });
    })

    it('must be defined', () => {
        const {getByTestId} = render(<Provider store={store}><Move direction='previous' /></Provider>);
        expect(getByTestId('previous')).toBeDefined();
    });

    it('must be change project to next', () => {
        store.dispatch(nextProject());
        expect(store.getActions()[0]).toEqual({type: types.PROJECT_NEXT});
    });

    it('must be change project to previous', () => {       
        store.dispatch(previousProject());
        expect(store.getActions()[0]).toEqual({type: types.PROJECT_PREVIOUS});
    });
});