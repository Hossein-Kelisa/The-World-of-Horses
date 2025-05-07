import useBreeds from '../hooks/useBreeds';
import useFavourites from '../hooks/useFavourites';
import BreedCard from '../components/BreedCard';

// This component displays the favourite horse breeds.
function FavouritesPage() {
  const { breeds } = useBreeds();
  const { favourites } = useFavourites();

// Filter the breeds to only include the ones that are marked as favourites
  const favouriteBreeds = breeds.filter(breed => favourites.includes(breed.id));

  return (
    <div className="favourites-page">
      <h1>Favourites</h1>
      <div className="breed-list">
        {favouriteBreeds.length === 0 ? (
          <p>No favourite breeds yet.</p>
        ) : (
          favouriteBreeds.map(breed => (
            <BreedCard key={breed.id} breed={breed} />
            
          ))
        )}
      </div>
    </div>
  );
}

export default FavouritesPage;
