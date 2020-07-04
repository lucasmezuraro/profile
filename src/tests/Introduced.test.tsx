import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, cleanup} from '@testing-library/react';
import Introduced from '../components/Introduced/index';
import { initialState } from '../reducers/selectedProjectReducer';

describe('Introduced Component', () => {
    const mockStore = configureStore();
    let store: any;

    beforeEach(() => {
        store = mockStore({
           selectedProject: initialState,
        });
    })

    it('must be defined', () => {
        const {getByTestId} = render(<Provider store={store}><Introduced /></Provider>)
        expect(getByTestId('main-selected')).toBeInTheDocument();
    });
});