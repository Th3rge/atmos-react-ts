//Função para calcular a data do último login
export const subDate = (): void => {
  const currentDate: Date = new Date();
  const oldDate: Date = new Date('2023-04-14'); // Data último login

  //pegando o tempo em milisegundos
  const MilisecondsDifference: number =
    currentDate.getTime() - oldDate.getTime();
  //transformando milisegundos em horas
  const hourDifference: number = Math.floor(
    MilisecondsDifference / (1000 * 60 * 60)
  );

  //verifica se as horas desconectado é maior que 1 hora
  hourDifference > 1
    ? alert(`Você se manteve ${hourDifference} horas desconectado`)
    : 'Desconectado há menos de 1 hora';
};
