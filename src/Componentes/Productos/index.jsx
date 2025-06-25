import { useParams } from 'react-router-dom';
import { celulares } from '../../data'; // Ajustá si hace falta
import CelularCard from '../CardCelular/CardCelular';
import './Productos.css';

const Productos = () => {
  const { idMarca } = useParams();

  const filtrados = idMarca
    ? celulares.filter(c => c.marcaId === parseInt(idMarca))
    : celulares;

  return (
    <div className="grid-container">
      {filtrados.map(c => (
        <CelularCard key={c.id} celular={c} />
      ))}
    </div>
  );
};

export default Productos;
