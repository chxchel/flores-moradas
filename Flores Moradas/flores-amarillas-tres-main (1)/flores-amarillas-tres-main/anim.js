// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "TUS OJOS ME NOMINAN", time: -2 },
  { text: "A QUERERTE", time: 2 },
  { text: "Y YO QUIERO SER EL GANADOR", time: 7.35 },
  { text: "PROBABLEMENTE ESTOY ", time: 14 },
  { text: "IMAGINANDO DEMSIADO", time: 17.5 },
  { text: "YA ME VI HACIENDO PLANES ENTRE TU FAMILIA Y YO", time: 23 },
  { text: "QUE TU HERMANITA TE DIGA QUE SOY EL MEJOR", time: 26.15 },
  { text: "PORQUE ESTOY", time: 29.15 },
  { text: "ETERNAMENTE ENAMORADO", time: 34 },
  { text: "QUIERO GRITARLE AL MUNDO ENTERO QUE CONOCÍ A LA MEJOR", time: 39 },
  { text: "QUE POR TI SIGO SIENDO MI MEJOR VERSIÓN", time: 42.35 },
  { text: "POR ESO SOY", time: 46 },
  { text: "EL AFORTUNADO", time: 50 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);