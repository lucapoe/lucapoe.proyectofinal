document.getElementById("form").addEventListener("submit", function (event) {
  let formValid = true;
  let requiredFields = document.querySelectorAll("#form .required");

  requiredFields.forEach(function (field) {
    if (!field.value) {
      formValid = false;
    }
  });

  if (!formValid) {
    alert(
      "Por favor complete todos los campos requeridos antes de enviar el formulario."
    );
    event.preventDefault();
  } else {
    if (confirm("¿Está seguro de que desea enviar el formulario?")) {
      alert("Formulario enviado con éxito!");
    } else {
      event.preventDefault();
    }
  }
});
