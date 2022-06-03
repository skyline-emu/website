/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-2-Clause
 */

import React from "react"
import vulkan from "../images/vk.png"
import vulkan_white from "../images/vk_light.png"

import logo from "../images/logo.png"
import CustomLink from "../components/CustomLink"
import { FaDownload, FaSearch } from "react-icons/fa";
import DeviceMockup from "../components/DeviceMockup"

const Landing = () => {
    return (
        <div className="w-full pb-0 md:pb-20 md:h-full dark:bg-darkBackground">
            <div className="px-8 py-24 mx-auto md:py-36 max-w-page">
                <div className="flex flex-row">
                    <div className="w-full px-4 md:py-10 lg:w-6/12">
                        <h2 className="md:hidden text-3xl font-extrabold leading-9 dark:text-white mb-5 flex flex-row md:justify-start justify-center">
                            <img className="w-24 h-24 border-2 border-black rounded-full dark:border-white" src={logo} alt="" />
                        </h2>
                        <div className="mb-10 lg:mt-6 font-inter">
                            <h2 className="max-w-lg mb-6 text-3xl font-bold leading-8 tracking-tight text-center dark:text-white sm:text-4xl md:text-left">
                                Skyline
                                <br></br>
                                <span className="inline-block pt-3 text-2xl text-blue-500">
                                    Nintendo Switch™ Emulator for Android™
                                </span>
                            </h2>
                            <p className="text-base text-center dark:text-white md:text-lg md:text-left">
                                Skyline is an open source and experimental emulator that runs on ARMv8 Android™ devices and emulates the functionality of a Nintendo Switch™ system.
                            </p>
                        </div>
                        <ul className="flex flex-wrap items-center justify-center md:justify-start font-roboto">
                            <div className="flex space-x-2 justify-center m-2">
                                <CustomLink ripple href="https://download.skyline-emu.one" className="flex px-5 py-3 text-sm font-medium leading-normal text-white uppercase transition duration-150 ease-in-out bg-blue-500 rounded-lg shadow-md lg:px-8 hover:bg-blue-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg align-center font-roboto">
                                    <FaDownload className="text-lg mr-2" />
                                    Download
                                </CustomLink>
                            </div>
                            <div className="flex space-x-2 justify-center m-2">
                                <CustomLink ripple href="#about" type="button" className="flex px-5 py-3 text-sm font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out border-2 border-blue-600 rounded-lg lg:px-8 font-roboto focus:outline-none focus:ring-0 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                    <FaSearch className="text-lg mr-2" />
                                    Learn More
                                </CustomLink>
                            </div>
                        </ul>
                        <div className="items-baseline pt-16 clients">
                            <h6 className="flex items-center text-sm font-bold text-gray-500 uppercase font-inter text-body-color dark:text-white">
                                Built using
                            </h6>
                            <div className="flex items-center py-6">
                                <img className="w-[200px] min-h-[50px] show dark:hidden" src={vulkan} alt="Vulkan Logo" />
                                <img className="w-[200px] min-h-[50px] show dark:show" src={vulkan_white} alt="Vulkan Logo Light" />
                            </div>
                        </div>
                    </div>
                    <DeviceMockup />
                </div>
            </div>
        </div>
    )
}

export default Landing