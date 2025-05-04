import { Link } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';

function BreedCard({ breed }) {  
  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = favourites.includes(breed.id);  

  return (
    <div className="breed-card">      
      <img src={breed.image} alt={breed.name} width="200"/>  
      <h3>{breed.name}</h3>    
      <p>{breed.description.slice(0, 100)}...</p> 
      <div className="breed-actions"> 
        <Link to={`/breed/${encodeURIComponent(breed.id)}`}>Read More</Link>  
        <button  
          className={`heart-button ${isFavourite ? 'active' : ''}`}  
          onClick={() => toggleFavourite(breed.id)}  
        >
          ♥  
        </button>
      </div>
    </div>
  );
}

export default BreedCard;