import { Link } from 'react-router-dom';
import { marcas } from '../data/data';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/quienes-somos">Quienes Somos</Link>
      <div>
        Productos ▼
        <ul>
          <li><Link to="/productos">Ver todos</Link></li>
          {marcas.map(m => (
  <li key={m.id}>
    <Link to={`/productos/marca/${m.id}`}>{m.nombre}</Link>
  </li>
))}

        </ul>
      </div>
      <Link to="/contacto">Contacto</Link>
    </nav>
  </header>
);

export default Header;
