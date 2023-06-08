var usuarios = [
  {
    identificador: "Luisa",
    password: "0731",
    rol: "Vendedor"
  },
  {
    identificador: "Andres",
    password: "0731",
    rol: "Cliente"
  },
  {
    identificador: "Santiago",
    password: "0731",
    rol: "Admin"
  },
  {
    identificador: "Cesar",
    password: "0731",
    rol: "Gerente"
  } 
];

function registrar() {
  var usuarioNuevo = document.getElementById("usuario").value;
  var passwordNuevo = document.getElementById("clave").value;
  var rolNuevo = document.getElementById("rol").value;

  // Verificar si el usuario ya existe
  var usuarioExistente = usuarios.find(function (usuario) {
    return usuario.identificador === usuarioNuevo;
  });

  if (usuarioExistente) {
    alert("El usuario ya existe. Por favor, elige otro nombre de usuario.");
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("usuario").focus();
    return;
  }

  // Crear un nuevo objeto de usuario
  var nuevoUsuario = {
    identificador: usuarioNuevo,
    password: passwordNuevo,
    rol: rolNuevo
  };

  // Agregar el nuevo usuario al arreglo de usuarios
  usuarios.push(nuevoUsuario);

  // Redirigir al usuario a la página correspondiente según su rol
  if (rolNuevo === "Cliente") {
    window.location.href = "InterfazCliente.html";
  } else if (rolNuevo === "Admin") {
    window.location.href = "InterfazAdmin.html";
  } else if (rolNuevo === "Gerente") {
    window.location.href = "InterfazGerente.html";
  } else if (rolNuevo === "Vendedor") {
    window.location.href = "gestionVTP.html";
  }
}


function iniciarSesion() {
  var usuarioEntrada = document.getElementById("usuario").value;
  var passwordEntrada = document.getElementById("clave").value;

  var usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.identificador === usuarioEntrada && usuario.password === passwordEntrada;
  });

  if (usuarioEncontrado) {
    if (usuarioEncontrado.rol === "Cliente") {
      window.location.href = "InterfazCliente.html";

    } else if (usuarioEncontrado.rol === "Admin") {
      window.location.href = "InterfazAdmin.html";
   

    }else if (usuarioEncontrado.rol === "Gerente") {
      window.location.href = "InterfazGerente.html";


    } else if (usuarioEncontrado.rol === "Vendedor") {
      window.location.href = "gestionVTP.html";
    }
  } else {
    alert("Usuario y/o contraseña incorrectos");
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("usuario").focus();
  }
  function registrar() {
    var usuarioNuevo = document.getElementById("usuario").value;
    var passwordNuevo = document.getElementById("clave").value;
    var rolNuevo = document.getElementById("rol").value;
  
    // Verificar si el usuario ya existe
    var usuarioExistente = usuarios.find(function (usuario) {
      return usuario.identificador === usuarioNuevo;
    });
  
    if (usuarioExistente) {
      alert("El usuario ya existe. Por favor, elige otro nombre de usuario.");
      document.getElementById("usuario").value = "";
      document.getElementById("clave").value = "";
      document.getElementById("usuario").focus();
      return;
    }
  
    // Crear un nuevo objeto de usuario
    var nuevoUsuario = {
      identificador: usuarioNuevo,
      password: passwordNuevo,
      rol: rolNuevo
    };
  
    // Agregar el nuevo usuario al arreglo de usuarios
    usuarios.push(nuevoUsuario);
  
    // Redirigir al usuario a la página correspondiente según su rol
    if (rolNuevo === "Cliente") {
      window.location.href = "InterfazCliente.html";
    } else if (rolNuevo === "Admin") {
      window.location.href = "InterfazAdmin.html";
    } else if (rolNuevo === "Gerente") {
      window.location.href = "InterfazGerente.html";
    } else if (rolNuevo === "Vendedor") {
      window.location.href = "gestionVTP.html";
    }
  }
  
}
