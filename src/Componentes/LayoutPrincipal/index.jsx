import { Link, Outlet } from 'react-router-dom';
import { marcas } from '../../data';
import './layout.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo">Tienda de Celulares</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/quienes-somos">Quienes Somos</Link>

          <div className="dropdown">
            <span className="dropbtn">Productos ▼</span>
            <div className="dropdown-content">
              <Link to="/productos">Ver todos</Link>
              {marcas.map((marca) => (
                <Link key={marca.id} to={`/productos/${marca.id}`}>
                  {marca.nombre}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
