import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import "../components/layout.css"

const contact = () => (
	<div className="contact-main">
	  <Layout>
	    <SEO title="Contact Us" />
	    <Banner>
	      <h1>Contact Us</h1>      
	    </Banner>
	  </Layout>
  </div>
)

export default contact
