import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

export default function Web() {
    return (
      <BrowserRouter>
        <Header />
  
        {/* Navbar debajo del header */}
        <Navbar />
        
        <div className={styles.layout}>
          <Aside />
  
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
        </div>
  
        <Footer />
      </BrowserRouter>
    );
  }