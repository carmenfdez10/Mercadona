import { Link } from "react-router-dom";
import estilos from './header.module.css';
import { useState } from 'react';

// Componente para el selector de idioma
const LanguageSelector = () => (
    <div className={estilos.languageSelector}>
        Español <span style={{ marginLeft: '5px' }}>&#9660;</span> 
    </div>
);

export default function Header() {
  // Usamos la URL del logo de la imagen
  const logoSrc = "/mercadona.png"; 

  return (
    <header className={estilos.header}>
      
      <nav className={estilos.nav}> 
        <img src={logoSrc} alt="Logo de Mercadona" style={{ height: '35px' }} className={estilos.logo} />

        {/* Contenedor de los enlaces */}
        <div className={estilos.linksContainer}>
          <Link to="/Conocenos">Conócenos</Link>
          <Link to="/paginas/Supermercados">Supermercados</Link>
          <Link to="/paginas/TrabajaConNosotros">Trabaja con nosotros</Link>
          <Link to="/paginas/AtencionAlCliente">Atención al cliente</Link>
        </div>
      </nav>
      <LanguageSelector />
    </header>
  )
}
export default Header;
