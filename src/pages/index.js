import React from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"

import Image from 'gatsby-image'

import { Carousel, Button, Container, Row, Col, Card } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faMobileAlt, faKissWinkHeart, faHandshake, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import './index.scss'
import serivce1 from '../images/service1.png'

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
      <h3 className='whyus' >   Wieso haben Sie sich bei uns gewählt? </h3>
      <Container>
        <Row>
          <Col xs='12' md='6' className='whyus_card whyus_card1' >
            <Card >
              <div className="whyus_title">
                <FontAwesomeIcon icon={faTools} size='2x' color='#17a2b8' /> <h3>Deine Handy Reparatur </h3>
              </div>

              <Card.Body>

                <Card.Text>
                  Wir vom Repair-Dome bieten dir einen Rundum-Service für die Reparatur deines Smartphones,
                  Tablets oder Wearable. Egal ob Displayschaden, Wasserschaden, technischer Defekt oder Softwareprobleme -
                  wir reparieren schnellstmöglich. Als zertifiziertes und autorisiertes Repaircenter für Hersteller wie Samsung, HUAWEI, Wiko und Co.
                  bieten wir dir innerhalb und außerhalb der Garantie besten Service.
                  Unsere kompetenten und herstellergeschulten Techniker sorgen für eine schnelle Handy Reparatur.
    </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs='12' md='6' className='whyus_card whyus_card2' >
            <Card >
              <div className="whyus_title">
                <FontAwesomeIcon icon={faMobileAlt} size='2x' color='#17a2b8' /> <h3>Handy kaputt? Wir helfen! </h3>
              </div>

              <Card.Body>

                <Card.Text>
                  Sende uns jederzeit dein defektes Handy, Tablet oder Wearable und wir reparieren es für dich.
                  <br />
                  <br />
                  Egal ob innerhalb oder außerhalb der Garantie - wir machen dein Gerät wieder fit!
                  <br />

                  Du kannst uns natürlich auch im Repair-Dome in Nordhorn besuchen und bei deiner Reparatur direkt zuschauen.
                  <br />
                  <br />
                  Mach es dir in unserer Repair-Dome Lounge gemütlich und lass unsere Techniker die Arbeit für dich erledigen.
    </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs='12' md='6' className='whyus_card whyus_card3' >
            <Card >
              <div className="whyus_title">
                <FontAwesomeIcon icon={faKissWinkHeart} size='2x' color='#17a2b8' /> <h3>Deine Vorteile </h3>
              </div>

              <Card.Body>

                <Card.Text>
                  Eine Handy Reparatur ist immer mit Aufwand verbunden. Egal, ob es sich um einen Displayschaden, Wasserschaden oder einen Garantiefall handelt.
                  Das Repair-Dome Team kümmert sich um alle anfallenden Schäden, schnell und zuverlässig. Wenn du in der Region wohnst, geht es sogar mit einem Besuch bei uns ganz besonders schnell. Du kannst Live dabei sein und dein Handy während der Reparatur immer im Auge behalten. Solltest du für die Handy Reparatur das Gerät einschicken,
                  sorgen wir für eine schnelle Abwicklung und sofortigen Versand nach der Fertigstellung. Überzeuge dich selbst!
    </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs='12' md='6' className='whyus_card whyus_card4' >
            <Card >
              <div className="whyus_title">
                <FontAwesomeIcon icon={faHandshake} size='2x' color='#17a2b8' /> <h3>Handy kaputt? Wir helfen! </h3>
              </div>

              <Card.Body>

                <Card.Text>
                  Ein Displayschaden verursacht immer Ärger und schränkt zu dem auch noch die Funktionsfähigkeit deines Handys ein.
                  Das gleiche gilt ärgerlicherweise auch bei einem Wasserschaden. Wir versprechen dir,
                  dass wir schnellstmöglich deine Reparatur durchführen und dazu für die Hersteller Samsung,
                  HUAWEI und WIKO ausschließlich original Ersatzteile für dein Gerät verwenden.
                  <br />
                   Bei Smartphones,
                  Tablets oder Wearables anderer Hersteller verwenden wir immer originalgetreue Ersatzteile.
                  Das gewährleistet eine hohe Qualität und dein Handy läuft wieder wie am Schnürchen.
    </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
      <div className="marquee">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="reachus">
        <Row>
          <Col xs='12' md='4' className='reachus-border' >
            <div className="reachus-method">
              <FontAwesomeIcon icon={faPhone} size='2x' color='#17a2b8' /> <h3>Hotline </h3>
            </div>
            <span>

              0177 7467357
              <br />
              Mi-Mo 9:00 - 18:00 Uhr
            </span>
          </Col>
          <Col xs='12' md='4' className='reachus-border' >
            <div className="reachus-method ">
              <FontAwesomeIcon icon={faMailBulk} size='2x' color='#17a2b8' /> <h3>Kontakt</h3>
            </div>
            <span>
              phoneabcdo@gmail.com
              <br />

            </span>
          </Col>

          <Col xs='12' md='4' className='reachus-border' onClick={() => {
            navigate('https://www.facebook.com/suachuaonline24/')
          }} >
            <div className="reachus-method reachus-facebook" onClick={() => {
              navigate('https://www.facebook.com/suachuaonline24/')
            }}  >
              <FontAwesomeIcon icon={faFacebook} size='2x' color='#17a2b8' /> <h3>Facebook </h3>
            </div>
            <span>
              Unser Social Medial
              <br />
              Gib uns dein Tumb
            </span>

          </Col>
        </Row>
      </div>

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
