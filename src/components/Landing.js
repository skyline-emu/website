import React from "react"
import vulkan from "../images/vulkan.png"
import vulkan_white from "../images/vulkan-white.png"
import { StaticImage } from "gatsby-plugin-image"


const Landing = () => {
    return (
        <div className="w-full pb-20 lg:h-full dark:bg-darkBackground ">
            <div className="px-8 mx-auto max-w-page py-28">
                <div className="flex flex-row">
                    <div className="w-full px-4 py-10 lg:w-6/12">
                        {/* <h1 className="text-dark dark:text-white font-bold text-4xl sm:text-[42px] lg:text-[40px] xl:text-[42px] leading-snug mb-3">
                            Open Source Nintendo Switch Emulator for Android
                        </h1>
                        <p className="text-base dark:text-white mb-8 text-body-color max-w-[480px]">
                            Skyline is an experimental emulator that runs on ARMv8 Android™ devices and emulates the functionality of a Nintendo Switch™ system.
                        </p> */}
                        <div className="mb-10 lg:mt-6 font-inter">
                            {/* <div>
                                <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-blue-500 uppercase rounded-full bg-teal-accent-400">
                                    Open Source
                                </p>
                            </div> */}
                            <h2 className="max-w-lg mb-6 text-3xl font-bold leading-8 tracking-tight dark:text-white sm:text-4xl">
                                Skyline
                                {/* <br className="hidden md:block" /> your next{" "} */}
                                <br></br>
                                <span className="inline-block text-2xl text-blue-500">
                                    Nintendo Switch™ Emulator for Android™
                                </span>
                            </h2>
                            <p className="text-base dark:text-white md:text-lg">
                                Skyline is an open source and experimental emulator that runs on ARMv8 Android™ devices and emulates the functionality of a Nintendo Switch™ system.
                            </p>
                        </div>
                        <ul className="flex flex-wrap items-center font-roboto">
                            <button className="px-5 py-2 font-bold text-gray-100 uppercase transition-colors duration-700 transform bg-blue-500 border border-blue-500 rounded-lg lg:text-lg hover:text-blue-500 hover:bg-white hover:border-white">Download</button>
                            <button className="px-5 py-2 ml-2 font-bold text-blue-500 uppercase transition-colors duration-700 transform border-2 border-gray-600 rounded-lg lg:text-lg lg:ml-3 hover:bg-white">Learn More</button>
                        </ul>
                        <div className="items-baseline pt-16 clients">
                            <h6 className="flex items-center text-sm font-bold font-inter text-gray-500 uppercase text-body-color dark:text-white">
                                Built using
                            </h6>
                            <div className="flex items-center py-6">
                                <img className="w-[200px] min-h-[50px] show dark:hidden" src={vulkan} alt="lol" />
                                <img className="w-[200px] min-h-[50px] show dark:show" src={vulkan_white} alt="lol" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="hidden px-4 lg:flex"></div> */}
                    {/* Device Mockup created from <a href="https://deviceframes.com/templates/google-pixel-6">Google Pixel 6 mockups</a> */}
                    <div className="z-10 justify-center hidden w-full px-4 py-10 lg:w-6/12 lg:flex">
                        <span className="relative left-[26%]  top-[86%] justify-left align-bottom z-[-1]">
                            <svg
                                width="93"
                                height="93"
                                viewBox="0 0 93 93"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#3B82F6" />
                                <circle cx="2.5" cy="24.5" r="2.5" fill="#3B82F6" />
                                <circle cx="2.5" cy="46.5" r="2.5" fill="#3B82F6" />
                                <circle cx="2.5" cy="68.5" r="2.5" fill="#3B82F6" />
                                <circle cx="2.5" cy="90.5" r="2.5" fill="#3B82F6" />
                                <circle cx="24.5" cy="2.5" r="2.5" fill="#3B82F6" />
                                <circle cx="24.5" cy="24.5" r="2.5" fill="#3B82F6" />
                                <circle cx="24.5" cy="46.5" r="2.5" fill="#3B82F6" />
                                <circle cx="24.5" cy="68.5" r="2.5" fill="#3B82F6" />
                                <circle cx="24.5" cy="90.5" r="2.5" fill="#3B82F6" />
                                <circle cx="46.5" cy="2.5" r="2.5" fill="#3B82F6" />
                                <circle cx="46.5" cy="24.5" r="2.5" fill="#3B82F6" />
                                <circle cx="46.5" cy="46.5" r="2.5" fill="#3B82F6" />
                                <circle cx="46.5" cy="68.5" r="2.5" fill="#3B82F6" />
                                <circle cx="46.5" cy="90.5" r="2.5" fill="#3B82F6" />
                                <circle cx="68.5" cy="2.5" r="2.5" fill="#3B82F6" />
                                <circle cx="68.5" cy="24.5" r="2.5" fill="#3B82F6" />
                                <circle cx="68.5" cy="46.5" r="2.5" fill="#3B82F6" />
                                <circle cx="68.5" cy="68.5" r="2.5" fill="#3B82F6" />
                                <circle cx="68.5" cy="90.5" r="2.5" fill="#3B82F6" />
                                <circle cx="90.5" cy="2.5" r="2.5" fill="#3B82F6" />
                                <circle cx="90.5" cy="24.5" r="2.5" fill="#3B82F6" />
                                <circle cx="90.5" cy="46.5" r="2.5" fill="#3B82F6" />
                                <circle cx="90.5" cy="68.5" r="2.5" fill="#3B82F6" />
                                <circle cx="90.5" cy="90.5" r="2.5" fill="#3B82F6" />
                            </svg>
                        </span>
                        <span className="relative left-[45%]  bottom-[5%] justify-left align-bottom z-[-1]">
                            <svg
                                width="93"
                                height="93"
                                viewBox="0 0 93 93"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#de313f" />
                                <circle cx="2.5" cy="24.5" r="2.5" fill="#de313f" />
                                <circle cx="2.5" cy="46.5" r="2.5" fill="#de313f" />
                                <circle cx="2.5" cy="68.5" r="2.5" fill="#de313f" />
                                <circle cx="2.5" cy="90.5" r="2.5" fill="#de313f" />
                                <circle cx="24.5" cy="2.5" r="2.5" fill="#de313f" />
                                <circle cx="24.5" cy="24.5" r="2.5" fill="#de313f" />
                                <circle cx="24.5" cy="46.5" r="2.5" fill="#de313f" />
                                <circle cx="24.5" cy="68.5" r="2.5" fill="#de313f" />
                                <circle cx="24.5" cy="90.5" r="2.5" fill="#de313f" />
                                <circle cx="46.5" cy="2.5" r="2.5" fill="#de313f" />
                                <circle cx="46.5" cy="24.5" r="2.5" fill="#de313f" />
                                <circle cx="46.5" cy="46.5" r="2.5" fill="#de313f" />
                                <circle cx="46.5" cy="68.5" r="2.5" fill="#de313f" />
                                <circle cx="46.5" cy="90.5" r="2.5" fill="#de313f" />
                                <circle cx="68.5" cy="2.5" r="2.5" fill="#de313f" />
                                <circle cx="68.5" cy="24.5" r="2.5" fill="#de313f" />
                                <circle cx="68.5" cy="46.5" r="2.5" fill="#de313f" />
                                <circle cx="68.5" cy="68.5" r="2.5" fill="#de313f" />
                                <circle cx="68.5" cy="90.5" r="2.5" fill="#de313f" />
                                <circle cx="90.5" cy="2.5" r="2.5" fill="#de313f" />
                                <circle cx="90.5" cy="24.5" r="2.5" fill="#de313f" />
                                <circle cx="90.5" cy="46.5" r="2.5" fill="#de313f" />
                                <circle cx="90.5" cy="68.5" r="2.5" fill="#de313f" />
                                <circle cx="90.5" cy="90.5" r="2.5" fill="#de313f" />
                            </svg>
                        </span>
                        {/* <img
                            src={phone}
                            className="w-[15rem] md:h-landingImg"
                        /> */}
                        <StaticImage className="lg:w-[220px] w-[100px] h-auto" src="../images/phone.png" alt="Super Tux Cart Best Game" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing