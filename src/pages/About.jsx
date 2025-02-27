import React, { useState, useRef } from "react";

const Appointments = () => {
  const [appointment, setAppointment] = useState({ name: "", date: "", doctor: "" });
  const nameInputRef = useRef(null);

  const handleInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita agendada:", appointment);
  };

  return (
    <div>
      <h2>Agendar Cita</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameInputRef}
          name="name"
          placeholder="Nombre del paciente"
          onChange={handleInputChange}
        />
        <input
          name="date"
          type="date"
          onChange={handleInputChange}
        />
        <input
          name="doctor"
          placeholder="Doctor"
          onChange={handleInputChange}
        />
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default Appointments;

