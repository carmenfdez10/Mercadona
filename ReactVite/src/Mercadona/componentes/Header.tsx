import { Link } from "react-router-dom";
import React from 'react';
import estilos from './header.module.css';

// Componente simulado para el selector de idioma
const LanguageSelector = () => (
    <div className={estilos.languageSelector}>
        Español <span style={{ marginLeft: '5px' }}>&#9660;</span> {/* Flecha hacia abajo */}
    </div>
);

export default function Header() {
  // Usamos la URL del logo de la imagen
  const logoSrc = "/mercadona.png"; // Usando el nombre que ya tenías

  return (
    <header className={estilos.header}>
      
      {/* Primer grupo: Logo y Enlaces, a la izquierda */}
      <nav className={estilos.nav}> 
       {/* Logo */}
        <img 
          src={logoSrc} 
          alt="Logo de Mercadona" 
          style={{ height: '35px' }} // Altura ajustada para que parezca la imagen
          className={estilos.logo}
        />

        {/* Contenedor de los enlaces */}
        <div className={estilos.linksContainer}>
          {/* Nombres ajustados para coincidir con la imagen */}
          <Link to="/Conocenos">Conócenos</Link>
          <Link to="/paginas/Supermercados">Supermercados</Link>
          <Link to="/paginas/TrabajaConNosotros">Trabaja con nosotros</Link>
          <Link to="/paginas/AtencionAlCliente">Atención al cliente</Link>
        </div>
      </nav>

      {/* Elemento de idioma, empujado a la derecha por 'justify-content: space-between' en .header */}
      <LanguageSelector />
    </header>
  )
}