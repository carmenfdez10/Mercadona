import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Web from './Mercadona/Web';
import Body from './Mercadona/componentes/Body';
import PaginaInfo from './Mercadona/componentes/PaginaInfo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web />}>
          {/* Ruta por defecto (Inicio) */}
          <Route index element={<Body />} />
          
          {/* Ruta dinámica para categorías de productos */}
          <Route path="categoria/:id" element={<Body />} />
          
          {/* Nueva ruta para las opciones del menú */}
          <Route path="info" element={<PaginaInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;