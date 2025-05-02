import { useParams } from 'react-router-dom';

function BreedDetails() {
  const { id } = useParams();

  return <h1>Details for breed ID: {id}</h1>;
}

export default BreedDetails;
