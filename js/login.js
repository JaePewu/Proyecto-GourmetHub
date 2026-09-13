//Elementos del formulario
const formularioLogin = document.getElementById("formularioLogin");
const correoLogin = document.getElementById("correoLogin");
const errorCorreoLogin = document.getElementById("errorCorreoLogin");
const contrasenaLogin = document.getElementById("contrasenaLogin");
const errorContrasenaLogin = document.getElementById("errorContrasenaLogin");

//Validación Login
formularioLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  //Valores ingresados
  const valorCorreo = correoLogin.value.trim().toLowerCase();
  const valorContrasena = contrasenaLogin.value;

  //Expresiones regulares
  const formatoCorreo = /^[A-Za-z0-9._%+-]+@duoc\.cl$/i;

  //Validación correo
  if (valorCorreo === "") {
    errorCorreoLogin.textContent = "El correo es obligatorio!!";
  } else if (!formatoCorreo.test(valorCorreo)) {
    errorCorreoLogin.textContent = "Ingresa un correo válido!!";
  } else {
    errorCorreoLogin.textContent = "";
  }

  //Validación contraseña
  if (valorContrasena === "") {
    errorContrasenaLogin.textContent = "La contraseña es obligatoria!!";
  } else {
    errorContrasenaLogin.textContent = "";
  }

  //Comprueba que no existan errores
  if (
    errorCorreoLogin.textContent === "" &&
    errorContrasenaLogin.textContent === ""
  ) {
    //Buscar usuario
    const usuarioGuardado = localStorage.getItem("usuario_" + valorCorreo);

    //Validación usuario
    if (usuarioGuardado === null) {
      errorCorreoLogin.textContent = "El usuario NO se encuentra registrado!!";
    } else {
      //Datos del usuario
      const usuario = JSON.parse(usuarioGuardado);

      //Comprueba la contraseña
      if (usuario.contrasena !== valorContrasena) {
        errorContrasenaLogin.textContent = "Contraseña incorrecta!!";
      } else {
        errorCorreoLogin.textContent = "";
        errorContrasenaLogin.textContent = "";

        //Mensaje de inicio de sesión exitoso
        alert("Inicio de sesión exitoso!!");
      }
    }
  }
});
