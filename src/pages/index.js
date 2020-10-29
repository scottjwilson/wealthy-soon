import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Header from "../components/Header"
import Optin from "../components/Optin"
import Candlesticks from "../components/Candlesticks"
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
      <Wrapper>
        <Candlesticks />
      </Wrapper>
      <One />
      <Two />

      <Testimonials />
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

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
