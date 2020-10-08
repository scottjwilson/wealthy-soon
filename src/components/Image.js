import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import theme from "../../config/theme"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ProfileWrapper>
              <Profile fluid={data.placeholderImage.childImageSharp.fluid} />
            </ProfileWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const ProfileWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  margin-bottom: 2rem;
`

const Profile = styled(Img)`
  border-radius: 50%;
`

export default Image
