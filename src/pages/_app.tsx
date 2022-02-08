import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }: any)
{
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
