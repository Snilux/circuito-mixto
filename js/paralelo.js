const denominador = (...r1) => {
  const resistencias = [...r1];
  let denominador = 1;
  let numerador = 0;
  for (let i = 0; i < resistencias.length; i++) {
    denominador = resistencias[i] * denominador;
  }
  for (let i = 0; i < resistencias.length; i++) {
    numerador += denominador / resistencias[i];
  }
  console.log(`Numerador ${numerador} : Denominador ${denominador}`);

  return (denominador / numerador).toFixed(2);
};
console.log(denominador(120, 5, 2000));
