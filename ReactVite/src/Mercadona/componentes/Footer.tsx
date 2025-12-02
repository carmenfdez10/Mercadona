import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Mercadona S.A. Todos los derechos reservados.</p>
      <div className={styles.links}>
        <span>Condiciones de uso</span>
        <span>Política de privacidad</span>
      </div>
    </footer>
  );
};

export default Footer;