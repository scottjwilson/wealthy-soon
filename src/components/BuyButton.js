import React from "react"
import styled from "@emotion/styled"
import { Link, animateScroll as scroll } from "react-scroll"
import Button from "react-bootstrap/Button"

const BuyButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <CourseButton size="lg" variant="danger" block onClick={scrollToTop}>
      Get The Course
    </CourseButton>
  )
}

const CourseButton = styled(Button)`
  width: 75%;
  background-color: rgba(216, 0, 35, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 4px solid rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(216, 0, 35, 0.9);
  }
`

export default BuyButton
