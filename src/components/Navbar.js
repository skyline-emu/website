/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaDiscord, FaGithub, FaPatreon } from "react-icons/fa";
import Hamburger from "hamburger-react";
import CustomLink from "./CustomLink";

const paths = [
    {
        name: "Home",
        path: "/#",
    },
    {
        name: "About",
        path: "/#about",
    },
    {
        name: "Team",
        path: "/#team",
    },
    {
        name: "Download",
        path: "/download",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div>
            <nav className="bg-white dark:bg-darkBackground">
                <div className="px-8 mx-auto max-w-page">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center ">
                            <CustomLink className="flex-shrink-0" href="/">
                                <img className="w-10 h-10 rounded-full" src={logo} alt="" />
                            </CustomLink>
                            <CustomLink className="flex-col justify-center font-rubik" href="/">
                                <h1 className="px-4 text-xl font-bold text-gray-800 rounded-md dark:text-white" href="/#">
                                    Skyline
                                </h1>
                                <h1 className="px-4 text-xs font-bold text-gray-500 uppercase rounded-md" href="/#">
                                    Emulator
                                </h1>
                            </CustomLink>
                        </div>
                        <div className="hidden md:flex md:flex-row md:grow font-roboto">
                            <div className="flex items-baseline ml-10 space-x-4">
                                {paths.map((i, idx) => (
                                    <CustomLink key={idx} className="px-3 py-2 text-sm tracking-wide font-bold text-gray-500 transition-colors duration-200 uppercase rounded-md dark:text-white hover:font-bold hover:text-blue-500 dark:hover:text-blue-500" href={i.path.substring(1)}>
                                        {i.name}
                                    </CustomLink>
                                ))}
                            </div>
                        </div>
                        <div className="hidden lg:block md:block">
                            <div className="flex items-center">
                                <CustomLink href="https://github.com/skyline-emu/" className="p-1 text-gray-500 text-3xl transition-colors duration-200 rounded-full focus:outline-none hover:text-gray-800 dark:hover:text-blue-500 dark:text-white md:ml-2">
                                    <FaGithub />
                                </CustomLink>
                                <CustomLink href="https://discord.gg/XnbXNQM" className="p-1 text-gray-500 text-4xl transition-colors duration-200 rounded-full focus:outline-none hover:text-gray-800 dark:hover:text-blue-500 dark:text-white md:ml-2">
                                    <FaDiscord />
                                </CustomLink>
                                <CustomLink href="https://www.patreon.com/skyline_emu" className="p-1 text-gray-500 text-3xl transition-colors duration-200 rounded-full focus:outline-none hover:text-gray-800 dark:hover:text-blue-500 dark:text-white md:ml-2">
                                    <FaPatreon />
                                </CustomLink>
                            </div>
                        </div>
                        <div className="flex md:hidden">
                            <Hamburger toggled={navbarOpen} color="#6B7280" toggle={setNavbarOpen} />
                        </div>
                    </div>
                </div>

                <div hidden={navbarOpen ? false : true} className="lg:hidden md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {paths.map((i, idx) => (
                            <CustomLink key={idx} className="block px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white" href={i.path}>
                                {i.name}
                            </CustomLink>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
