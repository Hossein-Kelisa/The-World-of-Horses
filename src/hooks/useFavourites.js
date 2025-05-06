import { useContext } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';

export default function useFavourites() {
  return useContext(FavouritesContext);
}
