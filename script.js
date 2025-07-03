let numeroSecreto;
const startBtn = document.getElementById("startBtn");
const juegoDiv = document.getElementById("juego");
const inputNumero = document.getElementById("inputNumero");
const enviarBtn = document.getElementById("enviarBtn");
const mensaje = document.getElementById("mensaje");

startBtn.addEventListener("click", () => {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  console.log("Número secreto:", numeroSecreto);
  //   Borra texto anterior
  mensaje.textContent = "";
  //   modifica el display del contenido del div
  juegoDiv.style.display = "block";

  enviarBtn.addEventListener("click", () => {
    const intento = parseInt(inputNumero.value);
    // Validacion de valor ingresado en el input
    if (isNaN(intento) || intento < 1 || intento > 100) {
      mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100";
      return;
    }

    if (intento === numeroSecreto) {
      mensaje.textContent = `🎉🎉 ¡Correcto! El número era ${numeroSecreto}.🎉🎉`;
    } else if (intento < numeroSecreto) {
      mensaje.textContent = "📈 Más alto...";
    } else {
      mensaje.textContent = "📉  Más bajo...";
    }
    inputNumero.value = "";
    inputNumero.focus();
  });
});
