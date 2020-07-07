import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, cleanup} from '@testing-library/react';
import Introduced from '../components/Introduced/introduced';
import { initialState } from '../reducers/selectedProjectReducer';

describe('Introduced Component', () => {
    const mockStore = configureStore();
    let store: any;

    beforeEach(() => {
        store = mockStore({
           selectedProject: initialState,
           showProjects: initialState
        });
    })

    it('must be defined', () => {
        const {getByTestId} = render(<Provider store={store}><Introduced /></Provider>)
        expect(getByTestId('main-selected')).toBeInTheDocument();
    });

    it('must be equal the store state sent', () => {
        const {getByTestId} = render(<Provider store={store}><Introduced /></Provider>)
        const titleProject: string = getByTestId('project-title').textContent;
        expect(titleProject).toEqual(" "+store.getState().selectedProject.title);
        const integrationProject = getByTestId('project-integration');
        expect(integrationProject).toHaveClass("work");
        const dockerProject = getByTestId('project-docker');
        expect(dockerProject).toHaveClass("work-not");
    });
});