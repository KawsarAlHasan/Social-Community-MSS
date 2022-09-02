import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#f3f3f3',
  color: '#000',
}

export const darkTheme = {
  body: '#000',
  color: '#f3f3f3',
}

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.body}
}`
