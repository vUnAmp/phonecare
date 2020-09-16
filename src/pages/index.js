import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Image from 'gatsby-image'

import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import './index.scss'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    allImageSharp(filter: {fluid: {originalName: {regex: "/backgroundcarousel/"}}}) {
      edges {
        node {
          fluid(maxWidth: 910) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
 `)

  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Carousel>
        <Carousel.Item className='wrap-bg1' >
          <Image fluid={data.allImageSharp.edges[0].node.fluid}
            alt='this is first 1'
            className="d-block w-100 background1"
          />
          <Carousel.Caption>
            <h2 className='titleProduct' > Reparatur in Berlin!</h2>
            <span>
              ✅ Displays Original Qualität.
            </span>
            <span>
              ✅ Display oder Akku Reparatur inh. 1 Std.
            </span>
            <span>
              ✅  Professionelle und schnelle Hilfe innerhalb 1 Stunde!!!
            </span>


          </Carousel.Caption>
          <Link className='contact' to='/'><Button variant="primary">Kontakt</Button></Link>
          <Link className='send' to='/'><Button variant="primary">Gerät senden</Button></Link>
        </Carousel.Item >
        <Carousel.Item className='wrap-bg2'>

          <Image fluid={data.allImageSharp.edges[1].node.fluid}
            alt='this is first 1'
            className="d-block w-100 background2"

          />


          <Carousel.Caption>
            <h2 className='titleProduct' > Reparatur in Berlin!</h2>
            <span>
              ✅ Displays Original Qualität.
            </span>
            <span>
              ✅ Display oder Akku Reparatur inh. 1 Std.
            </span>
            <span>
              ✅  Professionelle und schnelle Hilfe innerhalb 1 Stunde!!!
            </span>
          </Carousel.Caption>
          <Link className='contact' to='/'><Button variant="primary">Kontakt</Button></Link>
          <Link className='send' to='/'><Button variant="primary">Gerät senden</Button></Link>
        </Carousel.Item>
        <Carousel.Item className='wrap-bg1'>

          <Image fluid={data.allImageSharp.edges[2].node.fluid}
            alt='this is first 1'
            className="d-block w-100 background3"

          />

          <Carousel.Caption>
            <h2 className='titleProduct' > Reparatur in Berlin!</h2>
            <span>
              ✅ Displays Original Qualität.
            </span>
            <span>
              ✅ Display oder Akku Reparatur inh. 1 Std.
            </span>
            <span>
              ✅  Professionelle und schnelle Hilfe innerhalb 1 Stunde!!!
            </span>
          </Carousel.Caption>
          <Link className='contact' to='/'><Button variant="primary">Kontakt</Button></Link>
          <Link className='send' to='/'><Button variant="primary">Gerät senden</Button></Link>
        </Carousel.Item>
      </Carousel>


      {/* <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
