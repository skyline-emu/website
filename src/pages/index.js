/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Team from "../sections/Team";
import Layout from "../components/Layout";
import configureDarkMode from "../libs/configureDarkMode";


const IndexPage = () => {

    configureDarkMode();
   
    return (
        <Layout title="Skyline - Nintendo Switch Emulator">
            <Landing />
            <About />
            <Team />
        </Layout>
    );
};

export default IndexPage;
