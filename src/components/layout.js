/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Carousel, Button, Container, Row, Col, Card } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcPaypal, faDhl, faPaypal } from '@fortawesome/free-brands-svg-icons'

import Header from "./header"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <div className="wrap-footer">

            <Row>
              <Col sl='12' md='6' >
                <span>
                  Copyright ©{new Date().getFullYear()}
                  <br />
              PhoneABC GmbH
           </span>
              </Col>
              <Col sl='12' md='6' className='wrap-partner' >
                <div className="partnerlogodhl partnerlogo"></div>
                <div className="partnerlogopaypal partnerlogo"></div>
              </Col>

            </Row>

          </div>


        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
