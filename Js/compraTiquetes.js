document.addEventListener('DOMContentLoaded', function() {
    // Obtener la película almacenada en localStorage
    const peliculaJSON = localStorage.getItem('pelicula');
    if (peliculaJSON) {
      const pelicula = JSON.parse(peliculaJSON);
  
      // Mostrar los datos de la película en el formulario de compra de tiquetes
      document.getElementById('titulo-original').textContent = `Titulo Original: ${pelicula.nombreOriginal}`;
      document.getElementById('titulo-asignado').textContent = `Titulo Asignado: ${pelicula.nombreAsignado}`;
      // Agrega el resto de los campos del formulario de compra de tiquetes
    }
  });
  