//Elementos de formulario
const formularioRegistro = document.getElementById("formularioRegistro");

const nombre = document.getElementById("nombre");
const errorNombre = document.getElementById("errorNombre");

const correo = document.getElementById("correo");
const errorCorreo = document.getElementById("errorCorreo");

const contrasena = document.getElementById("contrasena");
const errorContrasena = document.getElementById("errorContrasena");

const confirmarContrasena = document.getElementById("confirmarContrasena");
const errorConfirmarContrasena = document.getElementById(
  "errorConfirmarContrasena",
);

const restricciones = document.querySelectorAll(".restriccion");
const errorRestricciones = document.getElementById("errorRestricciones");

const contenedorRecetas = document.getElementById("contenedorRecetas");
const agregarReceta = document.getElementById("agregarReceta");
const errorRecetas = document.getElementById("errorRecetas");

//Contador de recetas
let contadorRecetas = 1;

//Agregar otra receta
agregarReceta.addEventListener("click", function () {
  contadorRecetas++;

  const nuevaReceta = document.createElement("div");
  nuevaReceta.classList.add("receta-interes");

  //Agrega contenido HTML dentro de la nueva receta
  nuevaReceta.innerHTML = `
    <div class="mb-3">
      <label for="categoria${contadorRecetas}" class="form-label">
        Categoría
      </label>

      <select
        class="form-select categoria-receta"
        id="categoria${contadorRecetas}"
        name="categoria${contadorRecetas}"
      >
        <option value="">Selecciona una categoría</option>
        <option value="Pasteleria">Pastelería</option>
        <option value="Cocina Italiana">Cocina Italiana</option>
        <option value="Reposteria">Repostería</option>
        <option value="Cocina Oriental">Cocina Oriental</option>
        <option value="Barismo">Barismo</option>
      </select>
    </div>

    <div class="mb-3">
      <p class="form-label">Nivel de experiencia</p>

      <div class="form-check">
        <input
          class="form-check-input nivel-receta"
          type="radio"
          name="nivel${contadorRecetas}"
          value="Principiante"
          id="principiante${contadorRecetas}"
        />
        <label
          class="form-check-label"
          for="principiante${contadorRecetas}"
        >
          Principiante
        </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input nivel-receta"
          type="radio"
          name="nivel${contadorRecetas}"
          value="Intermedio"
          id="intermedio${contadorRecetas}"
        />
        <label
          class="form-check-label"
          for="intermedio${contadorRecetas}"
        >
          Intermedio
        </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input nivel-receta"
          type="radio"
          name="nivel${contadorRecetas}"
          value="Avanzado"
          id="avanzado${contadorRecetas}"
        />
        <label
          class="form-check-label"
          for="avanzado${contadorRecetas}"
        >
          Avanzado
        </label>
      </div>
    </div>
  `;

  contenedorRecetas.appendChild(nuevaReceta);
});

//Validación
formularioRegistro.addEventListener("submit", function (event) {
  event.preventDefault();

  //Valores ingresados
  const valorNombre = nombre.value.trim();
  const valorCorreo = correo.value.trim().toLowerCase();
  const valorContrasena = contrasena.value;
  const valorConfirmarContrasena = confirmarContrasena.value;

  //Expresiones regulares
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
  const formatoCorreo = /^[A-Za-z0-9._%+-]+@duoc\.cl$/i;
  const tieneDosMayusculas = /(?:.*[A-Z]){2}/;
  const tieneMinuscula = /[a-z]/;
  const tieneNumero = /[0-9]/;
  const tieneEspecial = /[!#$%]/;

  //Validación nombre completo
  if (valorNombre === "") {
    errorNombre.textContent = "El nombre completo es obligatorio!!";
  } else if (valorNombre.length < 3) {
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres!!";
  } else if (!soloLetras.test(valorNombre)) {
    errorNombre.textContent = "Soló puede contener letras y espacios!!";
  } else if (valorNombre.length > 70) {
    errorNombre.textContent = "El nombre no puede superar los 70 caracteres!!!";
  } else {
    errorNombre.textContent = "";
  }

  //Validación correo electrónico
  if (valorCorreo === "") {
    errorCorreo.textContent = "El correo electrónico es obligatorio!!";
  } else if (valorCorreo.length > 60) {
    errorCorreo.textContent = "El correo no puede superar los 60 caracteres!!";
  } else if (!formatoCorreo.test(valorCorreo)) {
    errorCorreo.textContent =
      "Ingresa un correo válido terminado en @duoc.cl!!";
  } else {
    errorCorreo.textContent = "";
  }

  //Validación contraseña
  if (valorContrasena === "") {
    errorContrasena.textContent = "La contraseña es obligatoria!!";
  } else if (valorContrasena.length < 10) {
    errorContrasena.textContent =
      "La contraseña debe tener al menos 10 caracteres!!";
  } else if (!tieneDosMayusculas.test(valorContrasena)) {
    errorContrasena.textContent =
      "La contraseña debe incluir al menos 2 letras mayúsculas!!";
  } else if (!tieneMinuscula.test(valorContrasena)) {
    errorContrasena.textContent =
      "La contraseña debe incluir al menos una letra minúscula!!";
  } else if (!tieneNumero.test(valorContrasena)) {
    errorContrasena.textContent =
      "La contraseña debe incluir al menos un número!!";
  } else if (!tieneEspecial.test(valorContrasena)) {
    errorContrasena.textContent =
      "La contraseña debe incluir un símbolo especial (!, #, $ o %)!!";
  } else {
    errorContrasena.textContent = "";
  }

  //Validación confirmación contraseña
  if (valorConfirmarContrasena === "") {
    errorConfirmarContrasena.textContent = "Debes confirmar la contraseña!!";
  } else if (valorConfirmarContrasena !== valorContrasena) {
    errorConfirmarContrasena.textContent = "Las contraseñas no coinciden!!";
  } else {
    errorConfirmarContrasena.textContent = "";
  }

  //Validación restricciones alimentarias
  let restriccionSeleccionada = false;

  restricciones.forEach(function (restriccion) {
    if (restriccion.checked) {
      restriccionSeleccionada = true;
    }
  });

  if (restriccionSeleccionada === false) {
    errorRestricciones.textContent =
      "Debes seleccionar al menos una restricción alimentaria!!";
  } else {
    errorRestricciones.textContent = "";
  }

  //Validación recetas
  const recetas = document.querySelectorAll(".receta-interes");
  const recetasSeleccionadas = [];
  let recetasValidas = true;

  recetas.forEach(function (receta) {
    const categoria = receta.querySelector(".categoria-receta");
    const nivel = receta.querySelector('input[type="radio"]:checked');

    if (categoria.value === "" || nivel === null) {
      recetasValidas = false;
    } else {
      const recetaSeleccionada = {
        categoria: categoria.value,
        nivel: nivel.value,
      };

      recetasSeleccionadas.push(recetaSeleccionada);
    }
  });

  if (recetasValidas === false) {
    errorRecetas.textContent =
      "Debes seleccionar una categoría y un nivel en cada receta!!";
  } else {
    errorRecetas.textContent = "";
  }

  //Guardar restricciones seleccionadas
  const restriccionesSeleccionadas = [];

  restricciones.forEach(function (restriccion) {
    if (restriccion.checked) {
      restriccionesSeleccionadas.push(restriccion.value);
    }
  });

  //Comprobación que no existan errores antes de guardar el usuario
  if (
    errorNombre.textContent === "" &&
    errorCorreo.textContent === "" &&
    errorContrasena.textContent === "" &&
    errorConfirmarContrasena.textContent === "" &&
    errorRestricciones.textContent === "" &&
    errorRecetas.textContent === ""
  ) {
    //Crear usuario
    const usuario = {
      nombre: valorNombre,
      correo: valorCorreo,
      contrasena: valorContrasena,
      restricciones: restriccionesSeleccionadas,
      recetas: recetasSeleccionadas,
    };

    //Guardar usuario
    localStorage.setItem("usuario_" + valorCorreo, JSON.stringify(usuario));

    //Mensaje de registro exitoso
    alert("Usuario registrado correctamente!!");

    //Se limpia el formulario
    formularioRegistro.reset();
  }
});
