import React from "react"
import Head from "../components/head"
import Footer from "../components/footer"
import Header from "../components/header"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
//14 column grid, with 2 blank spaces on the side
//8 column grid in tablet.
const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr repeat(12, minmax(auto, 4.2rem)) 2fr;
  grid-template-rows: 8rem auto auto;
  gap: 0 2rem;
  background-color: #fdf7ed;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%2350c777' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  min-height: 100vh;
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
  margin-top: ${props => props.theme.spacings.small};
  margin-bottom: ${props => props.theme.spacings.small};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
const MainLayout = props => {
  //Get the texture:
  const data = useStaticQuery(graphql`
    query {
      texture: file(relativePath: { eq: "texture.png" }) {
        publicURL
      }
    }
  `)
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
