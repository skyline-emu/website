/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react"
import Navbar from "../components/Navbar"
import { Helmet } from "react-helmet"
import useDarkModeState from "../libs/useDarkModeState"

const Layout = ({ children, title }) => {
  const isDark = useDarkModeState();

  return (
    <main className={isDark ? "dark" : "light"}>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      {children}
    </main> 
  )
}

export default Layout;
