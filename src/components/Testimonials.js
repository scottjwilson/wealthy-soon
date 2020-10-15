import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import BuyButton from "./BuyButton"
import styled from "@emotion/styled"
import One from "./Testimonials/One"
import Two from "./Testimonials/Two"
import Three from "./Testimonials/Three"
const Testimonials = () => {
  return (
    <Container>
      <Row>
        <Column lg={12}>
          <span />
          <h1>Who this is for 🙋</h1>

          <ul>
            <li>This information is essential for any trader in the market</li>
            <li>Someone who wants an edge in the the market </li>
            <li>
              The retail trader who has been LOSING more than they been WINNING
            </li>
          </ul>
          <Paper>
            <h2>What will you learn?</h2>
            <ul>
              <li>🗠 How to chart Supply and Demand zones</li>
              <li>🎯 How to plot consistent, effienct entries into trades</li>
              <li>
                🏦 How to trade like an <strong>Instituion</strong>
              </li>
            </ul>
          </Paper>

          <Testimonial>
            <h1>🔥 What others have said 🔥</h1>
          </Testimonial>
          <span />
          <Three />
          <BuyButton />
          <Two />
          <One />
          <BuyButton />
        </Column>
      </Row>
    </Container>
  )
}

const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

const Paper = styled.div`
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

  ul {
    margin: 0;
  }
`

const Testimonial = styled.div`
  h1 {
    text-align: center;
    margin: 2rem 0 0 0;
  }
`

export default Testimonials
