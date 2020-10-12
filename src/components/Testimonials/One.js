import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const One = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "one.jpg" }) {
        childImageSharp {
          fluid {
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
  height: 50%;
  width: 50%;
  margin-bottom: 2rem;
  box-shadow: 0rem 1.25rem 2.625rem 0.375rem rgba(0, 0, 0, 0.18);
`

const ImageOne = styled(Img)``

export default One
