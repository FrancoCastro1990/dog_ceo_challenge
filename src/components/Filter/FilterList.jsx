import React, { useCallback, useContext } from 'react'
import { DogContext } from '../../contexts/DogContext';
import { FilterItem } from './FilterItem'
import CloseIcon from '../Icons/CloseIcon';
import { CloseButton, FilterContainer } from './styled';


export const FilterList = ({ open, toggle }) => {

    const { getDogImage, removeBreed, breedList } = useContext(DogContext);

    const handledBreedSelect = useCallback(async (event) => {
        if (event.target.checked) {
            event.target.disabled = true;
            getDogImage(event.target.name).then(() => {
                event.target.disabled = false;
            })
        } else {
            removeBreed(event.target.name);
        }
    }, [getDogImage, removeBreed])

    return (
        <>
            <CloseButton
                data-testid="close-button"
                open={open}
                onClick={toggle}>
                <CloseIcon width='0.75rem' fill='white' />
            </CloseButton>
            <FilterContainer open={open}>

                {
                    Object.entries(breedList).map((item, index) => {
                        return (
                            <div key={index}>
                                <FilterItem
                                    key={index}
                                    label={item[0]}
                                    name={`${item[0]}`}
                                    handleOnChange={handledBreedSelect}
                                />
                                {
                                    item[1] && item[1]?.map((subitem, subindex) => {
                                        return (
                                            <FilterItem
                                                key={subindex}
                                                label={`${subitem}`}
                                                name={`${item[0]}/${subitem}`}
                                                handleOnChange={handledBreedSelect}
                                                isSubItem={true}
                                            />
                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }
            </FilterContainer>
        </>
    )
}
