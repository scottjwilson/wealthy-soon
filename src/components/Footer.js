import React from "react"
import styled from "@emotion/styled"
import { Container, Row, Col } from "react-grid-system"
const Footer = () => {
  return (
    <Wrapper>
      <Row>
        <Col md={12} style={{ textAlign: "center" }}>
          <small>
            {" "}
            Copyright © {new Date().getFullYear()} - Wealthy Soon- All Rights
            Reserved
            <br />
            <a href="#">Privacy Policy</a>
          </small>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  color: #2f2f2f;
  small {
    text-align: center;
  }
`

export default Footer
