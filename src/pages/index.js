import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import whoWeAre from "../images/who-image.jpg"

const IndexPage = () => (
  <div className="home-main">
    <Layout>
	  	<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
	  	<Banner>
		    <h1>Grow your business</h1>
		    <p>Give your business a boost with a beautifully crafted homepage.</p> 
	  	</Banner>
	  	<div className="py-5 text-center">
	  		<strong className="heading">What we believe in</strong>
	  		<h2>Grow your business, establish your brand, and put your customers first.</h2>
	  	</div>
  		<div className="row">
  			<div className="col-lg-4">
				<strong className="heading pt-3">About</strong>
				<h2>Who we are</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<Link to="/contact" className="blk-btn">Learn More</Link>
  			</div>
  			<div className="col-lg-8">
				<img src={whoWeAre} alt="who we are" />
  			</div>
    	</div>  
    </Layout>
  </div>
)

export default IndexPage
