import { render, screen } from '@testing-library/react';
import { FilterItem } from './FilterItem';

describe('FilterItem', () => {
    test('renders FilterItem component', () => {

        const filterItem = {
            label: 'norwegian',
            name: 'buhund/norwegian'
        }

        render(<FilterItem {...filterItem} />);
        const breedName = screen.getByText('norwegian');
        expect(breedName).toBeInTheDocument();
    });
});