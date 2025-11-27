import { Outlet } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

const Web = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {/* Outlet renderiza lo que diga la Ruta hija (el Body) */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Web;