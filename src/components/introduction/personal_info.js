import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const PersonalInfo = () => {

    const data = useStaticQuery(graphql`
    query {
      pi : markdownRemark(frontmatter: {content_id: {eq: "personal_infomation"}}) {
        frontmatter {
          title
        }
        excerpt(format: HTML)
      }
    }
  `)
  console.log( data ) 

    return (
        <React.Fragment>
            <h3 className="title-thin text-muted">{data.pi.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{__html : data.pi.excerpt }} />
        </React.Fragment>
    )
}

export default PersonalInfo
