import React from 'react';

import {TsBasics} from './quiz-ts-1'
import { TsUserProfile } from './quiz-ts-1';
import { TsCounter } from './quiz-ts-1';
import { TsButton } from './quiz-ts-1';
import { TsMessage } from './quiz-ts-1';
import { ThemeConsumer, ThemeProvider } from './quiz-ts-1/themeProvider';
import { TsList } from './quiz-ts-1';
import { TsReadonly } from './quiz-ts-1';
import { TsInput } from './quiz-ts-1';
import { TsTuple } from './quiz-ts-1';
import { createTheme } from '@mui/material/styles';
import  AppBar  from './theme/appBar';


function App() {
  const stringArray = ['Element 1', 'Element 2', 'Element 3'];

  const readonlyStrings: ReadonlyArray<string> = ['Verde', 'Azul', 'Rojo'];

  return (
    <ThemeProvider theme="dark">
      <AppBar/>
    <div className="App">
      <TsBasics basics={["Item1", "Item2", "Item3", "Item4"]}/>
      <TsUserProfile
      name="Oskar"
      age={21}
      hobbies={['Carros', 'Pasear', 'Dormir']}
    />
    <TsCounter/>
    <TsButton/>
    <TsMessage message="Hola Mundo!" />
    <ThemeConsumer/>
    </div>
    <TsList items={stringArray} renderItem={(item) => <span>{item}</span>} />
    <TsReadonly items={readonlyStrings} />
    <TsInput value="Identification" />
    <TsInput value={451588625} />
    <TsInput value={{ name: "Oskar ", age: 21 }} />
    <TsTuple/>
    </ThemeProvider>
  );
}

export default App;