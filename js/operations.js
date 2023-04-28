function timeToFrame() {
  var horasTiempoAframe = document.getElementById("hora-time-to-frame").value;
  var minutosTiempoAframe = document.getElementById(
    "minute-time-to-frame"
  ).value;
  var segundosTiempoAframe = document.getElementById(
    "second-time-to-frame"
  ).value;
  var framesRateTiempoAframe = document.getElementById(
    "frame-rate-time-to-frame"
  ).value;
  var tiempoIngresadoSegundos;
  var resultado;
  if (framesRateTiempoAframe < 0) {
    document.getElementById("resultado").innerHTML = "enter a valid frame rate";
  } else if (
    horasTiempoAframe < 0 ||
    minutosTiempoAframe < 0 ||
    segundosTiempoAframe < 0
  ) {
    document.getElementById("resultado").innerHTML =
      "negative numbers are not allowed";
  } else {
    if (framesRateTiempoAframe != "" || framesRateTiempoAframe > "0") {
      document.getElementById("tiempo-ingresado").style.display = "none";
      if (horasTiempoAframe == "" || horasTiempoAframe == 0) {
        resultado =
          (parseFloat(minutosTiempoAframe) * 60 +
            parseFloat(segundosTiempoAframe)) *
          framesRateTiempoAframe;
        tiempoIngresadoSegundos =
          parseFloat(minutosTiempoAframe) * 60 +
          parseFloat(segundosTiempoAframe);
        document.getElementById("resultado").innerHTML =
          "at" +
          " " +
          framesRateTiempoAframe +
          " " +
          "fps is" +
          " " +
          resultado +
          " " +
          "frames.";
        document.getElementById("resultado").style.display = "block";
      } else if (minutosTiempoAframe == "" || minutosTiempoAframe == 0) {
        resultado =
          (parseFloat(horasTiempoAframe) * 3600 +
            parseFloat(segundosTiempoAframe)) *
          framesRateTiempoAframe;
        tiempoIngresadoSegundos =
          parseFloat(horasTiempoAframe) * 3600 +
          parseFloat(segundosTiempoAframe);
        document.getElementById("resultado").innerHTML =
          "at" +
          " " +
          framesRateTiempoAframe +
          " " +
          "fps is" +
          " " +
          resultado +
          " " +
          "frames.";
        document.getElementById("resultado").style.display = "block";
      } else if (segundosTiempoAframe == "" || segundosTiempoAframe == 0) {
        resultado =
          (parseFloat(horasTiempoAframe) * 3600 +
            parseFloat(minutosTiempoAframe) * 60) *
          framesRateTiempoAframe;
        tiempoIngresadoSegundos =
          parseFloat(horasTiempoAframe) * 3600 +
          parseFloat(minutosTiempoAframe) * 60;
        document.getElementById("resultado").innerHTML =
          "at" +
          " " +
          framesRateTiempoAframe +
          " " +
          "fps is" +
          " " +
          resultado +
          " " +
          "frames.";
        document.getElementById("resultado").style.display = "block";
      } else if (horasTiempoAframe == "" || minutosTiempoAframe == "") {
        resultado = parseFloat(segundosTiempoAframe) * framesRateTiempoAframe;
        tiempoIngresadoSegundos = parseFloat(segundosTiempoAframe);
        document.getElementById("resultado").innerHTML =
          "at" +
          " " +
          framesRateTiempoAframe +
          " " +
          "fps is" +
          " " +
          resultado +
          " " +
          "frames.";
        document.getElementById("resultado").style.display = "block";
      } else if (minutosTiempoAframe == "" || segundosTiempoAframe == "") {
        resultado =
          parseFloat(horasTiempoAframe) * 3600 * framesRateTiempoAframe;
        tiempoIngresadoSegundos = parseFloat(horasTiempoAframe) * 3600;
        document.getElementById("resultado").innerHTML =
          "at" +
          " " +
          framesRateTiempoAframe +
          " " +
          "fps is" +
          " " +
          resultado +
          " " +
          "frames.";
        document.getElementById("resultado").style.display = "block";
      } else if (minutosTiempoAframe == "" && segundosTiempoAframe == "") {
        resultado =
          parseFloat(horasTiempoAframe) * 3600 * framesRateTiempoAframe;
        tiempoIngresadoSegundos = parseFloat(horasTiempoAframe) * 3600;
        document.getElementById("resultado").innerHTML = resultado;
        document.getElementById("resultado").style.display = "block";
      } else {
        resultado =
          (parseFloat(horasTiempoAframe) * 3600 +
            parseFloat(minutosTiempoAframe) * 60 +
            parseFloat(segundosTiempoAframe)) *
          framesRateTiempoAframe;
        tiempoIngresadoSegundos =
          parseFloat(horasTiempoAframe) * 3600 +
          parseFloat(minutosTiempoAframe) * 60 +
          parseFloat(segundosTiempoAframe);
        document.getElementById("resultado").innerHTML =
          "at" +
          " " +
          framesRateTiempoAframe +
          " " +
          "fps is" +
          " " +
          resultado +
          " " +
          "frames.";
        document.getElementById("resultado").style.display = "block";
      }
      if (
        horasTiempoAframe == "" ||
        minutosTiempoAframe == "" ||
        segundosTiempoAframe == "" ||
        framesRateTiempoAframe == ""
      ) {
        document.getElementById("resultado").innerHTML =
          "Do not leave fields blank";
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").style.display = "block";
        document.getElementById("tiempo-ingresado").style.display = "none";
      } else if (framesRateTiempoAframe == "0") {
        document.getElementById("resultado").innerHTML =
          "The frame rate must be greater than 0";
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").style.display = "block";
      } else {
        document.getElementById("resultado").style.color = "rgb(42, 165, 93)";
        document.getElementById("tiempo-ingresado").style.display = "block";
      }
      var hour = Math.floor(tiempoIngresadoSegundos / 3600);
      hour = hour < 10 ? "0" + hour : hour;
      var minute = Math.floor((tiempoIngresadoSegundos / 60) % 60);
      minute = minute < 10 ? "0" + minute : minute;
      var second = tiempoIngresadoSegundos % 60;
      second = second < 10 ? "0" + second : second;
      tiempoIngresado = hour + ":" + minute + ":" + second;
      document.getElementById("tiempo-ingresado").innerHTML =
        "For" + " " + tiempoIngresado;
    } else {
      if (framesRateTiempoAframe == "" || framesRateTiempoAframe < "0") {
        document.getElementById("resultado").innerHTML = "enter frame rate";
        document.getElementById("resultado").style.display = "block";
        document.getElementById("tiempo-ingresado").style.display = "none";
        document.getElementById("resultado").style.color = "red";
      } else {
        document.getElementById("resultado").style.display = "none";
      }
    }
  }
}

function frameToTime() {
  var frames = document.getElementById("frame-to-time-frame").value;
  var frameRateFrameATiempo = document.getElementById(
    "frame-rate-frame-to-time"
  ).value;
  var resultado = frames / frameRateFrameATiempo;
  var hour = Math.floor(resultado / 3600);
  hour = hour < 10 ? "0" + hour : hour;
  minute = Math.floor((resultado / 60) % 60);
  var minute = minute < 10 ? "0" + minute : minute;
  var second = resultado % 60;
  second = second < 10 ? "0" + second : second;
  framesIngresado = hour + ":" + minute + ":" + second;
  if (frameRateFrameATiempo < 0) {
    document.getElementById("resultado-frames").style.display = "block";
    document.getElementById("resultado-frames").innerHTML =
      "enter a valid frame rate";
    document.getElementById("resultado-frames").style.color = "red";
    document.getElementById("frames-ingresados").style.display = "none";
  } else if (frames < 0) {
    document.getElementById("resultado-frames").style.display = "block";
    document.getElementById("resultado-frames").innerHTML =
      "negative numbers are not allowed";
    document.getElementById("resultado-frames").style.color = "red";
    document.getElementById("frames-ingresados").style.display = "none";
  } else if (frameRateFrameATiempo == 0) {
    document.getElementById("resultado-frames").style.display = "block";
    document.getElementById("resultado-frames").innerHTML =
      "The frame rate must be greater than 0";
    document.getElementById("resultado-frames").style.color = "red";
    document.getElementById("frames-ingresados").style.display = "none";
  } else if (frameRateFrameATiempo == "" || frames == "") {
    document.getElementById("resultado-frames").style.display = "block";
    document.getElementById("resultado-frames").innerHTML =
      "Do not leave fields blank";
    document.getElementById("resultado-frames").style.color = "red";
    document.getElementById("frames-ingresados").style.display = "none";
  } else {
    if (
      frameRateFrameATiempo > "0" ||
      (frameRateFrameATiempo > 0 && frames > 0)
    ) {
      document.getElementById("frames-ingresados").style.display = "block";
      document.getElementById("frames-ingresados").innerHTML =
        "For" + " " + frames + " " + "frames";
      document.getElementById("frames-ingresados").style.color =
        "rgb(42, 165, 93)";
      document.getElementById("resultado-frames").innerHTML =
        "The equivalent time is:" + " " + framesIngresado;
      document.getElementById("resultado-frames").style.display = "block";
      document.getElementById("resultado-frames").style.color =
        "rgb(42, 165, 93)";
    } else if (frameRateFrameATiempo == "0") {
      document.getElementById("resultado-frames").innerHTML =
        "The frame rate must be greater than 0";
      document.getElementById("frames-ingresados").style.display = "none";
      document.getElementById("resultado-frames").style.color = "red";
    } else if (frameRateFrameATiempo == "" || frames == "" || frames == " ") {
      document.getElementById("resultado-frames").innerHTML =
        "Do not leave fields blank";
      document.getElementById("resultado-frames").style.display = "block";
      document.getElementById("frames-ingresados").style.display = "none";
      document.getElementById("resultado-frames").style.color = "red";
    } else {
      document.getElementById("resultado-frames").style.display = "none";
    }
  }
}
