import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Landing from "../components/Landing"
import Footer from "../components/Footer"
import About from "../components/About"

const IndexPage = () => {


  const [isDark, setIsDark] = useState(true)

  const buttonHandler = () => {
    setIsDark(current => !current)
  }

  return (


    <main className={isDark ? "dark" : "light"}>

      {/* <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <title>Skyline</title>
      </Helmet> */}
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>

      </head>

      <div className="fixed z-50 bottom-10 right-10 ">
        <button
          className="w-12 h-12 p-0 transition duration-200 ease-in bg-blue-500 rounded-full shadow active:shadow-lg mouse focus:outline-none"
          onClick={buttonHandler}>
          <span className="" aria-label="jsx-a11y/accessible-emoji" role="img">
            {isDark ? '☀️' : '🌙'}
          </span>
        </button>
      </div>

      <Navbar />
      <Landing />
      <About/>

      <Footer />


      {/*
      
      Inter is my suggestion for the website text, what you want for the logo is Rubik, roboto for buttons

      Material design - unfocused, focused, and active as well as ripple
      
      */}


    </main>
  )
}

export default IndexPage
