import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"


const SplashImage = () => (
    <StaticQuery
        query={graphql ` query { placeholderImage: file(relativePath: { eq: "dev.jpg" }) { childImageSharp { fluid(maxWidth: 1266) { ...GatsbyImageSharpFluid_noBase64 } } } } `}
        render={data => <Img
        className={`fade-in`}
        alt="Stock Photo"
        fluid={data.placeholderImage.childImageSharp.fluid}/>}/>
)
export default SplashImage
