import { Outlet } from 'react-router-dom';
import Header from './componentes/Header';
<<<<<<< HEAD
import Footer from './componentes/Footer';
import Body from './componentes/Body';

const Web = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
=======

export default function Web() {
    return (
      <BrowserRouter>
        <Header />
        {/* Outlet renderiza lo que diga la Ruta hija (el Body) */}
        <Outlet />
        <Footer />
>>>>>>> 26336f2b9a9e0861f687a9bd4787726014328bdf

      </BrowserRouter>
    );
  }
export default Web;
