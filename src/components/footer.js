import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
const Footer = () => {
  return (
    <Container>
      <p>Created by Josep Bria, ©2020</p>
      <p>Need a developer? </p>
    </Container>
  )
}

export default Footer
