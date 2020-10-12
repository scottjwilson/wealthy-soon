import React, { useState } from "react"
import { navigate } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import styled from "@emotion/styled"
import addToMailchimp from "gatsby-plugin-mailchimp"
import theme from "../../config/theme"

const Optin = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setDisabled(true)
    setMessage("Sending...")
    let listFields = { name }
    const response = await addToMailchimp(email, listFields)
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        setMessage("You're already on to the list!")
      } else {
        setMessage(response.msg)
      }
      setDisabled(false)
    } else {
      setMessage(
        "Thanks! Please check your e-mail and click the confirmation link."
      )
      navigate("/thankyou/")
    }
  }

  return (
    <Wrapper>
      <StyledContainer>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={4}>
              <input
                type="text"
                onChange={event => setName(event.target.value)}
                placeholder="Enter Your Name"
                name="first name"
              />
            </Col>
            <Col md={4}>
              <input
                type="email"
                onChange={event => setEmail(event.target.value)}
                placeholder="Your Email Address Here"
                name="email"
              />
            </Col>
            <Col md={4}>
              <Sub disabled={disabled} type="submit">
                Get The Course
              </Sub>
            </Col>

            <small>{message}</small>
          </Row>
        </form>
      </StyledContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${theme.colors.primary.dark};
  color: #ffffff;
  margin: 0 0 2rem 0;
  padding: 1.5rem 0;
  border-top: 3px solid ${theme.colors.primary.green};
  border-bottom: 2rem solid ${theme.colors.primary.darker};
`

const StyledContainer = styled(Container)`
  width: 75%;
  // margin-top: 2rem;
  // text-align: center;

  form {
    margin: 0;
  }
  input {
    margin: 0.5rem 0;
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
  }
`

const Sub = styled.button`
  text-align: center;
  width: 100%;
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

export default Optin
