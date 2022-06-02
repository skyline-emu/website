/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-2-Clause
 */

import React from "react"
import mark from "../images/mark.webp"
import billy from "../images/billy.webp"
import lynx from "../images/lynx.webp"
import mc from "../images/mc.webp"
import ducc from "../images/ducc.webp"
import glade from "../images/glade.webp"
import king from "../images/king.webp"
import will from "../images/will.webp"
import ivar from "../images/ivar.webp"
import CustomLink from "../components/CustomLink"

const Team = () => {
    return (
        <div className="w-full pb-20 lg:h-full dark:bg-darkBackground font-inter">
            <div class="px-8 mx-auto max-w-page">

                <div className="mb-20">
                    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                        <h3 className="mb-6 text-3xl font-bold text-black dark:text-white">Our Team</h3>
                        <p className="pb-2 mb-6 font-semibold text-blue-500 md:mb-12 md:pb-0">
                            The Skyline Team is composed of passionate open source contributors from all around the word.
                        </p>
                    </div>

                    <div className="grid gap-6 pt-4 text-center md:grid-cols-4" id="team">
                        <div>
                            <div className="block bg-white rounded-lg shadow-lg dark:bg-zinc-900 dark:text-white">
                                <div className="h-20 overflow-hidden rounded-t-lg"></div>
                                <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                                    <img alt="profile" src={mark}/>
                                </div>
                                <div className="p-6">
                                    <CustomLink href="https://github.com/PixelyIon"><h4 className="mb-4 text-2xl font-bold text-pink-500 underline">Mark</h4></CustomLink>
                                    <p className="mt-4 mb-4">Lead Developer</p>
                                    {/* <CustomLink className="font-bold text-pink-500 underline" href="">Github</CustomLink> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="block bg-white rounded-lg shadow-lg dark:bg-zinc-900 dark:text-white">
                                <div className="h-20 overflow-hidden rounded-t-lg"></div>
                                <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                                    <img alt="profile" src={billy}/>
                                </div>
                                <div className="p-6">
                                <CustomLink href="https://github.com/bylaws"><h4 className="mb-4 text-2xl font-bold text-pink-500 underline">ByLaws</h4></CustomLink>
                                    <p className="mt-4 mb-4">Developer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="block bg-white rounded-lg shadow-lg dark:bg-zinc-900 dark:text-white">
                                <div className="h-20 overflow-hidden rounded-t-lg"></div>
                                <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                                    <img alt="profile" src={lynx}/>
                                </div>
                                <div className="p-6">
                                <CustomLink href="https://github.com/lynxnb"><h4 className="mb-4 text-2xl font-bold text-pink-500 underline">Lynx</h4></CustomLink>
                                    <p className="mt-4 mb-4">
                                        Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="block bg-white rounded-lg shadow-lg dark:bg-zinc-900 dark:text-white">
                                <div className="h-20 overflow-hidden rounded-t-lg"></div>
                                <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                                    <img alt="profile" src={mc}/>
                                </div>
                                <div className="p-6">
                                <CustomLink href="https://github.com/MCredstoner2004"><h4 className="mb-4 text-2xl font-bold text-pink-500 underline">Blacky</h4></CustomLink>
                                    <p className="mt-4 mb-4">Developer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="block bg-white rounded-lg shadow-lg dark:bg-zinc-900 dark:text-white">
                                <div className="h-20 overflow-hidden rounded-t-lg"></div>
                                <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                                    <img alt="profile" src={ducc}/>
                                </div>
                                <div className="p-6">
                                <CustomLink href="https://github.com/msoham123"><h4 className="mb-4 text-2xl font-bold text-pink-500 underline">ducc</h4></CustomLink>
                                    <p className="mt-4 mb-4">Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="block bg-white rounded-lg shadow-lg dark:bg-zinc-900 dark:text-white">
                                <div className="h-20 overflow-hidden rounded-t-lg"></div>
                                <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                                    <img alt="profile" src={glade}/>
                                </div>
                                <div className="p-6">
                                <CustomLink href="https://github.com/GalladeGuy"><h4 className="mb-4 text-2xl font-bold text-pink-500 underline">GalladeGuy</h4></CustomLink>
                                    <p className="mt-4 mb-4">Community Manager</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="block bg-white rounded-lg shadow-lg dark:bg-zinc-900 dark:text-white">
                                <div className="h-20 overflow-hidden rounded-t-lg"></div>
                                <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                                    <img alt="profile" src={king}/>
                                </div>
                                <div className="p-6">
                                <CustomLink href="https://github.com/MrKing202981"><h4 className="mb-4 text-2xl font-bold text-pink-500 underline">King</h4></CustomLink>
                                    <p className="mt-4 mb-4">Community Manager</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="block bg-white rounded-lg shadow-lg dark:bg-zinc-900 dark:text-white">
                                <div className="h-20 overflow-hidden rounded-t-lg"></div>
                                <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                                    <img alt="profile" src={will}/>
                                </div>
                                <div className="p-6">
                                <CustomLink href="https://github.com/willfaust/"><h4 className="mb-4 text-2xl font-bold text-pink-500 underline">WillFaustCuber</h4></CustomLink>
                                    <p className="mt-4 mb-4">Community Manager</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="block bg-white rounded-lg shadow-lg dark:bg-zinc-900 dark:text-white">
                                <div className="h-20 overflow-hidden rounded-t-lg"></div>
                                <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                                    <img alt="profile" src={ivar}/>
                                </div>
                                <div className="p-6">
                                <CustomLink href="https://github.com/IvarWithoutBones"><h4 className="mb-4 text-2xl font-bold text-pink-500 underline">Ivar</h4></CustomLink>
                                    <p className="mt-4 mb-4">Community Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team