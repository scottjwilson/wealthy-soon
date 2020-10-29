import React from "react"
import styled from "@emotion/styled"
import { Container, Row, Col } from "react-grid-system"
import Image from "./Image"
import theme from "../../config/theme"

const Header = props => {
  return (
    <Contain>
      <Row>
        <Column className="my-5" lg={12}>
          <h2>{props.heading1}</h2>
          <Image />
          <h3>{props.heading2}</h3>
          <p>{props.paragraph}</p>
        </Column>
      </Row>
    </Contain>
  )
}

const Contain = styled(Container)`
  width: 90%;
`

const Column = styled(Col)`
  background-color: ${theme.colors.primary.dark};
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 2rem;
  box-shadow: 0rem 1.25rem 2.625rem 0.375rem rgba(0, 0, 0, 0.18);

  h2 {
    color: ${theme.colors.white.grey};
  }
  h3 {
    color: ${theme.colors.white.grey};
  }
`

export default Header
