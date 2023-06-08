document.getElementById('venta-online-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const sala = document.getElementById('sala-online').value;
  const horario = document.getElementById('horario-online').value;
  const numeroTiquetes = document.getElementById('numero-tiquetes-online').value;
  const posiciones = document.getElementById('posiciones-online').value;
  const formaPago = document.getElementById('forma-pago-online').value;
  const cliente = document.getElementById('cliente-online').value;
  const fechaVenta = document.getElementById('fecha-venta-online').value;

  // Lógica de agregar la venta en línea aquí

  const ventaItem = document.createElement('li');
  ventaItem.textContent = `Sala: ${sala}, Horario: ${horario}, Tiquetes: ${numeroTiquetes}, Posiciones: ${posiciones}, Forma de Pago: ${formaPago}, Cliente: ${cliente}, Fecha de Venta: ${fechaVenta}`;

  document.getElementById('ventas-online').appendChild(ventaItem);
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
  
});
