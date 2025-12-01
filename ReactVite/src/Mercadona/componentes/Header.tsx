import { Link } from "react-router-dom";
import estilos from './header.module.css';
import { useState } from 'react';

// Componente simulado para el selector de idioma
const LanguageSelector = () => (
    <div className={estilos.languageSelector}>
        Español <span style={{ marginLeft: '5px' }}>&#9660;</span> {/* Flecha hacia abajo */}
    </div>
);

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
 // Usamos la URL del logo de la imagen
    const logoSrc = "/mercadona.png"; 
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={estilos.headerWrapper}>
            <header className={estilos.header}>
            {/* Primer grupo: Logo y Enlaces, a la izquierda */}
            <nav className={estilos.nav}> 
            {/* Logo */}
                <img  src={logoSrc}  alt="Logo de Mercadona" style={{ height: '35px' }} className={estilos.logo} />
                {/* Contenedor de los enlaces */}
                {/* Contenedor de los enlaces. La clase 'menuOpen' se añade si el menú está abierto */}
                <div className={`${estilos.linksContainer} ${isMenuOpen ? estilos.menuOpen : ''}`}>
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