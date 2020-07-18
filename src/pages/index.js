import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import debatenight from '../gifs/debatenight.gif'
import canvas from '../gifs/canvass.gif'
import votemail from '../gifs/votemail.gif'
import phone from '../gifs/phone.gif'
import Button from "@material-ui/core/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Elex Scopes - 2020" />
    {/* <marquee style={{ scrolldelay:"5" }}><h1>ELEX SCOPES</h1></marquee> */}
    <h1>ELEX SCOPES</h1>
    <p>Let us be a part of your journey until Tuesday, November 3</p>
    <Button variant="contained">Discover my Elex Scope</Button>
    <p></p>
    <h3>Browse the 12 Election Horoscopes</h3>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={debatenight} alt="debate night" />
      <img src={canvas} alt="canvas" />
      <img src={votemail} alt="votemail" />
      <img src={phone} alt="votemail" />
    </div>

    
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
