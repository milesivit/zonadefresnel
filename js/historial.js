 // cargar historial desde localStorage y mostrar en la tabla
  const historial = JSON.parse(localStorage.getItem("historialFresnel")) || [];
  const cuerpoTabla = document.querySelector("#tablaHistorial tbody");

  cuerpoTabla.innerHTML = ""; //limpia cualquier fila vacía por defecto

  historial.forEach(item => {
    const fila = document.createElement("tr");

    const tdDistancia = document.createElement("td");
    tdDistancia.textContent = item.distancia;

    const tdFrecuencia = document.createElement("td");
    tdFrecuencia.textContent = item.frecuencia;

    const tdResultado = document.createElement("td");
    tdResultado.textContent = `${item.resultado} m`;

    fila.appendChild(tdDistancia);
    fila.appendChild(tdFrecuencia);
    fila.appendChild(tdResultado);

    cuerpoTabla.appendChild(fila);
  });