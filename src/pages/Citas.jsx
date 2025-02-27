import React, { useState, useRef } from 'react';

const Citas = () => {
    const [form, setForm] = useState({ name: '', date: '', time: '' });
    const [errors, setErrors] = useState({});
    const inputRef = useRef(null);

    const validate = () => {
        const newErrors = {};
        if (!form.name) newErrors.name = 'El nombre es obligatorio';
        if (!form.date) newErrors.date = 'La fecha es obligatoria';
        if (!form.time) newErrors.time = 'La hora es obligatoria';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Cita agendada con éxito');
            setForm({ name: '', date: '', time: '' });
        }
    };

    return (
        <div>
            <h1>Agendar Cita</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        ref={inputRef}
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label>Fecha:</label>
                    <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                    {errors.date && <p>{errors.date}</p>}
                </div>
                <div>
                    <label>Hora:</label>
                    <input
                        type="time"
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                    />
                    {errors.time && <p>{errors.time}</p>}
                </div>
                <button type="submit">Agendar</button>
            </form>
        </div>
    );
};

export default Citas;