import React from "react"
import { Container, Row, Col } from "react-grid-system"
import styled from "@emotion/styled"

const Testimonials = () => {
  return (
    <Container>
      <Row>
        <Column lg={12}>
          <hr />
          <h1>Who this is for:</h1>
          <ul>
            <li>
              The retail trader who has been LOSING more than they been WINNING
            </li>
            <li> The new trader who has no idea what they're doing</li>
          </ul>

          <h1>What will you learn?</h1>
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

  hr {
    border: 1px solid white;
    
  }
`

export default Testimonials
