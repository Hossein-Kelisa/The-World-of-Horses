import { useEffect } from 'react';
import breedNames from '../services/breedList';
import { fetchBreedInfo } from '../services/fetchBreedData';
import useBreeds from './useBreeds';

export default function useBreedLoader() {
  const { breeds, setBreeds } = useBreeds();

  useEffect(() => {
    if (breeds.length === 0) {
      Promise.all(breedNames.map(fetchBreedInfo)).then(setBreeds);
    }
  }, [breeds.length, setBreeds]);
}
