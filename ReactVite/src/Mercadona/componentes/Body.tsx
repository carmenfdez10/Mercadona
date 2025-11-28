import styles from './body.module.css';

const Body = () => {
  return (
    <main className={styles.mainContainer}>
      
      {/* 1. Sección Hero (Guacamole) */}
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

      {/* 2. Sección Compra Online (Texto Izq - Imagen Der) */}
      <div className={styles.onlineSection}>
        <div className={styles.textContent}>
            <h2>Compra online</h2>
            <p>Recibe tu pedido en casa con la misma calidad y frescura de siempre.</p>
        </div>
        <div className={styles.imageContainer}>
            <img src="/cajera.jpeg" alt="Compra Online Cajera" />
        </div>
      </div>

      {/* 3. Sección Reparto (Imagen Izq - Texto Der) */}
      <div className={styles.deliverySection}>
        <div className={styles.imageContainer}>
            <img src="/sandía.jpeg" alt="Repartidor Sandía" />
        </div>
        <div className={styles.textContent}>
            <h2>Nueva tienda online en algunas zonas</h2>
            <p>Por el momento, la nueva app y web está disponible en Valencia, Barcelona, Madrid y otras poblaciones. Introduce tu código postal arriba para ver si repartimos en tu zona. Si aún no llegamos, ¡apúntate y te avisamos!</p>
            <a href="#" className={styles.greenLink}>Avísame</a>
        </div>
      </div>

      {/* 4. NUEVA SECCIÓN: App Móvil (Fondo Verde) */}
      <div className={styles.appSection}>
        <div className={styles.imageContainerNoCrop}>
            {/* Imagen del campo, sin recortar */}
            <img src="/campo.jpg" alt="Campo y móvil Mercadona" />
        </div>
        <div className={styles.appTextContent}>
            <h2>Nuestra aplicación móvil</h2>
            <p>Descarga la App y haz tu compra estés donde estés. Disponible para iOS y Android.</p>
            {/* Botones de descarga */}
            <div className={styles.storeButtons}>
                <a href="#"><img src="/appstore.svg" alt="Descargar en App Store" /></a>
                <a href="#"><img src="/googleplay.svg" alt="Disponible en Google Play" /></a>
            </div>
        </div>
      </div>

    </main>
  );
};

export default Body;