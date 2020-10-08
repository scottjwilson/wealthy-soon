import React from "react"
import styled from "@emotion/styled"
import { Container, Row, Col } from "react-grid-system"
import Image from "./Image"
import theme from "../../config/theme"

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Column lg={12}>
            <h1>Wealty Soon</h1>
            <Image />
            <h2>Supply and Demand Trading</h2>
            <p>Bits of Advice for Traders seeking maximum profitablity</p>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 0 1rem 0;
  background-color: ${theme.colors.primary.darker};
  color: ${theme.colors.primary.green};

  h1 {
    margin: 1rem 0;
  }
`

const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Header
