import React from "react"
import logo from "../images/skyline-logo.png"
const elements = typeof window !== `undefined` ? require("tw-elements") : null

const About = () => {
    return (
        <div className="w-full pb-12 md:pb-32 lg:h-full dark:bg-darkBackground font-inter" id="about">
            <div class="px-8 mx-auto max-w-page">
                <div class="mx-auto max-w-6xl flex flex-col md:flex-row">
                    <div className="flex flex-col w-full mr-8 md:w-1/3">
                        <h2 class="text-3xl font-extrabold leading-9 dark:text-white mb-4 flex flex-row md:justify-start justify-center">
                            About Skyline
                            <img className="w-10 h-10 ml-3 rounded-full" src={logo} alt="" />
                        </h2>
                        <div class="mb-16 dark:text-white md:pr-16 pt-3 md:text-left text-center">
                            <p>
                                hello friends, markus technologies in collaboration with iviar industries for qa brings to you today this Great better discord plugin to remove
                            </p>
                        </div>
                    </div>
                    <div class="w-full md:w-2/3 md:text-left text-center">
                        <div class="mb-4">
                            <h3 class="text-xl font-semibold text-blue-500">
                                Who created Skyline?
                            </h3>
                        </div>
                        <div class="mb-16 dark:text-white">
                            <p>
                                hello friends, markus technologies in collaboration with iviar industries for qa brings to you today this Great better discord plugin to remove
                            </p>
                        </div>
                        <div class="mb-4">
                            <h3 class="text-xl font-semibold text-blue-500">
                                Where does the name come from?
                            </h3>
                        </div>
                        <div class="mb-16 dark:text-white">
                            <p>
                                hello friends, markus technologies in collaboration with iviar industries for qa brings to you today this Great better discord plugin to remove
                            </p>
                        </div>
                        <div class="mb-4 text-blue-500">
                            <h3 class="text-xl font-semibold">
                                How can I contribute to Skyline?
                            </h3>
                        </div>
                        <div class="mb-16 dark:text-white">
                            <p>
                                hello friends, markus technologies in collaboration with iviar industries for qa brings to you today this Great better discord plugin to remove
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About




