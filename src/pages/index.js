import React, { useState } from "react"
import Navbar from "../components/Navbar"
import 'tw-elements';
import Landing from "../components/Landing";
import { Helmet } from "react-helmet"



const IndexPage = () => {


  const [isDark, setIsDark] = useState(true)

  const buttonHandler = () => {
    setIsDark(current => !current)
  }

  return (
    <main>

      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <meta name="description" content=""/>
        <title>Skyline</title>
      </Helmet>

      <Navbar />
      <Landing />
    </main>
  )
}

export default IndexPage
