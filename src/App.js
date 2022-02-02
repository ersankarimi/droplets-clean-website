import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <h1>Hello World!</h1>
    </ChakraProvider>
  );
}

export default App;
