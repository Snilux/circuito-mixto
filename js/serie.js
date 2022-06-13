const resistenciaTotal = (...r) => {
  const resistenciasSerie = [...r];
  let sum = 0;
  for (let i = 0; i < resistenciasSerie.length; i++) {
    sum += resistenciasSerie[i] * 1;
  }
  rT = sum + rp;
  document.getElementById("resistenciaT").innerHTML = `${rT} Ω`;
};
const obtenerValores = () => {
  let resistencias = document.getElementById("resistenciasS").value;
  const rS = resistencias.split(",");
  resistenciaTotal(...rS);
};
