document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pelicula-form');
    const peliculasList = document.getElementById('peliculas');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const codigo = document.getElementById('codigo').value;
      const nombreOriginal = document.getElementById('nombre-original').value;
      const nombreAsignado = document.getElementById('nombre-asignado').value;
      const genero = document.getElementById('genero').value;
      const idiomaOriginal = document.getElementById('idioma-original').value;
      const idiomasDisponibles = document.getElementById('idiomas-disponibles').value;
      const subtitulos = document.getElementById('subtitulos').value;
      const duracion = document.getElementById('duracion').value;
      const actoresPrincipales = document.getElementById('actores-principales').value;
      const actoresSecundarios = document.getElementById('actores-secundarios').value;
      const afichesDisponibles = document.getElementById('afiches-disponibles').value;
      const copias = document.getElementById('copias').value;
      const productora = document.getElementById('productora').value;
  
      const peliculaItem = document.createElement('li');
      peliculaItem.innerHTML = `
        <strong>Código:</strong> ${codigo}<br>
        <strong>Nombre Original:</strong> ${nombreOriginal}<br>
        <strong>Nombre Asignado:</strong> ${nombreAsignado}<br>
        <strong>Género:</strong> ${genero}<br>
        <strong>Idioma Original:</strong> ${idiomaOriginal}<br>
        <strong>Idiomas Disponibles:</strong> ${idiomasDisponibles}<br>
        <strong>Subtítulos Disponibles:</strong> ${subtitulos}<br>
        <strong>Duración:</strong> ${duracion}<br>
        <strong>Actores Principales:</strong> ${actoresPrincipales}<br>
        <strong>Actores Secundarios:</strong> ${actoresSecundarios}<br>
        <strong>Número de Afiches Disponibles:</strong> ${afichesDisponibles}<br>
        <strong>Número de Copias:</strong> ${copias}<br>
        <strong>Productora:</strong> ${productora}<br>
      `;
  
      peliculasList.appendChild(peliculaItem);
  
      form.querySelector('form').reset();
    });
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('pelicula-form');
      const peliculasList = document.getElementById('peliculas');
    
      form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Resto del código para obtener los valores del formulario
    
        const peliculaItem = document.createElement('li');
        // Código para crear el elemento <li> y establecer su contenido
    
        peliculasList.appendChild(peliculaItem);
    
        // Restablecer el formulario
        form.querySelector('form').reset();
      });
    });
    
    
  });
  