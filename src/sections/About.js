import React from "react"
import logo from "../images/skyline-logo.png"
const elements = typeof window !== `undefined` ? require("tw-elements") : null




const About = () => {

    return (

        <div className="w-full pb-32 lg:h-full dark:bg-darkBackground font-inter" id="about">
            <div class="px-8 mx-auto max-w-page">
                <div class="mx-auto max-w-6xl flex flex-col md:flex-row">
                    <div className="flex flex-col w-full mr-8 md:w-1/3">
                        <h2 class="text-3xl font-extrabold leading-9 dark:text-white mb-4 flex flex-row">
                            About Skyline
                            <img className="w-10 h-10 ml-3 rounded-full" src={logo} alt="" />
                        </h2>
                        <div class="mb-16 dark:text-white pr-16">
                            <p>
                                hello friends, markus technologies in collaboration with iviar industries for qa brings to you today this Great better discord plugin to remove
                            </p>
                        </div>
                    </div>
                    <div class="w-full md:w-2/3">
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

            {/* <div class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white dark:bg-gray-800 max-w-sm">
                    <a href="#!">
                        <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div> */}




        </div >

    )

}

export default About;




