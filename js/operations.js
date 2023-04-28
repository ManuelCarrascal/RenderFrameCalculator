function timeToFrame() {
  var horas =
    parseFloat(document.getElementById("hora-time-to-frame").value) || 0;
  var minutos =
    parseFloat(document.getElementById("minute-time-to-frame").value) || 0;
  var segundos =
    parseFloat(document.getElementById("second-time-to-frame").value) || 0;
  var fps =
    parseFloat(document.getElementById("frame-rate-time-to-frame").value) || 0;
  var tiempoIngresadoSegundos = horas * 3600 + minutos * 60 + segundos;

  if (fps <= 0) {
    document.getElementById("resultado").innerHTML = "Enter a valid frame rate";
    document.getElementById("resultado").style.color = "red";
  } else if (horas < 0 || minutos < 0 || segundos < 0) {
    document.getElementById("resultado").innerHTML =
      "Negative numbers are not allowed";
    document.getElementById("resultado").style.color = "red";
  } else if (isNaN(tiempoIngresadoSegundos)) {
    document.getElementById("resultado").innerHTML = "Enter a valid time";
  } else {
    var resultado = tiempoIngresadoSegundos * fps;
    document.getElementById("resultado").innerHTML =
      "At " + fps + " fps is " + resultado + " frames.";
    document.getElementById("resultado").style.color = "rgb(42, 165, 93)";
  }
  document.getElementById("tiempo-ingresado").style.display = isNaN(
    tiempoIngresadoSegundos
  )
    ? "block"
    : "none";
  document.getElementById("resultado").style.display = "block";
}

function frameToTime() {
  const frames = document.getElementById("frame-to-time-frame").value;
  const frameRate = document.getElementById("frame-rate-frame-to-time").value;
  const resultado = frames / frameRate;

  if (frameRate <= 0 || frames <= 0 || frameRate == "" || frames == "") {
    document.getElementById("resultado-frames").style.display = "block";
    document.getElementById("resultado-frames").style.color = "red";

    if (frameRate <= 0) {
      document.getElementById("resultado-frames").innerHTML =
        "The frame rate must be greater than 0";
    } else if (frames <= 0) {
      document.getElementById("resultado-frames").innerHTML =
        "The number of frames must be greater than 0";
    } else {
      document.getElementById("resultado-frames").innerHTML =
        "Do not leave fields blank";
    }

    document.getElementById("frames-ingresados").style.display = "none";
  } else {
    const hour = Math.floor(resultado / 3600);
    const minute = Math.floor((resultado / 60) % 60);
    let second = resultado % 60;
    if (resultado < 1) {
      second = resultado.toFixed(2);
    } else {
      second = second.toFixed(2);
    }
    const framesIngresado = `${hour < 10 ? "0" + hour : hour}:${
      minute < 10 ? "0" + minute : minute
    }:${second < 10 ? "0" + second : second}`;

    document.getElementById("frames-ingresados").style.display = "block";
    document.getElementById("frames-ingresados").style.color =
      "rgb(42, 165, 93)";
    document.getElementById(
      "frames-ingresados"
    ).innerHTML = `For ${frames} frames`;
    document.getElementById("resultado-frames").style.display = "block";
    document.getElementById("resultado-frames").style.color =
      "rgb(42, 165, 93)";
    document.getElementById(
      "resultado-frames"
    ).innerHTML = `The equivalent time is: ${framesIngresado}`;
  }
}
