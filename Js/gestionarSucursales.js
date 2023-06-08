document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sucursal-form');
    const sucursalesList = document.getElementById('sucursales');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const codigo = document.getElementById('codigo').value;
      const direccion = document.getElementById('direccion').value;
      const departamento = document.getElementById('departamento').value;
      const ciudad = document.getElementById('ciudad').value;
      const gerente = document.getElementById('gerente').value;
      const salas = document.getElementById('salas').value;
      const trabajadores = document.getElementById('trabajadores').value;
      const cafeteria = document.getElementById('cafeteria').value;
  
      const sucursalItem = document.createElement('li');
      sucursalItem.innerHTML = `
        <strong>Código:</strong> ${codigo}<br>
        <strong>Dirección:</strong> ${direccion}<br>
        <strong>Departamento:</strong> ${departamento}<br>
        <strong>Ciudad:</strong> ${ciudad}<br>
        <strong>Gerente encargado:</strong> ${gerente}<br>
        <strong>Número de salas:</strong> ${salas}<br>
        <strong>Número de trabajadores:</strong> ${trabajadores}<br>
        <strong>Posee cafetería:</strong> ${cafeteria}<br>
      `;
  
      sucursalesList.appendChild(sucursalItem);
  
      form.reset();
    });
  });
  