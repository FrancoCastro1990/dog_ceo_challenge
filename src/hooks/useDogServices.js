import { useCallback, useState } from 'react';
import { useClient } from './useClient';

export const useDogServices = () => {

    const [dogList, setDogList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [breedList, setBreedList] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { callClient } = useClient();

    const populateBreedList = useCallback(async () => {
        setLoading(true);
        const response = await callClient('https://dog.ceo/api/breeds/list/all', 'GET');
        if (response) {
            const breeds = response?.message;
            setBreedList(breeds);
            setLoading(false);
        }
    }, [callClient]);

    const getDogImage = useCallback(async (breed) => {
        setLoading(true);
        return new Promise(async (resolve, reject) => {
            const response = await callClient(`https://dog.ceo/api/breed/${breed}/images/random`, 'GET');
            if (response) {
                const newDogItem = {
                    breed,
                    image: response?.message
                }
                setDogList([...dogList, newDogItem]);
                setLoading(false);
                resolve();
            }
            setLoading(false);
            reject();

        })
    }, [dogList, callClient]);

    const removeBreed = (breed) => {
        const filteredDogsImages = dogList.filter(dog => dog.breed !== breed);
        setDogList(filteredDogsImages);
    }

    return {
        getDogImage,
        removeBreed,
        loading,
        dogList,
        populateBreedList,
        breedList,
        isFilterOpen,
        setIsFilterOpen
    };
}
