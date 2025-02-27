// src/serviceWorkerRegistration.js

// Registra el Service Worker para mejorar el rendimiento offline
export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
          })
          .catch(error => {
            console.error('Error al registrar el Service Worker:', error);
          });
      });
    }
  }
  
  // Desregistra el Service Worker si es necesario
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(registration => {
          registration.unregister();
        })
        .catch(error => {
          console.error('Error al desregistrar el Service Worker:', error);
        });
    }
  }
  