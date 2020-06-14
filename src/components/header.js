import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Container = styled.header`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;

  margin-bottom: ${props => props.theme.spacings.small};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;
`
const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:visited {
    color: inherit;
  }
`
const Logo = styled.a`
  font-size: 2rem;
  font-weight: 1000;
  color: green;
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
      <nav>
        <List>
          <li>
            {/*<img src={data.logo.publicURL} alt="Josep Bria" width="100" />*/}
            <Logo>JOSEP BRIA</Logo>
          </li>
          <li>
            <StyledLink to="/portfolio"> Projects</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog"> Notes</StyledLink>
          </li>

          <li>
            <StyledLink to="/contact"> Contact</StyledLink>
          </li>
          <li>
            <StyledLink to="/about"> About</StyledLink>
          </li>
        </List>
      </nav>
    </Container>
  )
}

export default Header
