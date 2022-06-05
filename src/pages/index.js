/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react"
import Navbar from "../components/Navbar"
import Landing from "../sections/Landing"
import About from "../sections/About"
import Team from "../sections/Team"
import { Helmet } from "react-helmet"
import useDarkModeState from "../libs/useDarkModeState"

// import Download from "../sections/Download"

const IndexPage = () => {

  const isDark = useDarkModeState();

  return (
    <main className={isDark ? "dark" : "light"}>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Skyline - Nintendo Switch Emulator</title>
        <meta name="description" content="Skyline is an open source and experimental emulator that runs on ARMv8 Android™ devices and emulates the functionality of a Nintendo Switch™ system." />
        <meta name="keywords" content="Emulator, Nintendo Switch™, Skyline, Android" />
        <meta name="author" content="Skyline Team" />
      </Helmet>
      <Navbar />
      <Landing />
      <About/>
      <Team />
      {/* <Download /> */}
    </main> 
  )
}

export default IndexPage
