// import React from "react"
// import PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"
//
// function SEO({ description, lang, meta, keywords, title }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             # seoImageUrl
//             siteUrl
//           }
//         }
//       }
//     `
//   )
//
//   const metaDescription = description || site.siteMetadata.description
//   // const seoImageUrl = site.siteMetadata.siteUrl + site.siteMetadata.seoImageUrl;
//
//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={`%s | ${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           property: `og:image`,
//           content: seoImageUrl,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ]
//         .concat(
//           keywords.length > 0
//             ? {
//                 name: `keywords`,
//                 content: keywords.join(`, `),
//               }
//             : []
//         )
//         .concat(meta)}
//     />
//   )
// }
//
// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   keywords: [],
// }
//
// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
// }
//
// export default SEO
