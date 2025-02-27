import React from "react";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Hospital Bienestar</h1>
      <p>
        Bienvenido al Hospital Bienestar, donde nos dedicamos a proporcionar atención médica de excelencia con calidez y profesionalismo.
      </p>
      <p>
        Nuestra misión es mejorar la calidad de vida de nuestros pacientes a través de servicios de salud confiables, innovadores y humanos.
      </p>
      <div style={{ marginTop: "20px" }}>
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>Atención médica general</li>
          <li>Especialidades médicas</li>
          <li>Cirugías de alta complejidad</li>
          <li>Emergencias 24/7</li>
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>¿Por qué elegirnos?</h2>
        <p>
          Contamos con un equipo médico altamente capacitado, tecnología de última generación y un compromiso constante con la innovación en salud.
        </p>
      </div>
    </div>
  );
};

export default Home;
