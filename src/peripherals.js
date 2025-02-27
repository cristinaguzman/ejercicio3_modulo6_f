export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject('Geolocalización no soportada');
    }
  });
};

export const captureImage = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  return stream;
};