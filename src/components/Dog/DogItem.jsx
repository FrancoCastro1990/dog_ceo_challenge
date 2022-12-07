import React from 'react'
import { DogItemCard } from './styled'

export const DogItem = ({ dogItem }) => {
    return (
        <DogItemCard
            role={'listitem'}
            rotateValue={Math.random() * 10 - 5}
        >
            <img src={dogItem?.image} alt={dogItem?.breed} />
            <h3>{dogItem?.breed}</h3>
        </DogItemCard>
    )
}
