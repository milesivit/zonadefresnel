function calcularFresnel() { 
  const d = parseFloat(document.getElementById("distancia").value); //obtiene el valor que el usuario escribio como texto en el input
  const f = parseFloat(document.getElementById("frecuencia").value); //obtiene el valor que el usuario escribio como texto en el input
  if (isNaN(d) || isNaN(f) || d <= 0 || f <= 0) { //verifica si el valor no es un numero y q ambos valores sean mayores a 0
    document.getElementById("resultado").textContent = "Por favor ingrese valores válidos.";
    return;
  } //sino hace el calculo y muestra el resultado
  const F1 = 8.656 * Math.sqrt(d / f); //funcion dada por el profe 8.656 * elevado(d/f)
  document.getElementById("resultado").textContent = `Primer radio de Fresnel: ${F1.toFixed(2)} metros`; //tofixed(2) redondea a 2 decimales

    //guardar en historial local
    const nuevoRegistro = {
      distancia: d,
      frecuencia: f,
      resultado: F1.toFixed(2)
    };
  
    let historial = JSON.parse(localStorage.getItem("historialFresnel")) || [];
    historial.push(nuevoRegistro);
    localStorage.setItem("historialFresnel", JSON.stringify(historial));
  
}

