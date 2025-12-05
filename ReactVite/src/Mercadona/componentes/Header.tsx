import { Link } from "react-router-dom";
import estilos from './header.module.css';
import { useState } from 'react';

// Componente para el selector de idioma
const LanguageSelector = () => (
    <div className={estilos.languageSelector}>
        Español <span style={{ marginLeft: '5px' }}>&#9660;</span> 
    </div>
);

// Componente de Enlaces de Navegación (reutilizable para escritorio y móvil)
const NavLinks = ({ isMobile = false, onLinkClick }: { isMobile?: boolean, onLinkClick: () => void }) => (
    <div className={isMobile ? estilos.mobileLinksContainer : estilos.linksContainer}>
        {/* Aquí pasamos la función onLinkClick al componente Link */}
        <Link to="/Conocenos" onClick={onLinkClick}>Conócenos</Link>
        <Link to="/paginas/Supermercados" onClick={onLinkClick}>Supermercados</Link>
        <Link to="/paginas/TrabajaConNosotros" onClick={onLinkClick}>Trabaja con nosotros</Link>
        <Link to="/paginas/AtencionAlCliente" onClick={onLinkClick}>Atención al cliente</Link>
    </div>
);

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    // Usamos la URL del logo de la imagen
    const logoSrc = "/mercadona.png"; 
    // Función para cerrar el menú. Es la que pasaremos como prop.
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={estilos.header}>
      {/* 1. Botón de Hamburguesa (Visible solo en móvil) */}
        <button className={estilos.menuToggle} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation">
                {/* Ícono de hamburguesa con 3 líneas */}
                <span className={estilos.bar}></span>
                <span className={estilos.bar}></span>
                <span className={estilos.bar}></span>
        </button>
        <nav className={estilos.nav}> 
            <img src={logoSrc} alt="Logo de Mercadona" style={{ height: '35px' }} className={estilos.logo} />
            
            {/* Escritorio: No necesita cerrar nada, el menú está siempre visible. */}
            <NavLinks onLinkClick={() => {}} />
        </nav>
        <LanguageSelector />
        {/* 2. Menú Desplegable Móvil */}
        {/* Menú Desplegable Móvil: ¡Aquí es donde es crucial! */}
        <div className={`${estilos.mobileMenu} ${isOpen ? estilos.open : ''}`}>
                {/* Le pasamos la función closeMenu */}
                <NavLinks isMobile={true} onLinkClick={closeMenu} />
            </div>
    </header>
    )
}
