import * as React from 'react';
import { getRandomBoolean, subDate } from './data';
//import './style.css';

export default function App() {
  //tipagem
  interface Msgtype {
    value: boolean;
    id: number;
    register?: boolean;
    mac?: Date;
  }

  //corpo da Mensagem
  const [msg, setMsg] = React.useState<Msgtype>({
    value: getRandomBoolean(),
    id: 2,
  });

  React.useLayoutEffect(() => {
    function runDiagram() {
      //Verifica se o valor da mensagem é true ou false
      if (msg.value === true) {
        alert(`O value da mensagem é ${msg.value}`);

        //Verifica valor do registro
        if (msg.id) {
          alert('Existe nos registros');

          //cria um novo objeto com o valor de registro
          const newObj: Msgtype = { ...msg, register: getRandomBoolean() };

          alert(`O registro é: ${newObj.register}`);

          if (newObj.register === false) {
            //remover registros
            alert('removido dos registro');

            /*função tempo de registro
          gerar alerta*/
            subDate();
          }
          setMsg(newObj);
        }
        //logar informação
        alert('Logar Informação');
      } else {
        alert(`O value da mensagem é ${msg.value}`);

        //cria um novo objeto com o valor de registro
        const newObj: Msgtype = {
          ...msg,
          register: getRandomBoolean(),
        };

        setMsg(newObj);
        //adiciona o timestamp se register for FALSE
        if (msg.register === false) {
          const newMsg: Msgtype = {
            ...newObj,
            mac: new Date(),
          };

          setMsg(newMsg);

          alert('Timestamp adicionado');
        }

        //logar informação
        alert('logar informação');
      }
    }

    runDiagram();
  }, []);

  return (
    <div>
      <h1>Atmos's Diagram</h1>
    </div>
  );
}
