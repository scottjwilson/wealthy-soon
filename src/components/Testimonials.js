import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import BuyButton from "./BuyButton"
import styled from "@emotion/styled"
import One from "./Testimonials/One"
import Two from "./Testimonials/Two"
import Three from "./Testimonials/Three"
const Testimonials = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Column lg={12}>
            <Testimonial className="my-5">
              <h1>🔥 What others have said 🔥</h1>
            </Testimonial>
            <span />
            <One />
            <BuyButton />
            <Two />

            <BuyButton />
            <Three />
            <BuyButton />
          </Column>
        </Row>
      </Container>
    </React.Fragment>
  )
}

const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }

  span {
    width: 75%;
    margin: 2rem 0;
    border-radius: 3rem;
    border: 1px solid #333;
  }
  h4 {
    text-transform: uppercase;
  }
  li {
    list-style: none;
  }
`

const Paper = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  border-radius: 2rem;
  padding: 2rem;
  margin: 2rem 0;
  color: #000;
  background-color: #f9f9f9;
  box-shadow: 0rem 1.25rem 2.625rem 0.375rem rgba(0, 0, 0, 0.18);
  h1 {
    color: #000;
    text-align: center;
  }
  ul {
    margin: 0;
  }
  li {
    list-style: none;
  }
`

const Testimonial = styled.div`
  h1 {
    text-align: center;
  }
`

export default Testimonials
