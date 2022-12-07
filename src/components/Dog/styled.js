import styled from 'styled-components'

export const DogItemCard = styled.div`
    width: 20rem;
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.2);
    transform: rotate(${({ rotateValue }) => rotateValue}deg);
    img {
        width: 20rem;
        border-radius: 0.75rem;
        object-fit: cover;
    }
    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
    }
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 2rem 0.5rem rgba(0, 0, 0, 0.2);

    }
`
export const DogListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 1rem;
    top: 2rem;
    position: ${({ isFilterOpen }) => isFilterOpen ? 'fixed' : 'absolute'};
    padding: 4rem 1rem;
    box-sizing: border-box;
`