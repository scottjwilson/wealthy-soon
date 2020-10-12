import React from "react"
import styled from "@emotion/styled"
import { Link, animateScroll as scroll } from "react-scroll"

const BuyButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <Button onClick={scrollToTop}>
      <h3>Get The Course</h3>
    </Button>
  )
}

const Button = styled.button`
  h3 {
    margin: 0;
    text-transform: uppercase;
  }
  text-align: center;
  width: 75%;
  margin: 0.5rem 0;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgba(216, 0, 35, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 4px solid rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(216, 0, 35, 0.9);
  }
`

export default BuyButton
