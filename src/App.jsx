import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LayoutPrincipal from './Componentes/LayoutPrincipal';
import Home from './Componentes/Home';

import Productos from './Componentes/Productos';

import Contacto from './Componentes/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPrincipal />}>
          <Route index element={<Home />} />
        
          <Route path="productos" element={<Productos />} />
         
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
