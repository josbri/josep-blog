import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  grid-column: 3 / span 10;
  grid-row: 1 / 2;
  margin-top: ${props => props.theme.spacings.small};
  margin-bottom: ${props => props.theme.spacings.small};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
const Nav = styled.nav`
  grid-column: 6;

  font-weight: ${props => props.theme.fontWeights.Thin};
  font-size: 1.2rem;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }
  li {
    margin-left: 2rem;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover,
  &:visited {
    color: inherit;
  }
`
const Logo = styled.a`
  font-size: 4rem;
  font-weight: ${props => props.theme.fontWeights.Thin};
  color: ${props => props.theme.colors.main};
`

const Header = () => {
  //Get the Logo:
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <Container>
      <Logo>Josep Bria</Logo>
      <Nav>
        <ul>
          <li>
            <StyledLink to="/portfolio"> Projects</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog"> Notes</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact"> Contact</StyledLink>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}

export default Header
