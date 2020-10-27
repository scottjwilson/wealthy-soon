import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import styled from "@emotion/styled"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <ProfileWrapper>
      <Profile fluid={data.placeholderImage.childImageSharp.fluid} />
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  margin-bottom: 2rem;
`

const Profile = styled(Img)`
  border-radius: 50%;
  border: 5px solid white;
`

export default Image
