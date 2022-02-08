import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Landing from "../components/Landing";
import Footer from "../components/Footer";



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

      <div className="fixed z-50 bottom-10 right-10 ">
        <button
          className="w-12 h-12 p-0 transition duration-200 ease-in bg-blue-500 rounded-full shadow active:shadow-lg mouse focus:outline-none"
          onClick={buttonHandler}>
          <span className="" aria-label="jsx-a11y/accessible-emoji" role="img">
            {isDark ? '☀️' : '🌙'}
          </span>
        </button>
      </div>

      <Navbar/>
      <Landing />
      <Footer/>


    </main>
  )
}

export default IndexPage
