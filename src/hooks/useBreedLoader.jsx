import { useEffect ,useState } from 'react';
import breedNames from '../services/breedList';
import { fetchBreedInfo } from '../services/fetchBreedData';
import useBreeds from './useBreeds';

export default function useBreedLoader() {
  const { breeds, setBreeds } = useBreeds();
  const[error, setError] = useState(null);

  useEffect(() => {
    if (breeds.length === 0) {
      Promise.all(breedNames.map(fetchBreedInfo))
      .then(setBreeds)
      .catch(err => {
        console.error('Error loading breeds:', err);
        setError('Failed to load breeds');
      });
    }
  }, [breeds.length, setBreeds]);
  
  return{ error};
}
