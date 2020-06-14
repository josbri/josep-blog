import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

//Wrapping the application with the theme provider
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
