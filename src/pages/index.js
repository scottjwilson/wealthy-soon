import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"

import SEO from "../components/seo"
import Header from "../components/Header"
import Optin from "../components/Optin"
import One from "../components/Sections/One"
import Two from "../components/Sections/Two"
import Testimonials from "../components/Testimonials"

const IndexPage = ({ data }) => {
  const { title, subtitle, subtitle2 } = data.contentfulHeader
  return (
    <Layout>
      <SEO title="Supply & Demand Trading" />
      <Header heading1={title} heading2={subtitle} paragraph={subtitle2} />
      <Optin />
      <Container>
        <Row>
          <One />
          <Two />
        </Row>
      </Container>
      <Testimonials />
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulHeader {
      title
      subtitle
      subtitle2
    }
  }
`
export default IndexPage
