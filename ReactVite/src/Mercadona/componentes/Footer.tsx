import styles from './footer.module.css';
// Mantenemos los iconos de redes sociales, pero quitamos el 'Phone' porque usaremos tu imagen
import { Mail, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      {/* --- PARTE SUPERIOR --- */}
      <div className={styles.mainContent}>
        
        {/* Columna 1: Cliente */}
        <div className={styles.column}>
            <h3>Cliente</h3>
            <ul>
                <li><a href="#">Supermercados</a></li>
                <li><a href="#">Consejos</a></li>
                <li><a href="#">Factura cliente</a></li>
            </ul>
        </div>

        {/* Columna 2: Trabajador */}
        <div className={styles.column}>
            <h3>Trabajador</h3>
            <ul>
                <li><a href="#">Trabaja con nosotros</a></li>
            </ul>
        </div>

        {/* Columna 3: Proveedor */}
        <div className={styles.column}>
            <h3>Proveedor</h3>
            <ul>
                <li><a href="#">Factura-Me</a></li>
                <li><a href="#">Portal Trinidad</a></li>
            </ul>
        </div>

        {/* Columna 4: Sociedad */}
        <div className={styles.column}>
            <h3>Sociedad</h3>
            <ul>
                <li><a href="#">Actualidad</a></li>
                <li><a href="#">Sala de prensa</a></li>
                <li><a href="#">Conoce Mercadona</a></li>
                <li><a href="#">Mercadona en Portugal</a></li>
                <li><a href="#">Cuidemos el Planeta</a></li>
            </ul>
        </div>

        {/* Columna 5: Contacto (Derecha) */}
        <div className={styles.contactColumn}>
            {/* Bloque del Teléfono con tu imagen */}
            <div className={styles.phoneBlock}>
                {/* Aquí va tu imagen de callcenter.png */}
                <img 
                    src="/callcenter.png" 
                    alt="Servicio al Cliente" 
                    className={styles.callCenterImg} 
                />
                <span className={styles.phoneNumber}>800 500 220</span>
            </div>
            
            {/* Redes Sociales */}
            <div className={styles.socialIcons}>
                <a href="#" title="Email"><Mail size={24} /></a>
                <a href="#" title="Facebook"><Facebook size={24} /></a>
                <a href="#" title="X"><Twitter size={24} /></a>
                <a href="#" title="YouTube"><Youtube size={24} /></a>
                <a href="#" title="Instagram"><Instagram size={24} /></a>
                <a href="#" title="LinkedIn"><Linkedin size={24} /></a>
            </div>
        </div>

      </div>

      {/* --- PARTE INFERIOR (Legal) --- */}
      <div className={styles.legalBar}>
        <div className={styles.copyright}>
            © Mercadona S.A. A46103834. Todos los derechos reservados.
        </div>
        <div className={styles.legalLinks}>
            <a href="#">Accesibilidad</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Política de cookies</a>
            <a href="#">Términos y condiciones</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;