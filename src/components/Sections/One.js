import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import styled from "@emotion/styled"

const One = () => {
  const data = useStaticQuery(graphql`
    query SectionQuery {
      contentfulSection1 {
        title
        one
        two
        three
      }
    }
  `)

  const { title, one, two, three } = data.contentfulSection1

  return (
    <React.Fragment>
      <Column lg={12}>
        <span />
        <div className="my-5">
          <h1 className="align-center">{title}</h1>
          <ul className="mt-4">
            <li>{one}</li>
            <li>{two}</li>
            <li>{three}</li>
          </ul>
        </div>
      </Column>
    </React.Fragment>
  )
}

const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }

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

export default One
