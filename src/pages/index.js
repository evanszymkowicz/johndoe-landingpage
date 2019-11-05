import Layout from "../components/layout"
import SplashImage from "../components/image"
import SocialIcons from "../components/social-icons"
// import SEO from "../components/seo"

/** @jsx jsx */
import { jsx } from "@emotion/core"

const Home = () => (
  <Layout>
    {/* <SEO
      title="Home"
      description="John Doe - Front End Developer"
    /> */}

    <div
      css={{
        maxWidth: `100%`,
        maxHeight: `100vh`,
        overflow: `hidden`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
       <div
        css={{
          position: `absolute`,
          top: 30,
          right: 30,
        }}
      >
       <a css={{color:`#333`,textDecoration:`none`}} href={`https://evanwolf.tech/`}>Contact</a>
      </div>
      <div
        css={{
          position: `absolute`,
          bottom: 30,
          right: 30,
        }}
      >
        <SocialIcons />
      </div>
      <section
        css={{
          position: `relative`,
          width: `40%`,
          height: `100vh`,
          textAlign: `center`,
          lineHeight: `3.5rem`,
          fontSize: `2rem`,
          background: `linear-gradient(to top, #09203f 0%, #0055A2 100%)`,
          color: `white`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          flexDirection: `column`,
        }}
      >
        <div className="hero-image">
          <SplashImage />
        </div>
      </section>

      <section className="info-area">
        <span
          css={{
            color: `#6f6f6f`,
          }}
        >
          Website Developer
        </span>
        <h1 className="main-title tracking-in-expand ">John Doe</h1>
        <p
          css={{
            lineHeight: `27px`,
            marginBottom: `15px`,
          }}
        >
          I am a Front-End web developer in the United States. <br/> I specialize in
          <a
            rel="noreferrer noopener"
            href={`https://evanwolf.tech/`}
            target={`_blank`}
            css={{
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            GatsbyJS
          </a>
          <span aria-label="laptop" role="img">
            💻
          </span>
          {/* <span role="img" aria-label="code">
            👨‍💻
          </span> */}
        </p>

        <br />
        <a
          css={{
            borderRadius: 25,
            padding: `14px 28px`,
          }}
          className="button -dark center"
          href="https://evanwolf.tech/"
        >
        Resume
        </a>
      </section>
    </div>
  </Layout>
)

export default Home
