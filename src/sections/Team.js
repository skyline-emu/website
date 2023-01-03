/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import TeamCard from "../components/TeamCard";
import config from "../config";

const TeamCategory = ({name, members}) => {
    return (
        <div className="m-5">
            <p className="text-black text-lg dark:text-white">{name}</p>
            <div className="grid gap-6 pt-4 text-center md:grid-cols-4">
                {members.map((member, key) => (
                    <TeamCard {...{ ...member, key }} />
                ))}
            </div>
        </div>
    );
}

const Team = () => {
    return (
        <div className="pt-10 w-full lg:h-full dark:bg-darkBackground font-roboto" id="team">
            <div className="px-8 mx-auto max-w-page">
                <div className="mb-20">
                    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                        <h3 className="mb-6 text-3xl font-bold text-black dark:text-white">Our Team</h3>
                        <p className="pb-2 mb-6 font-semibold text-blue-500 md:mb-12 md:pb-0">The Skyline Team is composed of passionate individuals from all around the world 🌐</p>
                    </div>
                    {Object.entries(config.team).map(([name, members]) => (
                        <TeamCategory name={name} members={members} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
