document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cartelera-form');
    const carteleraList = document.getElementById('carteleras');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const sala = document.getElementById('sala').value;
      const horario = document.getElementById('horario').value;
      const pelicula = document.getElementById('pelicula').value;
      const fechaInicio = document.getElementById('fecha-inicio').value;
      const fechaFin = document.getElementById('fecha-fin').value;
  
      const carteleraItem = document.createElement('li');
      carteleraItem.innerHTML = `
        <strong>Sala:</strong> ${sala}<br>
        <strong>Horario:</strong> ${horario}<br>
        <strong>Película:</strong> ${pelicula}<br>
        <strong>Fecha Inicio:</strong> ${fechaInicio}<br>
        <strong>Fecha Finalización:</strong> ${fechaFin}<br>
      `;
  
      carteleraList.appendChild(carteleraItem);
  
      form.reset();
    });
  });
  