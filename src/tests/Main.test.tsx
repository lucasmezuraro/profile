import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Main from '../components/Main/index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {initialState} from '../reducers/selectedProjectReducer';
import {projects as listProjects} from '../data/projects';

describe('Main', () => {
    
    const mockStore = configureStore();
    let store: any;

    beforeEach(() => {
        store = mockStore({
           selectedProject:initialState,
           showProjects: {
               projects: listProjects,
               next: 1,
           },
        });
    })

    afterEach(cleanup);
    
    it ('must be defined', () => {
        const { getByTestId } = render(<Provider store={store}><Main/></Provider>);
        expect(getByTestId('main')).toBeDefined();
    });

    it ('must be defined', () => {
        const { getByTestId } = render(<Provider store={store}><Main/></Provider>);
        expect(getByTestId('main')).toBeDefined();
    });
}) 