function table() {
  let voltaje = parseFloat(document.getElementById("voltaje").value) || 0;
  let resistenciaTl = parseFloat(rT) || 0;
  let corriente = 0;
  corriente = voltaje / resistenciaTl;
  document.getElementById("voltajeT").innerHTML = `${voltaje} V`;
  document.getElementById("resistenciaTA").innerHTML = `${resistenciaTl} Ω`;
  document.getElementById("corriente").innerHTML = `${corriente} A`;

  corrienteT = corriente;
  voltajeT = voltaje;
}
