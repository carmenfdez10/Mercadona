import { Outlet, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Conocenos from './paginas/Conocenos';
import Supermercado from './paginas/Supermercados';
import TrabajaConNostros from './paginas/TrabajaConNosotros';
import AtencionAlCliente from './paginas/AtencionAlCliente';
import Footer from './componentes/Footer';

export default function Web() {
    return (
      <BrowserRouter>
        <Header />
        {/* Outlet renderiza lo que diga la Ruta hija (el Body) */}
        <Outlet />
        <main>
          <Routes>
            <Route path="/ReactVite/src/Mercadona/paginas/Conocenos.tsx" element={<Conocenos />} />
            <Route path="/Conocenos" element={<Conocenos />} />
            <Route path="/paginas/Supermercados" element={<Supermercado />} />
            <Route path="/paginas/TrabajaConNosotros" element={<TrabajaConNostros />} />
            <Route path="/paginas/AtencionAlCliente" element={<AtencionAlCliente />} />
          </Routes>
        </main>
        <Footer />

      </BrowserRouter>
    );
  }
