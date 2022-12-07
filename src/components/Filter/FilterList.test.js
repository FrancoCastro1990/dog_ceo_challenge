import { render, screen } from '@testing-library/react';
import { DogContext } from '../../contexts/DogContext';

import { FilterList } from './FilterList';

describe('FilterList', () => {
    test('renders FilterList component', () => {

        const breedListMock = {
            'affenpinscher': [],
            'african': [],
            'airedale': [],
            'akita': [],
            'appenzeller': [],
            'basenji': ['basenji'],
        }

        render(
            <DogContext.Provider value={{ breedList: breedListMock }}>
                <FilterList />
            </DogContext.Provider>
        );
        const filterButton = screen.getByTestId('close-button');
        const filterItemList = screen.getAllByRole('checkbox');
        expect(filterItemList).toHaveLength(7);
        expect(filterButton).toBeInTheDocument();
    });
});