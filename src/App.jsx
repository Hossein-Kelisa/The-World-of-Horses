import {  useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useBreeds from './hooks/useBreeds';
import Header from './components/Header';
import './styles/App.css';
import useBreedLoader from './hooks/useBreedLoader';
import AppRoutes from './router/AppRoutes';


function App() {
  const { breeds } = useBreeds();
  const [searchQuery, setSearchQuery] = useState('');

  useBreedLoader();

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} />
      <AppRoutes breeds={breeds} searchQuery={searchQuery} />
    </Router>
  );
}

export default App;
