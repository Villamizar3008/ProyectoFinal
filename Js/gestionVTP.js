document.getElementById('venta-presencial-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const sala = document.getElementById('sala-presencial').value;
    const horario = document.getElementById('horario-presencial').value;
    const numeroTiquetes = document.getElementById('numero-tiquetes-presencial').value;
    const posiciones = document.getElementById('posiciones-presencial').value;
    const formaPago = document.getElementById('forma-pago-presencial').value;
    const vendedor = document.getElementById('vendedor-presencial').value;
  
    // Lógica de agregar la venta presencial aquí
  
    const ventaItem = document.createElement('li');
    ventaItem.textContent = `Sala: ${sala}, Horario: ${horario}, Tiquetes: ${numeroTiquetes}, Posiciones: ${posiciones}, Forma de Pago: ${formaPago}, Vendedor: ${vendedor}`;
  
    document.getElementById('ventas-presencial').appendChild(ventaItem);
    
  });
  