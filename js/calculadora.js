function calcularFresnel() { 
  const d = parseFloat(document.getElementById("distancia").value);
  const f = parseFloat(document.getElementById("frecuencia").value);

  if (isNaN(d) || isNaN(f) || d <= 0 || f <= 0) {
    document.getElementById("resultado").textContent = "Por favor ingrese valores válidos.";
    return;
  }

  const F1 = 8.656 * Math.sqrt(d / f);

  // Función para cortar sin redondear a 2 decimales
  function cortarDosDecimales(num) {
    return Math.floor(num * 100) / 100;
  }

  const F1Cortado = cortarDosDecimales(F1);

  document.getElementById("resultado").textContent = `Primer radio de Fresnel: ${F1Cortado.toFixed(2)} metros`;

  // Guardar en historial local
  const nuevoRegistro = {
    distancia: d,
    frecuencia: f,
    resultado: F1Cortado
  };

  let historial = JSON.parse(localStorage.getItem("historialFresnel")) || [];
  historial.push(nuevoRegistro);
  localStorage.setItem("historialFresnel", JSON.stringify(historial));
}
