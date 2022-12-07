import React from 'react'
import { FilterItemView } from './styled';

export const FilterItem = ({ label, name, handleOnChange, isSubItem = false }) => {
    return (
        <FilterItemView
            isSubItem={isSubItem}
        >
            <label
            >
                <h4 >{label}</h4>
                <input type="checkbox" onChange={handleOnChange} name={name} />
            </label>
        </FilterItemView>
    )
}
