//função de gerar valor booleano randômico
export function getRandomBoolean(): boolean {
  const booleanValue: boolean = Math.random() < 0.5; // Define o limite em 0.5 para ter uma chance de 50% de retornar true ou false

  return booleanValue;
}
