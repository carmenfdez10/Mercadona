import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importaciones de COMPONENTES
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Body from './componentes/Body';
import Error from './componentes/Error'; // <--- AHORA ESTÁ AQUÍ (en componentes)

// Importaciones de PÁGINAS
import Conocenos from './paginas/Conocenos';
import Supermercado from './paginas/Supermercados';
import TrabajaConNostros from './paginas/TrabajaConNosotros';
import AtencionAlCliente from './paginas/AtencionAlCliente';

export default function Web() {
    return (
      <BrowserRouter>
        <Header />
        
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          <Routes>
            {/* Ruta Principal (Home) */}
            <Route path="/" element={<Body />} />

            {/* Rutas de las páginas secundarias */}
            <Route path="/Conocenos" element={<Conocenos />} />
            <Route path="/paginas/Supermercados" element={<Supermercado />} />
            <Route path="/paginas/TrabajaConNosotros" element={<TrabajaConNostros />} />
            <Route path="/paginas/AtencionAlCliente" element={<AtencionAlCliente />} />

            {/* RUTA DE ERROR (Comodín) */}
            {/* El asterisco * atrapa cualquier ruta que no coincida con las de arriba */}
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Footer/>
      </BrowserRouter>
    );
}