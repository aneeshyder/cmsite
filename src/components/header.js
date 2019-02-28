import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container-custom">
      <span className="company-name">
        <Link to="/">Hustler</Link>
      </span>
      <ul className="nav">
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/work/">Work</Link></li>
        <li><Link to="/contact/">contact</Link></li>
      </ul>      
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
