import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Three = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "three.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper>
      <ImageOne fluid={data.placeholderImage.childImageSharp.fluid} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  height: 75%;
  width: 75%;
  box-shadow: 0rem 1.25rem 2.625rem 0.375rem rgba(0, 0, 0, 0.18);

  margin-bottom: 2rem;
`

const ImageOne = styled(Img)``

export default Three
