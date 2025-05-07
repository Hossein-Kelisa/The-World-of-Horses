import BreedCard from '../components/BreedCard';
import useBreedLoader from '../hooks/useBreedLoader';

// This component displays all horse breeds and allows searching through them.
function HomePage({ breeds, searchQuery }) {
  const { error} = useBreedLoader();
  
  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>All Horse Breeds</h1>
      {error && <p className="error-message">Error loading breeds: {error}</p>}
      <div className="breed-list">
        {filteredBreeds.length === 0 ? (
          <p>No breeds found.</p>
        ) : (
          filteredBreeds.map((breed) => <BreedCard key={breed.id} breed={breed} />)
        )}
      </div>
    </div>
  );
}

export default HomePage;
