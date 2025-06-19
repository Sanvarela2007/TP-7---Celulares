import { Link } from 'react-router-dom';
import './CardCelular.css';

const CelularCard = ({ celular }) => (
  <div className="card">
    <img src={celular.fotos[0]} alt={celular.nombre} className="card-img" />
    <div className="card-body">
      <h3 className="card-title">{celular.nombre}</h3>
      <p className="card-price">${celular.precio}</p>
      <Link to={`/producto/${celular.id}`} className="card-button">
        Ver más
      </Link>
    </div>
  </div>
);

export default CelularCard;
