/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

const lead_developers = [
    {
        name: "Mark",
        avatar: "https://avatars.githubusercontent.com/u/17637537",
        github: "https://github.com/PixelyIon",
    },
];

const developers = [
    {
        name: "Billy",
        avatar: "https://avatars.githubusercontent.com/u/46304689",
        github: "https://github.com/bylaws",
    },
    {
        name: "Lynx",
        avatar: "https://avatars.githubusercontent.com/u/37104290",
        github: "https://github.com/lynxnb",
    },
    {
        name: "MC",
        avatar: "https://avatars.githubusercontent.com/u/63514060",
        github: "https://github.com/MCredstoner2004",
    },
];

const web_developers = [
    {
        name: "Ducc",
        avatar: "https://avatars.githubusercontent.com/u/51520568",
        github: "https://github.com/msoham123",
    }
];

const bot_developers = [
    {
        name: "FinRoy",
        avatar: "https://cdn.discordapp.com/avatars/392160321696956417/87b836317d1cba8a8f0f0998f00e4006.webp?size=100",
        github: "https://github.com/finr0y",
    }
];

const community_managers = [
    {
        name: "GalladeGuy",
        avatar: "https://avatars.githubusercontent.com/u/15641825",
        github: "https://github.com/GalladeGuy",
    },
    {
        name: "King",
        avatar: "https://avatars.githubusercontent.com/u/73195869",
        github: "https://github.com/MrKing202981",
    },
    {
        name: "WillFaustCuber",
        avatar: "https://avatars.githubusercontent.com/u/39139570",
        github: "https://github.com/willfaust",
    },
    {
        name: "Ivar",
        avatar: "https://avatars.githubusercontent.com/u/41924494",
        github: "https://github.com/IvarWithoutBones",
    },
];

export const team = [...lead_developers.map((i) => ({ ...i, title: "Lead Developer" })), ...developers.map((i) => ({ ...i, title: "Developer" })), ...web_developers.map((i) => ({ ...i, title: "Web Developer" })), ...bot_developers.map((i) => ({ ...i, title: "Bot Developer"})), ...community_managers.map((i) => ({ ...i, title: "Community Manager" }))];
