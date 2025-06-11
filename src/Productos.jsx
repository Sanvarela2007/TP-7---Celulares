import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import CelularCard from '../components/CelularCard';

const Productos = () => {
  const { idMarca } = useParams();
  const filtrados = idMarca ? celulares.filter(c => c.marcaId === parseInt(idMarca)) : celulares;

  return (
    <div className="grid">
      {filtrados.map(c => <CelularCard key={c.id} celular={c} />)}
    </div>
  );
};

export default Productos;
