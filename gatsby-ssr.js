import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
    *  {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: ${props => props.theme.colors.darkText};
    }
    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
       
    }
    html {
      background-color: ${props => props.theme.colors.light1} 

    }
`
//Wrapping the application with the theme provider
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
