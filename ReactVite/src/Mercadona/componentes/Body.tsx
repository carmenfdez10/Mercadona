import { useParams } from 'react-router-dom';
import styles from './body.module.css';

const Body = () => {
  const { id } = useParams();

  return (
    <main className={styles.mainContainer}>
      
      {/* Sección Hero con el fondo de Guacamole */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
            <h1>Empieza tu compra en Mercadona</h1>
            <p>Introduce tu código postal y dependiendo de tu ciudad accederás a la nueva compra online o a la web clásica.</p>
            
            <div className={styles.inputGroup}>
                <input type="text" placeholder="Código postal" className={styles.input} />
                <button className={styles.button}>ENTRAR</button>
            </div>
        </div>
      </div>

      {/* Contenido extra (Grid de productos) */}
      <div className={styles.grid}>
        {/* Solo mostramos título si hay una categoría seleccionada */}
        {id && <h2 style={{width: '100%', marginBottom: '20px'}}>Sección: {id}</h2>}
        
        <div className={styles.card}>Novedades</div>
        <div className={styles.card}>Ofertas</div>
        <div className={styles.card}>Recetas</div>
        <div className={styles.card}>Más vendidos</div>
      </div>
    </main>
  );
};

export default Body;