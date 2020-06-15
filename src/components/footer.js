import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.footer`
  grid-column: 2 / span 12;
  grid-row: 4;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  p {
    text-align: center;
    margin-bottom: 0.5rem;
    flex: 0 0 100%;
  }
`

const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  img {
    padding: 0 1rem;
    transition: filter 0.3s ease;
    width: 55px;
    &:hover,
    &:focus {
      filter: brightness(150%);
    }
  }
`
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      linkedin: file(relativePath: { eq: "linkedinLogo.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "githubLogo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <Container>
      <FooterSocialWrapper>
        <p>Created by Josep Bria, ©2020</p>
        <FooterSocialIcons>
          <a
            href="https://www.linkedin.com/in/josepbria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="linkedin" />
          </a>
          <a
            href="https://github.com/josbri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="github" />
          </a>
        </FooterSocialIcons>
      </FooterSocialWrapper>
    </Container>
  )
}

export default Footer
