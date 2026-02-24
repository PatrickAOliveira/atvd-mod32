import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background: ${theme['colors']['background']};
  }
`
