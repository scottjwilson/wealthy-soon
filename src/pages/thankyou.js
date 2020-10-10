import React from "react"

import Layout from "../components/layout"
import { Container, Row, Col } from "react-grid-system"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { RiWhatsappFill } from "react-icons/ri"
import "typeface-open-sans"

const ThankYou = () => (
  <Layout>
    <SEO title="Message me on Facebook" />
    <Hero>
      <StyledContainer>
        <Row>
          <Ty md={12}>
            <h1>CONGRATULATIONS!</h1>
            <h3>We've Sent The Price List To Your Email!</h3>
            <h2>MESSAGE ME ON WHATS APP</h2>
            <p>WANT TO GET PAID FAST? MESSAGE ME NOW</p>
            <Whatsapp>
              <a href="https://wa.link/djzyc4">
                MESSAGE ME NOW <RiWhatsappFill style={{ fontSize: "1.2rem" }} />
              </a>
            </Whatsapp>
          </Ty>
        </Row>
      </StyledContainer>
    </Hero>
  </Layout>
)

const Hero = styled.div`
  height: 95vh;
  background-color: #eae9e9;

  color: #ffffff;
`

const StyledContainer = styled(Container)`
  max-width: 32rem;
`
const Ty = styled(Col)`
  h1 {
    color: #e43b2c;
    font-size: 4rem;
    margin: 0;
  }
  h2 {
    color: #2f2f2f;
    font-size: 2rem;

    text-decoration: underline;
  }
  h3 {
    color: #2f2f2f;
  }

  p {
    color: #2f2f2f;
  }

  background-color: #fff;
  padding: 35px 55px 50px;
  margin-top: 2rem;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`

const Whatsapp = styled.button`
  font-family: Open Sans;

  font-weight: 800;
  a {
    color: #fff;
    margin: 0;
    padding: 0.4rem;
    text-decoration: none;
  }
  cursor: pointer;
  padding: 0.5rem;
  color: rgb(255, 255, 255);

  background-color: rgba(48, 160, 92, 1);

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(48, 160, 92, 0.8);
  }
`

export default ThankYou
