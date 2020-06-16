import React from "react"
import Head from "../components/head"
import Footer from "../components/footer"
import Header from "../components/header"
import styled from "styled-components"

//14 column grid, with 2 blank spaces on the side
//8 column grid in tablet.
const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr repeat(12, minmax(auto, 4.2rem)) 2fr;
  grid-template-rows: 8rem 20rem 5rem auto;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 3rem repeat(6, 1fr) 3rem;
    grid-gap: 0 1rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`
const Body = styled.div`
  grid-column: 3 / span 10;
  min-height: 11.25rem;
  padding: ${props => props.theme.spacings.medium};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
const MainLayout = props => {
  return (
    <Container>
      <Head title={props.title} />
      <Header />
      <Body>{props.children}</Body>
    </Container>
  )
}

export default MainLayout
