import { Link } from 'react-router-dom';
import { marcas } from '../../data';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="logo">Tienda de Celulares</h1>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/quienes-somos">Quienes Somos</Link>
      <div className="dropdown">
        <button className="dropbtn">
          Productos <span style={{fontSize: '0.8em'}}>▼</span>
        </button>
        <div className="dropdown-content">
          <Link to="/productos">Ver todos</Link>
          {marcas.map(m => (
            <Link key={m.id} to={`/productos/marca/${m.id}`}>
              {m.nombre}
            </Link>
          ))}
        </div>
      </div>
      <Link to="/contacto">Contacto</Link>
    </nav>
  </header>
);

export default Header;