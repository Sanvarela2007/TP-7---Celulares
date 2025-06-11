import { Link } from 'react-router-dom';

const CelularCard = ({ celular }) => (
  <div className="card">
    <img src={celular.fotos[0]} alt={celular.nombre} style={{ width: '100%' }} />
    <h3>{celular.nombre}</h3>
    <p>${celular.precio}</p>
    <Link to={`/producto/${celular.id}`}>Ver más</Link>
  </div>
);

export default CelularCard;
