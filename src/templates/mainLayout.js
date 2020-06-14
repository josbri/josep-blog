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
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 8rem 20rem 5rem auto;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`
const Body = styled.div`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: ${props => props.theme.spacings.medium};
  display: flex;
  justify-content: center;
  align-items: flex-start;

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

      <Footer />
    </Container>
  )
}

export default MainLayout
