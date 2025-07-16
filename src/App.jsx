import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LayoutPrincipal from './Componentes/LayoutPrincipal';
import Home from './Componentes/Home';
import Productos from './Componentes/Productos';
import ProductoDetalle from './Componentes/ProductoDetalle';
import Contacto from './Componentes/Contacto';
import QuienesSomos from './Componentes/QuienesSomos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPrincipal />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/marca/:idMarca" element={<Productos />} />
          <Route path="producto/:id" element={<ProductoDetalle />} /> 
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
