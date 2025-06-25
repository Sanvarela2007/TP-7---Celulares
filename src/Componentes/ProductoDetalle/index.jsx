import { useParams, useNavigate } from 'react-router-dom';
import { celulares } from '../../data';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const celular = celulares.find(c => c.id === parseInt(id));

  if (!celular) return <p>Producto no encontrado</p>;

  return (
    <div className="detalle-container">
      <button className="btn-volver" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="detalle-card-wrapper">
        <img src={celular.fotos[0]} alt={celular.nombre} className="detalle-img" />
        <h2 className="detalle-nombre">{celular.nombre}</h2>
        <p className="detalle-precio">${celular.precio}</p>
        <p className="detalle-descripcion">{celular.descripcion || 'Sin descripción disponible.'}</p>
      </div>
    </div>
  );
};

export default ProductoDetalle;
