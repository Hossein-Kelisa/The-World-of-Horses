import { Link } from 'react-router-dom';
import useFavourites from '../hooks/useFavourites';

// This component displays a card for each horse breed.
function BreedCard({ breed }) {  
  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = favourites.includes(breed.id);  

  const description = breed.description ? breed.description.slice(0, 100) : "No description available";

  const imageSrc = breed.image ? breed.image : '/path/to/fallback-image.jpg';  

  return (
    <div className="breed-card">      
      <img src={imageSrc} alt={breed.name} width="200"/>  
      <h3>{breed.name}</h3>    
      <p>{description}...</p>  
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
