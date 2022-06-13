const resistenciaEquivalente = (...r1) => {
  const resistencias = [...r1];
  let denominador = 1;
  let numerador = 0;
  for (let i = 0; i < resistencias.length; i++) {
    denominador = resistencias[i] * denominador;
  }
  for (let i = 0; i < resistencias.length; i++) {
    numerador += denominador / resistencias[i];
  }
  return (denominador / numerador).toFixed(2);
};
const recuperarValores = () => {
  let resistencias = document.getElementById("resistencias").value;
  const r = resistencias.split(",");
  rp = parseFloat(resistenciaEquivalente(...r));
  document.getElementById("resistenciaE").innerHTML = `${rp} Ω`;
};
