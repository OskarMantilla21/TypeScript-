import React from 'react'


function TupleComponent() {

  const [state, setState] = React.useState<[boolean, string]>([false, '']);

  const updateState = (newState: boolean | string) => {
    if (typeof newState === 'boolean') {
      setState([newState, state[1]]);
    } else {
      setState([state[0], newState as string]);
    }
  };

  return (
    <div>
      <p>Estado Booleano: {state[0] ? 'Verdadero' : 'Falso'}</p>
      <p>Estado String: {state[1]}</p>
      <button onClick={() => updateState(!state[0])}>Cambiar Booleano</button>
      <button onClick={() => updateState('Nuevo mensaje')}>Cambiar String</button>
    </div>
  );
}


export default TupleComponent;