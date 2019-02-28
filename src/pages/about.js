import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"

const about = () => (
	<div className="about-main">
		<Layout>
			<SEO title="About us" />
			<Banner>
			  <h1>About Us</h1>
			</Banner>
		</Layout>
	</div>
)

export default about
