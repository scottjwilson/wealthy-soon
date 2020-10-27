import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import styled from "@emotion/styled"

const Two = () => {
  const data = useStaticQuery(graphql`
    query Section2Query {
      contentfulSection2 {
        title
        one
        two
        three
      }
    }
  `)

  const { title, one, two, three } = data.contentfulSection2

  return (
    <React.Fragment>
      <Paper lg={12}>
        <span />
        <div className="my-5">
          <h1 className="align-center">{title}</h1>
          <ul className="mt-4">
            <li>{one}</li>
            <li>{two}</li>
            <li>{three}</li>
          </ul>
        </div>
      </Paper>
    </React.Fragment>
  )
}

const Paper = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  border-radius: 2rem;
  padding: 2rem;
  margin: 2rem 0;
  color: #000;
  background-color: #f9f9f9;
  box-shadow: 0rem 1.25rem 2.625rem 0.375rem rgba(0, 0, 0, 0.18);
  h1 {
    color: #000;
    text-align: center;
  }
  ul {
    margin: 0;
  }
  li {
    list-style: none;
  }
`

export default Two
