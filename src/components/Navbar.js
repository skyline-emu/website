import React from "react"
import logo from "../images/skyline-logo.png"

const Navbar = () => {
    return (
        <div className="">
            <nav className="bg-white dark:bg-darkBackground">
                <div className="px-8 mx-auto max-w-page">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center ">
                            <a className="flex-shrink-0" href="/">
                                <img className="w-10 h-10 rounded-full" src={logo} alt="" />
                            </a>
                            <div className="flex-col justify-center">
                                <h1 className="px-4 text-xl font-bold text-gray-800 rounded-md dark:text-white" href="/#">
                                    Skyline
                                </h1>
                                <h1 className="px-4 text-xs font-bold text-gray-500 uppercase rounded-md" href="/#">
                                    Emulator
                                </h1>
                            </div>
                        </div>
                        <div className="hidden md:flex md:flex-row md:grow">
                            <div className="flex items-baseline ml-10 space-x-4">
                                <a className="px-3 py-2 text-sm font-bold text-gray-500 uppercase rounded-md hover:text-blue-500 hover:font-bold dark:text-white dark:hover:text-blue-500" href="/#">
                                    Home
                                </a>
                                <a className="px-3 py-2 text-sm font-bold text-gray-500 uppercase rounded-md dark:text-white hover:font-bold hover:text-blue-500 dark:hover:text-blue-500" href="/#">
                                    About
                                </a>
                                <a className="px-3 py-2 text-sm font-bold text-gray-500 uppercase rounded-md hover:text-blue-500 dark:text-white dark:hover:text-blue-500" href="/#">
                                    Team
                                </a>
                                <a className="px-3 py-2 text-sm font-bold text-gray-500 uppercase rounded-md hover:text-blue-500 hover:font-bold dark:text-white dark:hover:text-blue-500" href="/#">
                                    Download
                                </a>
                            </div>
                        </div>
                        <div className="block">
                            <div className="flex items-center ml-4">
                                <a href="https://github.com/skyline-emu/" className="p-1 text-gray-500 transition-colors duration-200 rounded-full focus:outline-none hover:text-gray-800 dark:hover:text-blue-500 dark:text-white ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl" viewBox="0 0 1792 1792">
                                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                        </path>
                                    </svg>
                                </a>
                                <a href="https://discord.gg/XnbXNQM" className="p-1 text-gray-500 transition-colors duration-200 rounded-full md:ml-3 focus:outline-none hover:text-gray-800 dark:hover:text-blue-500 dark:text-white ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                    </svg>
                                </a>
                                {/* <div className="relative ml-3">
                                    <div className="relative inline-block text-left">
                                        <div>
                                            <button type="button" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                                <svg width="20" fill="currentColor" height="20" className="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                            <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <a href="#" className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span className="flex flex-col">
                                                        <span>
                                                            Settings
                                                        </span>
                                                    </span>
                                                </a>
                                                <a href="#" className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span className="flex flex-col">
                                                        <span>
                                                            Account
                                                        </span>
                                                    </span>
                                                </a>
                                                <a href="#" className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span className="flex flex-col">
                                                        <span>
                                                            Logout
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="flex -mr-2 md:hidden">
                            <button className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md dark:text-white hover:text-gray-300 focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white" href="/#">
                            Home
                        </a>
                        <a className="block px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white" href="/#">
                            Gallery
                        </a>
                        <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white" href="/#">
                            Content
                        </a>
                        <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white" href="/#">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar