/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import CustomLink from "../components/CustomLink";
import logo from "../images/logo.png";

const About = () => {
    return (
        <div className="w-full pt-10 pb-12 md:pb-32 lg:h-full dark:bg-darkBackground font-inter" id="about">
            <div className="px-8 mx-auto max-w-page">
                <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                    <div className="flex flex-col w-full mr-8 md:w-1/3">
                        <h2 className="text-3xl font-extrabold leading-9 dark:text-white mb-4 flex flex-row md:justify-start justify-center">
                            About Skyline
                            <img className="w-10 h-10 ml-3 rounded-full" src={logo} alt="" />
                        </h2>
                        <div className="mb-16 dark:text-white md:pr-16 pt-3 md:text-left text-center">
                            <p>Skyline was designed to provide an accurate, performant, and user-friendly emulation experience through an ARM Compatibility Layer and System Emulation.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 md:text-left text-center">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-darkPrimary">Is Skyline coming back?</h3>
                        </div>
                        <div className="mb-8 dark:text-white">
                            <p>We have no plans to continue Skyline for the foreseeable future.</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-darkPrimary">Can someone else fork Skyline?</h3>
                        </div>
                        <div className="mb-8 dark:text-white">
                            <p>Yes, all Skyline code is completely open-source and licensed under MPL-2.0. The source code has been made available for anyone who wants to continue Skyline including the incomplete code for <code>texman</code> and <code>nnvk</code> which were still being worked on.</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-darkPrimary">Who developed Skyline?</h3>
                        </div>
                        <div className="mb-8 dark:text-white">
                            <p>
                                The Skyline Project, while being led by Mark, was composed of a team of open-source developers. See the&nbsp;
                                <CustomLink className="font-bold text-primary underline" href="#team">
                                    Team
                                </CustomLink>
                                &nbsp;section for more information.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-darkPrimary">Where does the name come from?</h3>
                        </div>
                        <div className="mb-8 dark:text-white">
                            <p>The Nintendo Switch™ system software is codenamed Horizon. Skyline is a synonym and alludes to that software.</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-darkPrimary">How can I contribute to Skyline?</h3>
                        </div>
                        <div className="mb-8 dark:text-white">
                            <p>
                                As Skyline development has been discontinued, we are no longer accepting contributions. Nothing prevents anyone from forking Skyline as long as they follow our MPL-2.0 license.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
