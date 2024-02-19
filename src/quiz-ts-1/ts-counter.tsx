import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

function TsCounter() {
  const [count, setCount] = React.useState<number>(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <Box>
      <h1>Contador: {count}</h1>
      <Button variant='contained' color= 'secondary' onClick={increment}>Incrementar</Button>
      <Button variant='contained' color='primary' onClick={decrement} disabled={count === 0}>Decrementar</Button>
    </Box>
  );
}
export default TsCounter;