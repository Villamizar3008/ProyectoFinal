document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('productora-form');
    const productorasList = document.getElementById('productoras');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const codigo = document.getElementById('codigo').value;
      const nombre = document.getElementById('nombre').value;
      const pais = document.getElementById('pais').value;
      const telefonos = document.getElementById('telefonos').value;
      const celulares = document.getElementById('celulares').value;
      const correo = document.getElementById('correo').value;
      const representante = document.getElementById('representante').value;
  
      const productoraItem = document.createElement('li');
      productoraItem.innerHTML = `
        <strong>Código:</strong> ${codigo}<br>
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>País donde reside:</strong> ${pais}<br>
        <strong>Teléfonos:</strong> ${telefonos}<br>
        <strong>Celulares:</strong> ${celulares}<br>
        <strong>Correo electrónico:</strong> ${correo}<br>
        <strong>Representante:</strong> ${representante}<br>
      `;
  
      productorasList.appendChild(productoraItem);
  
      form.reset();
    });
  });
  