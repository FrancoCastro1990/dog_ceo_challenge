import styled from 'styled-components';

export const FilterToggleButton = styled.button`
    position: fixed;
    right: 1rem;
    top: 1rem;
    background-color: tomato;
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    display: ${({ open }) => open ? 'none' : 'flex'};
    transition: all 0.2s ease;
    border: none;
    outline: none;
    text-align: center;
    cursor: pointer;
    z-index: 1;
    &:hover {
        background-color: #ff5f5f;
        transform: scale(1.05);
        box-shadow: 0 0 2rem 0.5rem rgba(203, 66, 66, 0.2);
    }
`

export const FilterItemView = styled.div`
    label {
        padding: 1rem 6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
            background-color: tomato;
        }
        h4 {
            margin-left: ${({ isSubItem }) => isSubItem ? '2rem' : '0px'};
            color: white;
        }
        @media screen and (max-width: 768px) {
            padding: 1rem 2rem;
        }
    }
    
`

export const FilterContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    backdrop-filter: blur(10px);
    background-color: rgba(94, 94, 94, 0.7);
    transition: all 0.5s ease;
    height: ${({ open }) => open ? '100vh' : '0'};
    overflow: ${({ open }) => open ? 'scroll' : 'hidden'};
    overflow-x: hidden;
    opacity: ${({ open }) => open ? 1 : 0};
`

export const CloseButton = styled.button`
    position: fixed;
    right: 2rem;
    top: 1rem;
    background-color: tomato;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    display: ${({ open }) => open ? 'flex' : 'none'};
    z-index: ${({ open }) => open ? 2 : -1};
    transition: all 0.2s ease;
    border: none;
    outline: none;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #ff5f5f;
        transform: scale(1.05);
        box-shadow: 0 0 2rem 0.5rem rgba(203, 66, 66, 0.2);
    }
    @media screen and (max-width: 768px) {
        right: calc(50% - 2rem);
    }
`