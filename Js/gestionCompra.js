document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('compra-form');
    const comprasList = document.getElementById('compras');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const numero = document.getElementById('numero').value;
      const sucursal = document.getElementById('sucursal').value;
      const peliculas = document.getElementById('peliculas').value;
      const cantidades = document.getElementById('cantidades').value;
      const precio = document.getElementById('precio').value;
      const subtotal = document.getElementById('subtotal').value;
      const total = document.getElementById('total').value;
      const fecha = document.getElementById('fecha').value;
  
      const compraItem = document.createElement('li');
      compraItem.innerHTML = `
        <strong>Número:</strong> ${numero}<br>
        <strong>Sucursal:</strong> ${sucursal}<br>
        <strong>Películas:</strong> ${peliculas}<br>
        <strong>Cantidades:</strong> ${cantidades}<br>
        <strong>Precio:</strong> ${precio}<br>
        <strong>Subtotal:</strong> ${subtotal}<br>
        <strong>Total:</strong> ${total}<br>
        <strong>Fecha:</strong> ${fecha}<br>
      `;
  
      comprasList.appendChild(compraItem);
  
      form.reset();
    });
  });
  