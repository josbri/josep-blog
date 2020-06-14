import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Container = styled.header``
const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
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
            <Link to="/portfolio"> Projects</Link>
          </li>
          <li>
            <Link to="/blog"> Notes</Link>
          </li>
          <li>
            <img src={data.logo.publicURL} alt="Josep Bria" width="100" />
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
        </List>
      </nav>
    </Container>
  )
}

export default Header
