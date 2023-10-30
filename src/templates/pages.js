import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/Layout"
// import { Seo } from "../components/SEO"

const PostsTemplate = ({ data, children }) => {
  return (
    <>
        <Layout theme="single">
            <h1>{data.mdx.frontmatter.title}</h1>
            <MDXProvider>{children}</MDXProvider>
        </Layout>
    </>
  )
}

export default PostsTemplate

// export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.description} />

// export const query = graphql`
//     query TemplatePage($slug: String) {
//         mdx(frontmatter: {slug: {eq: $slug}}) {
//             frontmatter {
//                 title
//                 slug
//             }
//         }
//     }
// `