import axios from 'axios';
export const fetchDoctors = async () => {
  try {
    const response = await axios.get('https://api-hospital.com/doctors');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return [];
  }
};
