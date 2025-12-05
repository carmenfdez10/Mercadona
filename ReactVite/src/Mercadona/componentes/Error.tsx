import { Link } from 'react-router-dom';
import styles from './error.module.css'; // Importa el CSS desde la misma carpeta

const Error = () => {
  return (
    <div className={styles.container}>
      {/* Icono decorativo */}
      <span className={styles.icon}>🛒</span>
      
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>¡Ups! Este pasillo no existe</h2>
      
      <p className={styles.description}>
        Parece que el producto o la página que buscas no está en nuestro supermercado o ha cambiado de sitio.
      </p>
      
      {/* Botón para volver al inicio */}
      <Link to="/" className={styles.button}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error;