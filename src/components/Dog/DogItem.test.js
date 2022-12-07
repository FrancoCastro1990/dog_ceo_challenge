import React from 'react';
import { render, screen } from '@testing-library/react';
import { DogItem } from './DogItem';

describe('DogItem', () => {
    test('renders DogItem component', () => {

        const dog = {
            breed: 'anybreed',
            image: 'anyimage'
        }

        render(<DogItem dogItem={dog} />);
        const breedName = screen.getByText('anybreed');
        expect(breedName).toBeInTheDocument();
    });
});