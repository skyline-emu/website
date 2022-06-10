/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import CustomLink from "./CustomLink";

const TeamCard = ({ name, avatar, github, title }) => (
    <div>
        <div className="block bg-stone-200 rounded-lg dark:bg-zinc-900 dark:text-white">
            <div className="h-20 overflow-hidden rounded-t-lg"></div>
            <div className="w-20 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full">
                <img alt={name} src={avatar} />
            </div>
            <div className="p-6">
                <CustomLink href={github}>
                    <h4 className="mb-4 text-2xl font-bold text-pink-500 underline">{name}</h4>
                </CustomLink>
                <p className="mt-4 mb-4">{title}</p>
                {/* <CustomLink className="font-bold text-pink-500 underline" href="">Github</CustomLink> */}
            </div>
        </div>
    </div>
);

export default TeamCard;
