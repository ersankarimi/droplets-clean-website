import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './theme/theme'

function App() {
    return <ChakraProvider theme={customTheme} resetCSS={true}></ChakraProvider>
}

export default App
