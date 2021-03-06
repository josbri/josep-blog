import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import MainLayout from "../templates/mainLayout"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "portfolio" } } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              link
              title
              area
              image {
                publicURL
              }
              technologies
              description
            }
            html
          }
        }
      }
      github: file(relativePath: { eq: "githubLogo.svg" }) {
        publicURL
      }
      texture: file(relativePath: { eq: "texture.png" }) {
        publicURL
      }
    }
  `)
  const Card = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ffffff99;
    width: 100%;
    margin: ${props => props.theme.spacings.medium};
    padding: ${props => props.theme.spacings.large}
      ${props => props.theme.spacings.large}
      ${props => props.theme.spacings.large} 0;
    border-radius: 4px;
    box-shadow: ${props => props.theme.shadows.shadow1};
    &:hover {
      -webkit-animation: scale-up-center 400ms
        cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center 400ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
      @-webkit-keyframes scale-up-center {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        100% {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
          box-shadow: ${props => props.theme.shadows.shadow3};
        }
      }
      @keyframes scale-up-center {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        100% {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
          box-shadow: ${props => props.theme.shadows.shadow3};
        }
      }
    }
    h3 {
      font-size: 1.7em;
      margin-bottom: ${props => props.theme.spacings.medium};
    }
    a {
      align-self: flex-end;
    }
  `
  return (
    <MainLayout title="Portfolio">
      <h1>Projects</h1>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <Card>
            <ImageCardContainer>
              <img
                src={edge.node.frontmatter.image.publicURL}
                alt={edge.node.frontmatter.title}
              />
            </ImageCardContainer>
            <TextContainer>
              <h3> {edge.node.frontmatter.title}</h3>
              <p>{edge.node.frontmatter.description}</p>
              <TechContainer>
                {edge.node.frontmatter.technologies.map(tech => (
                  <Tech>{tech}</Tech>
                ))}
              </TechContainer>

              <a
                href={edge.node.frontmatter.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitButton>
                  <img src={data.github.publicURL} alt="github" />
                  <span>View Code</span>
                </GitButton>
              </a>
            </TextContainer>
          </Card>
        )
      })}
    </MainLayout>
  )
}

const TechContainer = styled.div`
  padding: ${props => props.theme.spacings.small} 0;
  margin-bottom: ${props => props.theme.spacings.small};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-size: 0.8rem;
  }
`
const Tech = styled.span`
  padding: ${props => props.theme.spacings.xSmall};
  margin-left: ${props => props.theme.spacings.xSmall};
  border-radius: 4px;
  border: solid 1px ${props => props.theme.colors.main};
  white-space: nowrap;
`

const GitButton = styled.button`
  display: inline-block;
  border: none;
  background-color: white;
  padding: 10px;
  text-decoration: none;
  border-radius: 10px;
  font-size: 1.1rem;
  width: 170px;
  box-shadow: ${props => props.theme.shadows.shadow2};
  transition: all 0.5s;
  img {
    width: 1.2rem;
    margin-right: 1rem;
  }
  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  span:after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  &:hover span {
    padding-right: 25px;
  }
  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`
const ImageCardContainer = styled.div`
  display: flex;
  margin-right: ${props => props.theme.spacings.medium};
  margin-left: ${props => props.theme.spacings.medium};
  width: 30%;
  justify-content: center;
  img {
    display: flex;
    max-width: 200px;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: flex-end;
  p {
    line-height: 1.5rem;
  }
`
export default Portfolio
