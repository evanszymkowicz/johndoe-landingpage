import React from "react"
import gitHubIcon from "../../images/github.svg"
import twitterIcon from "../../images/twitter.svg"
import linkedinIcon from "../../images/linkedin.svg"
import dribble from "../../images/dribble.svg"

/** @jsx jsx */
import { jsx } from "@emotion/core"

const SocialIcons = () => {
  return (
    <>
      <a
        css={{
          marginRight: 5,
        }}
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://evanwolf.tech/`}
      >
        <img title="GitHub" alt={`nephlin7`} width="30" src={gitHubIcon} />
      </a>
      <a
        css={{
          marginRight: 5,
        }}
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://evanwolf.tech/`}
      >
        <img
          title="Follow me on twitter"
          alt={``}
          width="30"
          src={twitterIcon}
        />
      </a>
      <a
        css={{
          marginRight: 5,
        }}
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://evanwolf.tech/`}
      >
        <img
          title="Linkedin"
          alt={``}
          width="30"
          src={linkedinIcon}
        />
      </a>
      <a
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://evanwolf.tech/`}
      >
        <img title="Dribble" alt={``} width="30" src={dribble} />
      </a>
    </>
  )
}

export default SocialIcons
