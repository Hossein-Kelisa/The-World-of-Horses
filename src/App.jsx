import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BreedDetails from './pages/BreedDetails';
import NotFound from './pages/NotFound';
import FavouritesPage from './pages/FavouritesPage'; 
import { useBreeds } from './context/BreedContext';
import breedNames from './services/breedList';
import { fetchBreedInfo } from './services/fetchBreedData';
import Header from './components/Header';
import './styles/App.css';

function App() {
  const { breeds, setBreeds } = useBreeds();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (breeds.length === 0) {
      Promise.all(breedNames.map(fetchBreedInfo)).then(setBreeds);
    }
  }, [breeds.length, setBreeds]);

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<HomePage breeds={breeds} searchQuery={searchQuery} />} />
        <Route path="/breed/:id" element={<BreedDetails />} />
        <Route path="/favourites" element={<FavouritesPage />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
