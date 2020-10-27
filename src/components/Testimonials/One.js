import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const One = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulTestimonial1 {
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper>
      <Img fluid={data.contentfulTestimonial1.image.fluid} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  height: 75%;
  width: 75%;
  margin-bottom: 2rem;
  box-shadow: 0rem 1.25rem 2.625rem 0.375rem rgba(0, 0, 0, 0.18);
`

export default One
