import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"

const work = () => (
	<div className="work-main">
		<Layout>
		    <SEO title="Our Works" />
				<Banner>
		      		<h1>Our Projects</h1>      
		    	</Banner>
		  </Layout>
	</div>
)

export default work
