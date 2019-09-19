import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Overview = () => {

    const data = useStaticQuery(graphql`
    query {
      overview : markdownRemark(frontmatter: {content_id: {eq: "introduction"}}) {
        frontmatter {
          title
        }
        excerpt(format: HTML)
      }
    }
  `)

    return (
        <React.Fragment>
            <h2 className="title-lg text-upper">{data.overview.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML= {{__html : data.overview.excerpt}} />

            <div className="share-box text-left clearfix">
            <button className="share-btn btn btn-bordered btn-upper"> <span className="crt-icon crt-icon-share"></span>Share </button>
            <div className="addthis_inline_share_toolbox"></div>
            </div>
            <p>&nbsp;</p>
        </React.Fragment>
    )
}

export default Overview
