import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BreedDetails from '../pages/BreedDetails';
import NotFound from '../pages/NotFound';
import FavouritesPage from '../pages/FavouritesPage';

export default function AppRoutes({ breeds, searchQuery }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage breeds={breeds} searchQuery={searchQuery} />} />
      <Route path="/breed/:id" element={<BreedDetails />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
