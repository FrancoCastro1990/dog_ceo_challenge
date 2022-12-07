import React, { useContext } from 'react'
import { DogContext } from '../../contexts/DogContext';
import { DogItem } from './DogItem'
import { DogListContainer } from './styled';

export const DogList = () => {

    const { dogList: dogItems, isFilterOpen } = useContext(DogContext);

    return (
        <DogListContainer isFilterOpen={isFilterOpen}>
            {dogItems.map(
                (item, index) => {
                    return <DogItem key={index} dogItem={item} />
                })
            }
        </DogListContainer>
    )
}
