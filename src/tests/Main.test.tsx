import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Main from '../components/Main/index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {initialState} from '../reducers/selectedProjectReducer';

describe('Main', () => {
    
    const mockStore = configureStore();
    let store: any;

    beforeEach(() => {
        store = mockStore({
           selectedProject:initialState
        });
    })
    
    it ('must be defined', () => {
       
        const { getByTestId } = render(<Provider store={store}><Main/></Provider>);
        expect(getByTestId('main')).toBeDefined();
    });
}) 