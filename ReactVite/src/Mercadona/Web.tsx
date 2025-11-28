import { Outlet } from 'react-router-dom';
import Header from './componentes/Header';

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
export default Web;
