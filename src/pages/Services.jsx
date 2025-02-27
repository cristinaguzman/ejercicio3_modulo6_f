
import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";

const Team = () => {
  const [doctors, setDoctors] = useState([]);
  const [specialty, setSpecialty] = useState("");

  useEffect(() => {
    fetch("/api/doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data));
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    specialty ? doctor.specialty === specialty : true
  );

  return (
    <div>
      <h2>Equipo Médico</h2>
      <select onChange={(e) => setSpecialty(e.target.value)}>
        <option value="">Todas las especialidades</option>
        <option value="Cardiología">Cardiología</option>
        <option value="Pediatría">Pediatría</option>
        <option value="Cardiología">Neurología</option>
        <option value="Pediatría">Dental</option>
      </select>
      <div>
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} name={doctor.name} specialty={doctor.specialty} />
        ))}
      </div>
    </div>
  );
};

export default Team;
