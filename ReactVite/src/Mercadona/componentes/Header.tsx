import { Link } from "react-router-dom";
import estilos from './header.module.css';
import { useState } from 'react';

// Componente simulado para el selector de idioma
const LanguageSelector = () => (
    <div className={estilos.languageSelector}>
        Español <span style={{ marginLeft: '5px' }}>&#9660;</span> 
    </div>
);

export default function Header() {

    const logoSrc = "/mercadona.png"; 

    return (
        <div className={estilos.headerWrapper}>
            <header className={estilos.header}>
            {/* Primer grupo: Logo y Enlaces, a la izquierda */}
            <nav className={estilos.nav}> 
            {/* Logo */}
                <img  src={logoSrc}  alt="Logo de Mercadona" style={{ height: '35px' }} className={estilos.logo} />
                <div className={estilos.linksContainer}>
                    <Link to="/Conocenos">Conócenos</Link>
                    <Link to="/paginas/Supermercados">Supermercados</Link>
                    <Link to="/paginas/TrabajaConNosotros">Trabaja con nosotros</Link>
                    <Link to="/paginas/AtencionAlCliente">Atención al cliente</Link>
                </div>
            </nav>
            
            {/* Elemento de idioma y el botón de menú */}
            <div className={estilos.rightSection}>
                <LanguageSelector />
            </div>
            </header>
         </div>
  )
}