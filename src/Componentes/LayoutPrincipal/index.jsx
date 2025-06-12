import { Link, Outlet } from 'react-router-dom';
import { celulares, marcas } from '../../data';

const Header = () => {
  return (<>
    <header>
      <h1>Tienda de celulares</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quienes-somos">Quienes Somos</Link>
        <div className="dropdown">
          <span>Productos</span>
          <div className="dropdown-content">
            <Link to="/productos">Ver todos</Link>
            {marcas.map((marca) => (
              <Link key={marca.id} to={`/productos/${marca.id}`}>{marca.nombre}</Link>
            ))}
          </div>
        </div>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
            <Outlet></Outlet>
            </>
  );
};

export default Header;
