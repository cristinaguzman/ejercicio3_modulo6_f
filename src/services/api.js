export const fetchServices = async () => {
  return [
    { id: 1, name: "Cardiología" },
    { id: 2, name: "Pediatría" },
    { id: 3, name: "Neurología" },
    { id: 4, name: "Dermatología" },
    { id: 5, name: "Ginecología" },
    { id: 6, name: "Oftalmología" },
    { id: 7, name: "Traumatología" },
    { id: 8, name: "Psiquiatría" },
  ];
};

export const fetchDoctors = async () => {
  return [
    { id: 1, name: "Dr. Juan Pérez", specialty: "Cardiología" },
    { id: 2, name: "Dra. Ana Gómez", specialty: "Pediatría" },
    { id: 3, name: "Dr. Luis Torres", specialty: "Neurología" },
    { id: 4, name: "Dra. Carla Fernández", specialty: "Dermatología" },
    { id: 5, name: "Dra. Sofía Martínez", specialty: "Ginecología" },
    { id: 6, name: "Dr. Miguel Suárez", specialty: "Oftalmología" },
    { id: 7, name: "Dr. Roberto García", specialty: "Traumatología" },
    { id: 8, name: "Dra. Laura Morales", specialty: "Psiquiatría" },
  ];
};
