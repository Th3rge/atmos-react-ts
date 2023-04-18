//função de gerar valor booleano randômico
export function getRandomBoolean(): boolean {
  return Math.random() < 0.5; // Define o limite em 0.5 para ter uma chance de 50% de retornar true ou false
}

//Função para calcular a data do último login
export const subDate = (): any => {
  const currentDate: Date | any = new Date();
  const oldDate: Date | any = new Date('2023-04-14'); // Data último login

  //pegando o tempo em milisegundos
  const MilisecondsDifference: number = currentDate - oldDate;
  //transformando milisegundos em horas
  const hourDifference: number = Math.floor(
    MilisecondsDifference / (1000 * 60 * 60)
  );

  //verifica se as horas desconectado é maior que 1 hora
  return hourDifference > 1
    ? alert(`Você se manteve ${hourDifference} horas desconectado`)
    : 'Desconectado há menos de 1 hora';
};
