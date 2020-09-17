import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import "./header.scss"
const Header = ({ siteTitle }) => (
  <header>
    <div className="wrap-header">
      <div className="wrap-logo">
        <Link to="/">{siteTitle}</Link>
      </div>
      <nav className="wrap-navlink">
        <ul>
          <li>
            {" "}
            <Link to="/howitwork"> Gerät senden </Link>{" "}
          </li>
          <li>
            <Link to="/contact"> Kontakt</Link>{" "}
          </li>
          <li>
            <Link to="/aboutus"> Über uns </Link>{" "}
          </li>
        </ul>
      </nav>
      <div className="menubar-modal">
        <input hidden type="checkbox" name="" id="menubar-toggle" />
        <label htmlFor="menubar-toggle" className="menubar-icon-wrap">
          <label htmlFor="menubar-toggle" className="menubar-icon">
            {/* <FontAwesomeIcon
                icon={faBars}
                size="2x"
                className="burger-menu"
              /> */}
          </label>
        </label>
        <label htmlFor="menubar-toggle" className="overlay"></label>
        <div className="menubar-modal-box">
          <div className="menubar-header">
            <Link className="menubar-home" to="/">
              Home
            </Link>

            <label htmlFor="menubar-toggle" className="menubar-close">
              {" "}
              &#10005;
            </label>
          </div>
          <ul className="menubar-modal-wrap">
            <li>
              {" "}
              <Link to="/howitwork"> Gerät senden </Link>{" "}
            </li>
            <li>
              <Link to="/contact"> Kontakt</Link>{" "}
            </li>
            <li>
              <Link to="/aboutus"> Über uns </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
