import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('Español');
  const languages = ['Español', 'Inglés', 'Francés', 'Wolof'];

  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        
        {/* LOGO: Ahora usa el archivo /public/logo.svg */}
        <Link to="/" className={styles.logoLink}>
            <img 
                src="/logo.svg" 
                alt="Mercadona Logo" 
                className={styles.logoIcon} 
                // Ajusta el ancho si es necesario, dependiendo del tamaño de tu SVG
                style={{ height: '60px', width: 'auto' }} 
            />
        </Link>

        <nav className={styles.nav}>
            <Link to="/info">Conócenos</Link>
            <Link to="/info">Supermercados</Link>
            <Link to="/info">Trabaja con nosotros</Link>
            <Link to="/info">Atención al Cliente</Link>
        </nav>
        
        <div className={styles.languageContainer}>
            <div 
                className={styles.languageSelector} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{language}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>

            {isOpen && (
                <ul className={styles.dropdown}>
                    {languages.map((lang) => (
                        <li 
                            key={lang} 
                            className={styles.dropdownItem}
                            onClick={() => handleLanguageSelect(lang)}
                        >
                            {lang}
                        </li>
                    ))}
                </ul>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;