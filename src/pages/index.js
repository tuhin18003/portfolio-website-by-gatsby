import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'
import Sidebar from "../components/sidebar"
import ShortcurtMenu from "../components/sidebarRightShortcut"
import Introduction from "../components/introdution"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Header siteTitle="Full Stack Developer" />
    <div id="crtContainer" className="crt-container">
        <Sidebar pName="M. Tuhin" pTitle="Full Stack Developer" />
        <ShortcurtMenu />
        <div className="crt-container-sm">
            <Introduction />
        </div>
    </div>

    
  </Layout>
)

export default IndexPage
