
import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage('favouriteBreeds', []);

  function toggleFavourite(id) {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((favId) => favId !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  }

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
    
  return useContext(FavouritesContext);
}
