import React, { useEffect } from 'react';
import { DogList } from './components/Dog/DogList';
import { DogContext } from './contexts/DogContext';
import { OpenFilter } from './components/Filter/OpenFilter';
import { useDogServices } from './hooks/useDogServices';
import styled from 'styled-components';
import happy from './assets/img/happy.png'

const Headers = styled.header`
  text-align: center;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`
const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  transition: all 0.5s ease-in-out;
  animation: ${({ isLoading }) => isLoading ? 'App-logo-spin infinite 1s linear' : 'none'};

  @keyframes App-logo-spin {
    from {
      transform: scale(1)
    }
    to {
      transform: scale(1.1);
    }
  }
  `

function App() {

  const {
    getDogImage,
    removeBreed,
    loading,
    dogList,
    populateBreedList,
    breedList,
    isFilterOpen,
    setIsFilterOpen
  } = useDogServices();

  useEffect(() => {
    populateBreedList();
  }, [populateBreedList]);

  return (
    <div>
      <Headers>
        <h1>Dogs Challenge</h1>
        <Logo src={happy} alt="happy dog" isLoading={loading} /></Headers>
      <DogContext.Provider value={{
        getDogImage,
        removeBreed,
        loading,
        breedList,
        dogList,
        isFilterOpen,
        setIsFilterOpen
      }}>
        <DogList />
        <OpenFilter />
      </DogContext.Provider>
    </div>
  );
}

export default App;
