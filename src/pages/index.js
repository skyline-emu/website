import * as React from "react"
import Navbar from "../components/Navbar"
import Timeline from "../components/Timeline"
import 'tw-elements';
import Landing from "../components/Landing";

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Landing/>
      {/* <Timeline /> */}
    </main>
  )
}

export default IndexPage
