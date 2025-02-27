import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Citas from './pages/Citas';
import EquipoMedico from './pages/EquipoMedico';



const App = () => {
  return (
    <Router>
      <div>
        {/* Header aparece en todas las páginas */}
        <Header />

        {/* Contenido principal con rutas */}
        <main style={{ padding: '30px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Citas" element={<Citas />} />
            <Route path="/EquipoMedico" element={<EquipoMedico />} />
          </Routes>
        </main>

        {/* Footer aparece en todas las páginas */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
