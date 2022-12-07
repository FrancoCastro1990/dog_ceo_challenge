import { render, screen } from '@testing-library/react';
import { DogContext } from '../../contexts/DogContext';
import { DogList } from './DogList';

describe('DogList', () => {
    test('renders DogList component', () => {

        const dogListMock = [
            {
                breed: 'affenpinscher',
                image: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg'
            },
            {
                breed: 'african',
                image: 'https://images.dog.ceo/breeds/african/n02116738_1003.jpg'
            },
            {
                breed: 'airedale',
                image: 'https://images.dog.ceo/breeds/airedale/n02096051_1003.jpg'
            }
        ]

        render(
            <DogContext.Provider value={{ dogList: dogListMock }}>
                <DogList />
            </DogContext.Provider>
        );
        const dogItem = screen.getAllByRole('listitem');
        expect(dogItem).toHaveLength(3);
    });


});
