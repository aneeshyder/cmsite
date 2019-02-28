import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Banner = ({ children }) => (
  <div className="banner-main">
    <div className="container-custom">
      {children}   
    </div>
  </div>
)

Banner.propTypes = {
  siteTitle: PropTypes.string,
}

Banner.defaultProps = {
  siteTitle: ``,
}

export default Banner
