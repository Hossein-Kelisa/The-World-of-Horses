import BreedCard from '../components/BreedCard';

function HomePage({ breeds, searchQuery }) {

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>All Horse Breeds</h1>
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
