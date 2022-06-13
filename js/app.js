function table() {
  let voltaje = parseFloat(document.getElementById("voltaje").value) || 0;
  let resistenciaTl = rT || 0;
  let corriente = voltaje / resistenciaTotal || 0;

  document.getElementById("voltajeT").innerHTML = `${voltaje} V`;
  document.getElementById("resistenciaTA").innerHTML = `${resistenciaTl} Ω`;
  document.getElementById("corriente").innerHTML = `${corriente} A`;
}
