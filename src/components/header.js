import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Typewriter from "typewriter-effect"

const Header = () => {
  return (
    <Container>
      <Logo>Josep Bria</Logo>
      <Nav>
        <ul>
          <li>
            <StyledLink to="/portfolio" activeClassName="active">
              {" "}
              Projects
            </StyledLink>
          </li>
          {/*<li>
            <StyledLink to="/blog" activeClassName="active">
              {" "}
              Notes
            </StyledLink>
          </li>*/}
          <li>
            <StyledLink to="/contact" activeClassName="active">
              {" "}
              Contact
            </StyledLink>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}

export default Header

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
  font-weight: ${props => props.theme.fontWeights.thin};
  font-size: 1.2rem;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    li {
      position: relative;

      margin-left: 2rem;
    }
    a:before {
      content: "";
      position: absolute;
      height: 15%;
      width: 0;
      background-color: ${props => props.theme.colors.main50};
      z-index: 0;
      bottom: 25%;
      transition: all 0.5s;
    }
    a:hover:before,
    .active:before {
      width: 100%;
    }
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
  font-size: 3rem;
  font-weight: ${props => props.theme.fontWeights.thin};
  color: ${props => props.theme.colors.main};
`
