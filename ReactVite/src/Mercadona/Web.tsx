import { Outlet, BrowserRouter } from 'react-router-dom';
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
        <Footer />

      </BrowserRouter>
    );
  }
