
import { createContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// This context is used to manage the favourite horse breeds data across the application.
const FavouritesContext = createContext();

// The FavouritesProvider component provides the context to its children.
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

export{ FavouritesContext };