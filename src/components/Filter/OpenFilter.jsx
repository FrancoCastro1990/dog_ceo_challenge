import React, { useContext, useState } from 'react'
import { DogContext } from '../../contexts/DogContext';
import { FilterList } from './FilterList';
import BarsIcon from '../Icons/BarsIcon';
import { FilterToggleButton } from './styled';

export const OpenFilter = () => {
    const [isOpened, setIsOpened] = useState(false)
    const { setIsFilterOpen } = useContext(DogContext);
    const toggle = () => {
        setIsOpened(!isOpened);
        setIsFilterOpen(!isOpened);
    }
    return (
        <>
            <FilterToggleButton onClick={toggle} open={isOpened}>
                <BarsIcon width='1rem' fill='white' />
            </FilterToggleButton>
            <FilterList open={isOpened} toggle={toggle} />
        </>
    )
}
