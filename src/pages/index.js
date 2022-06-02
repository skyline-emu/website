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

      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>

      <div className="fixed z-50 bottom-10 right-10 ">
        <div className="flex space-x-2 justify-center">
          <div>
            <button onClick={buttonHandler} type="button" className="inline-block rounded-full bg-blue-500 text-white leading-normal uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-12 h-12">
              <div className="flex justify-center">
                {isDark ?
                  <svg
                    className="w-5 h-5 block"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    />
                  </svg> :
                  <svg
                    className="w-5 h-5 block"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    />
                  </svg>
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
