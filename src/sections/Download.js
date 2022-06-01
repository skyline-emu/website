/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-2-Clause
 */

import React from "react"

const Download = () => {
    return (
        <div className="w-full pb-20 lg:h-full dark:bg-darkBackground font-inter" id="download">
            <div class="px-8 mx-auto max-w-page">

                <div className="mb-20">
                    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                        <h3 className="mb-6 text-3xl font-bold text-black dark:text-white">Download</h3>
                        <p className="pb-2 mb-6 font-semibold text-blue-500 md:mb-12 md:pb-0">
                            Skyline currently is only available for download through Github. Google Play support is planned.
                        </p>
                    </div>

                    <ul className="flex flex-wrap items-center justify-center my-12 font-roboto">
                        <div class="flex space-x-2 justify-center">
                            <a href="https://github.com/skyline-emu/skyline/actions" data-mdb-ripple="true" data-mdb-ripple-color="light" className="flex px-5 py-3 text-sm font-medium leading-normal text-white uppercase transition duration-150 ease-in-out bg-green-500 rounded-lg shadow-md lg:px-8 hover:bg-green-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg align-center font-roboto">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                    className="w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                                    </path>
                                </svg>
                                Github
                            </a>
                        </div>

                        <div class="flex space-x-2 justify-center ml-3">
                            <a href="" data-mdb-ripple="true" data-mdb-ripple-color="light" className="flex px-5 py-3 text-sm font-medium leading-normal text-white uppercase transition duration-150 ease-in-out bg-gray-500 rounded-lg shadow-md di lg:px-8 hover:bg-gray-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg align-center font-roboto">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                    className="w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                                    </path>
                                </svg>
                                Google Play
                            </a>
                        </div>

                    </ul>


                    <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner relative w-full overflow-hidden rounded-lg">
                            <div class="carousel-item active relative float-left w-full">
                                <img
                                    src="https://media.discordapp.net/attachments/546432817962156034/931251395837964348/Screenshot_20220114-011932103.jpg"
                                    class="block w-[1216px] h-[268.5px] md:h-[537px]"
                                    alt="..."
                                />
                                <div class="carousel-caption hidden md:block absolute text-center bg-white dark:bg-zinc-900 dark:text-white text-black rounded-lg">
                                    <h5 class="text-xl">Sonic Mania</h5>
                                    <p>The first commercial game to boot on Skyline!</p>
                                </div>
                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <img
                                    src="https://cdn.discordapp.com/attachments/546432817962156034/967374268839125062/Screenshot_2022-04-23-16-09-28-90_fcf072b9e4efc4ce5ca3e36691a7c3c6.jpg?width=1216&height=537"
                                    class="block w-[1216px] h-[268.5px] md:h-[537px]"
                                    alt="..."
                                />
                                <div class="carousel-caption hidden md:block absolute text-center bg-white dark:bg-zinc-900 dark:text-white text-black rounded-lg ">
                                    <h5 class="text-xl">Celeste</h5>
                                    <p>Running smoothly on Skyline!</p>
                                </div>
                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <img
                                    src="https://cdn.discordapp.com/attachments/546432817962156034/967374971183718460/Screenshot_2022-04-23-16-12-32-47_fcf072b9e4efc4ce5ca3e36691a7c3c6.jpg"
                                    class="block w-[1216px] h-[268.5px] md:h-[537px]"
                                    alt="..."
                                />
                                <div class="carousel-caption hidden md:block absolute text-center bg-white dark:bg-zinc-900 dark:text-white text-black rounded-lg">
                                    <h5 class="text-xl">Stardew Valley</h5>
                                    <p>Got a huge performance boost recently!</p>
                                </div>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default Download
