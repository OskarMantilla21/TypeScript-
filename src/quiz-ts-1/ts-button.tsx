import React from 'react'

interface CounterState {
  count: number;
}

function EventHandlingComponent() {

  const [state, setState] = React.useState<CounterState>({ count: 0 });
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setState(prevState => ({ count: prevState.count + 1 }));
  };

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={handleClick}>Hazme clic</button>
    </div>
  );
}

export default EventHandlingComponent;