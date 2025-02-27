import React, { useState, useEffect } from 'react';

const EquipoMedico = () => {
    const [doctors, setDoctors] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // Simulación de llamada a una API para obtener datos de los doctores
        const fetchDoctors = async () => {
            const data = [
                { id: 1, name: 'Dr. Juan Pérez', specialty: 'Cardiología' },
                { id: 2, name: 'Dra. Ana López', specialty: 'Neurología' },
                { id: 3, name: 'Dr. Pedro Gómez', specialty: 'Pediatría' },
                { id: 1, name: 'Dra. Pamela Donoso', specialty: 'Dental' },
                { id: 2, name: 'Dr. Pedro Abel', specialty: 'Medicina General' },
                { id: 3, name: 'Dra. Catalina Lugarda', specialty: 'Ginecología' },
            ];
            setDoctors(data);
        };
        fetchDoctors();
    }, []);

    const filteredDoctors = doctors.filter((doctor) =>
        doctor.specialty.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Equipo Médico</h1>
            <input
                type="text"
                placeholder="Filtrar por especialidad"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <div>
                {filteredDoctors.map((doctor) => (
                    <div key={doctor.id}>
                        <h3>{doctor.name}</h3>
                        <p>Especialidad: {doctor.specialty}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EquipoMedico;