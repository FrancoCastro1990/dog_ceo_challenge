import { createContext } from "react";

export const DogContext = createContext({
    dogList: [],
    breedList: [],
    loading: false,
    getDogImage: () => { },
    removeBreed: () => { },
    populateBreedList: () => { },
    isFilterOpen: false,
    setIsFilterOpen: () => { }
});