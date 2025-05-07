import { createContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// This context is used to manage the horse breeds data across the application.
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

