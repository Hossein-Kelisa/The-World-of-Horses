import { useContext } from 'react';
import { BreedContext } from '../context/BreedContext';

export default function useBreeds() {
  return useContext(BreedContext);
}
