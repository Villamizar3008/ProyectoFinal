document.getElementById('cliente-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const tipoDocumento = document.getElementById('tipo-documento').value;
    const dni = document.getElementById('dni').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
  
    const clienteItem = document.createElement('li');
    clienteItem.textContent = `Tipo de Documento: ${tipoDocumento}, DNI: ${dni}, Nombre: ${nombre}, Apellido: ${apellido}, Teléfono: ${telefono}, Correo: ${correo}`;
  
    document.getElementById('clientes').appendChild(clienteItem);

    
  });
  