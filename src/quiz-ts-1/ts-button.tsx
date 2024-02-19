import React from 'react'

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
interface CounterState {
  count: number;
}
function TsButton() {
  const [state, setState] = React.useState<CounterState>({ count: 0 });
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setState(prevState => ({ count: prevState.count + 1 }));
  };
  return (
    <Box>
      <h1>Contador: {state.count}</h1>
      <Button variant="contained" onClick={handleClick} color='error'>Hazme clic</Button>
    </Box>
  );
}
export default TsButton;