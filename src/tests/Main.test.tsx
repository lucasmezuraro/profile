import React from 'react';
import {render} from '@testing-library/react';
import Main from '../components/Main/index';

describe('Main', () => {
    
    it ('must be defined', () => {
        const { getByTestId } = render(<Main/>);
        expect(getByTestId('main')).toBeDefined();
    });
}) 