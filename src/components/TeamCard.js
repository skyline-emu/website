/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import CustomLink from "./CustomLink";
import { FaGithub } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TeamCard = ({ name, avatar, github }) => (
    <div className="flex flex-col flex-none">
        <div className="w-58 h-14 overflow-hidden rounded-t-lg bg-stone-200 dark:bg-zinc-800"></div>
        <div className="w-58 h-14 rounded-b-lg bg-stone-300 dark:bg-zinc-900 flex flex-row flex-none justify-start">
            <div className="w-[5rem] shrink-0 mx-3 -mt-10 overflow-hidden border-0 border-stone-300 dark:border-zinc-900 rounded-full self-baseline">
                <LazyLoadImage alt={name} src={avatar} />
            </div>
            <div className="flex flex-col flex-none items-start">
                <div className="-mt-8 text-2xl font-inter text-stone-600 dark:text-zinc-300 text-left">{name}</div>
                <div className="mt-2 ml-1 flex flex-row flex-none">
                    <CustomLink href={github}>
                        <div className="text-2xl text-stone-700 dark:text-zinc-300"><FaGithub/></div>
                    </CustomLink>
                </div>
            </div>
        </div>
    </div>
);

export default TeamCard;
