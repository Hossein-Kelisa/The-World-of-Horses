import { useParams } from 'react-router-dom';
import { useBreeds } from '../context/BreedContext';

function BreedDetails() {
  const { id } = useParams();
  const { breeds } = useBreeds();
  const breed = breeds.find((b) => b.id === id);

  if (!breed) return <p>Breed not found.</p>;

  return (
    <div>
      <h1>{breed.name}</h1>
      <img src={breed.image} alt={breed.name} width="300" />
      <p>{breed.description}</p>
    </div>
  );
}

export default BreedDetails;