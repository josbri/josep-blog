import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import MainLogo from "../assets/images/logojosep.png"

const Container = styled.header``
const List = styled.li`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
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
            <img src={MainLogo} alt="Josep Bria" width="70" height="70" />
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
