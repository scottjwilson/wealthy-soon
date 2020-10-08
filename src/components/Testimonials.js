import React from "react"
import { Container, Row, Col } from "react-grid-system"
import styled from "@emotion/styled"

const Testimonials = () => {
  return (
    <Container>
      <Row>
        <Column lg={12}>
          <hr />
          <h1>WHO THIS IS FOR:</h1>
          <ul>
            <li>
              The retail trader who has been LOSING more than they been WINNING
            </li>
            <li> The new trader who has no idea what they're doing</li>
          </ul>
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
`

export default Testimonials
