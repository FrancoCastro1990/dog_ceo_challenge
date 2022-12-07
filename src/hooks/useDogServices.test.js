// create test form useDogServices, using react render hook

import { act, renderHook } from '@testing-library/react';

import { useDogServices } from './useDogServices';

const dataMock = {
    affenpinscher: [],
    african: [],
    airedale: [],
    akita: [],
}

var mockCallClient = null

jest.mock('./useClient', () => {
    return {
        useClient: () => {
            return mockCallClient;
        },
    };
})

describe('useDogServices', () => {

    test('should get breed list', async () => {
        mockCallClient = {
            callClient: () => {
                return Promise.resolve({
                    message: dataMock,
                    status: 'success',
                });
            }
        }
        const { result } = renderHook(() => useDogServices());
        await act(async () => {
            await result.current.populateBreedList();
        });
        expect(result.current.breedList).toEqual(dataMock);

    });

    test('should get dog image', async () => {
        mockCallClient = {
            callClient: () => {
                return Promise.resolve({
                    message: 'https://images.dog.ceo/breeds/basenji/n02110806_5642.jpg',
                    status: 'success',
                });
            }
        }
        const { result } = renderHook(() => useDogServices());
        await act(async () => {
            await result.current.getDogImage('basenji');
        });
        expect(result.current.dogList).toHaveLength(1);
        expect(result.current.dogList[0].breed).toEqual('basenji');

    });

    test('should remove breed', async () => {
        mockCallClient = {
            callClient: () => {
                return Promise.resolve({
                    message: 'https://images.dog.ceo/breeds/basenji/n02110806_5642.jpg',
                    status: 'success',
                });
            }
        }
        const { result } = renderHook(() => useDogServices());
        await act(async () => {
            await result.current.getDogImage('basenji');
        });
        await act(async () => {
            await result.current.getDogImage('affenpinscher');
        });
        await act(async () => {
            await result.current.getDogImage('african');
        });
        await act(async () => {
            await result.current.getDogImage('airedale');
        });
        await act(async () => {
            await result.current.getDogImage('akita');
        });
        expect(result.current.dogList).toHaveLength(5);
        act(() => {
            result.current.removeBreed('basenji');
        });
        expect(result.current.dogList).toHaveLength(4);
        expect(result.current.dogList[0].breed).toEqual('affenpinscher');
        expect(result.current.dogList[1].breed).toEqual('african');
        expect(result.current.dogList[2].breed).toEqual('airedale');
        expect(result.current.dogList[3].breed).toEqual('akita');
    });
});