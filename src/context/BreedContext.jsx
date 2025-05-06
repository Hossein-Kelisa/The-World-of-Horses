import { createContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


const BreedContext = createContext();

export function BreedProvider({ children }) {
  const [breeds, setBreeds] = useLocalStorage('horseBreeds', []);
  return (
    <BreedContext.Provider value={{ breeds, setBreeds }}>
      {children}
    </BreedContext.Provider>
  );
}
export { BreedContext };

