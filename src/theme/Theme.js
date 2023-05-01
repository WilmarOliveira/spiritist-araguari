import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyle'

const theme = {
   colors: {
      color1: '#e25858',
      color2: '#e9d6af',
      color3: '#ffffdd',
      color4: '#c0efd2',
      color5: '#384252',
   },
   fonts: ['sans-serif', 'Roboto'],
   fontSizes: {
      small: '1em',
      medium: '2em',
      large: '3em',
   },
}

export const Theme = ({ children }) => (
   <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
   </ThemeProvider>
)
