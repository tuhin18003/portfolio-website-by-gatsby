import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const ProfessionalSkills = () => {

    const data = useStaticQuery(graphql`
    query {
      pi : markdownRemark(frontmatter: {content_id: {eq: "ps_title"}}) {
        frontmatter {
          title
        }
        excerpt(format: HTML)
      }
      expertise : allMarkdownRemark(filter: {frontmatter: {content_id: {regex: "/(ps_skill)/"}}}) {
        edges {
          node {
            frontmatter {
              title
            }
            id
            excerpt(format: HTML)
          }
        }
      }
    }
  `)

    return (
        <React.Fragment>
            <h3 className="title-thin text-muted">{data.pi.frontmatter.title}</h3>
            {data.expertise.edges.map( item => (
              <div key={item.node.id} dangerouslySetInnerHTML={{__html: item.node.excerpt }} />
            ))}
        </React.Fragment>
    )
}

export default ProfessionalSkills
