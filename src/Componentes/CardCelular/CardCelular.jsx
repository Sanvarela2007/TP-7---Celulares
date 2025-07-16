import { Link } from 'react-router-dom';
import { marcas } from '../../data';
import './CardCelular.css';

const CelularCard = ({ celular }) => {
  const marca = marcas.find(m => m.id === celular.marcaId);

  return (
    <div className="card">
      <img src={celular.fotos[0]} alt={celular.nombre} className="card-img" />
      <div className="card-body">
        {marca && (
          <Link to={`/productos/marca/${marca.id}`} className="card-marca">
            {marca.nombre}
          </Link>
        )}
        <h3 className="card-title">{celular.nombre}</h3>
        <p className="card-price">${celular.precio}</p>
        <Link to={`/producto/${celular.id}`} className="card-button">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default CelularCard;
