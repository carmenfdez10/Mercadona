import { Outlet } from 'react-router-dom';
import Header from './componentes/Header';
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

export default Web;