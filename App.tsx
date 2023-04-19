import * as React from 'react';
import { Msgtype } from './data/types';
import { runDiagram } from './data/runDiagram';
import { getRandomBoolean } from './data/getRandomBoolean';
//import './style.css';

export default function App() {
  //corpo da Mensagem
  const [msg, setMsg] = React.useState<Msgtype>({
    value: getRandomBoolean(),
    id: 2,
  });

  React.useLayoutEffect(() => {
    runDiagram(msg, setMsg);
  }, []);

  return (
    <div>
      <h1>Atmos's Diagram</h1>
      <button />
    </div>
  );
}
