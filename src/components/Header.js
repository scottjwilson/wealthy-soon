import React from "react"
import styled from "@emotion/styled"
import { Container, Row, Col } from "react-grid-system"
import Image from "./Image"
import theme from "../../config/theme"

const Header = props => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Column lg={12}>
            <h1>{props.heading1}</h1>

            <Image />
            <h2>{props.heading2}</h2>
            <p>{props.paragraph}</p>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 3rem 0;
  background-color: ${theme.colors.primary.darker};
  color: ${theme.colors.primary.green};

  h1 {
    text-transform: uppercase;
    font-weight: 600;

    margin: 1rem 0;
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
    /* font-style: italic; */
    /* text-shadow: 1px 1px #fff; */
  }
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
`

export default Header
