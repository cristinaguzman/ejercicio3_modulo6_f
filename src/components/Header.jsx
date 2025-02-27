import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#1d3a6d', padding: '10px', color: 'white' }}>
      <nav>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/team" style={{ margin: '0 10px', color: 'white' }}>Nosotros</Link>
        <Link to="/Citas" style={{ margin: '0 10px', color: 'white' }}>Citas</Link>
        <Link to="/EquipoMedico" style={{ margin: '0 10px', color: 'white' }}>Equipo Médico</Link>
        
      </nav>
    </header>
  );
};

export default Header;
