/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-2-Clause
 */

import React from "react"
import Navbar from "../components/Navbar"
import Landing from "../sections/Landing"
import About from "../sections/About"
import Team from "../sections/Team"
import { Helmet } from "react-helmet"
import { useLocalStorage } from "react-use"
import { FaMoon, FaSun } from "react-icons/fa"

// import Download from "../sections/Download"

const IndexPage = () => {

  const [isDark, setIsDark] = useLocalStorage("darkmode", true)

  const buttonHandler = () => {
    setIsDark(!isDark)
  }

  return (
    <main className={isDark ? "dark" : "light"}>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Skyline - Nintendo Switch Emulator</title>
        <meta name="description" content="Skyline is an open source and experimental emulator that runs on ARMv8 Android™ devices and emulates the functionality of a Nintendo Switch™ system." />
        <meta name="keywords" content="Emulator, Nintendo Switch™, Skyline, Android" />
        <meta name="author" content="Skyline Team" />
      </Helmet>

      <div className="fixed z-50 bottom-10 right-10 ">
        <div className="flex space-x-2 justify-center">
          <div>
            <button onClick={buttonHandler} type="button" className="inline-block rounded-full bg-blue-500 text-white leading-normal uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-12 h-12">
              <div className="flex justify-center">
                {isDark ?
                  <FaMoon className="w-5 h-5 block" />
                  :
                  <FaSun className="w-5 h-5 block" />
                }
              </div>
            </button>
          </div>
        </div>
      </div>

      <Navbar />
      <Landing />
      <About/>
      <Team />
      {/* <Download /> */}
    </main> 
  )
}

export default IndexPage
