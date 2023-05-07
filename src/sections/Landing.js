/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import vulkan from "../images/vk.svg";
import vulkan_white from "../images/vk_light.svg";
import logo from "../images/logo.png";
import Button from "../components/Button";
import CustomLink from "../components/CustomLink";
import { FaDownload, FaSearch, FaStar } from "react-icons/fa";
import DeviceMockup from "../components/DeviceMockup";

const Landing = () => {
    return (
        <div className="w-full md:h-full dark:bg-darkBackground">
            <div className="px-5 py-24 mx-auto md:py-36 max-w-page">
                <div className="flex flex-row">
                    <div className="w-full px-4 md:py-10">
                        <h2 className="md:hidden text-3xl font-extrabold leading-9 dark:text-white mb-5 flex flex-row md:justify-start justify-center">
                            <img className="w-24 h-24 bg-black rounded-full dark:border-white" src={logo} alt="" />
                        </h2>
                        <div className="mb-10 lg:mt-6 font-inter">
                            <h2 className="mb-6 text-3xl font-bold leading-8 tracking-tight text-center dark:text-white sm:text-4xl md:text-left">
                                Skyline
                                <br />
                                <span className="inline-block pt-3 text-2xl text-blue-500">Nintendo Switch™ Emulator for Android™<br/>(No longer in active development)</span>
                            </h2>
                            <p className="text-base text-center dark:text-white md:text-lg md:text-left">Skyline <b>was</b> an open source and experimental emulator that runs on ARMv8 Android™ devices and emulates the functionality of a Nintendo Switch™ system.<br/><br/>All development on Skyline has been ceased due to the potential legal risks involved, this website will remain up for the time being but may be taken down in the future. <CustomLink className="font-bold text-primary underline" href="https://discord.gg/XnbXNQM">Our Discord Server</CustomLink> will still be active for the foreseeable future but will be transitioned into being for our upcoming project at some point. We want to thank everyone who enjoyed Skyline in the past few years ❤️.</p>
                        </div>
                        <ul className="flex flex-wrap items-center justify-center md:justify-start font-roboto">
                            <span className="flex space-x-2 justify-center m-2">
                                <Button href="/download" icon={<FaDownload />} text="Get Skyline" />
                            </span>
                            <span className="flex space-x-2 justify-center m-2">
                                <Button href="#about" icon={<FaSearch />} text="Learn More" />
                            </span>
                        </ul>
                        <div className="items-baseline pt-16 clients">
                            <h6 className="flex items-center text-sm font-bold text-gray-500 uppercase font-inter text-body-color dark:text-white">Built using</h6>
                            <div className="flex items-center w-52">
                                <div>
                                    <img className="block dark:hidden" src={vulkan} alt="Vulkan Logo" />
                                    <img className="hidden dark:block" src={vulkan_white} alt="Vulkan Logo Light" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
