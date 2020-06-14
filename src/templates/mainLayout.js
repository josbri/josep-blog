import React from "react"
import Head from "../components/head"
import Footer from "../components/footer"
import Header from "../components/header"
import styled, { createGlobalStyle } from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;
`

const GlobalStyle = createGlobalStyle`
  body {

  }
`
const MainLayout = props => {
  return (
    <Container>
      <Head title={props.title} />
      <Header />
      {props.children}
      <Footer />
    </Container>
  )
}

export default MainLayout
