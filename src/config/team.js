/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */


const lead_developers = [
    {
        name: "Mark",
        avatar: "https://cdn.discordapp.com/avatars/180662388301889536/88aa9e8f2a9098062d80a8c22f14308a.webp?size=100",
        github: "https://github.com/PixelyIon",
    },
];

const developers = [
    {
        name: "Billy",
        avatar: "https://cdn.discordapp.com/avatars/463327301589794826/43d6ae6ac69648af4ce48e6ce1c66933.webp?size=100",
        github: "https://github.com/bylaws",
    },
    {
        name: "Lynx",
        avatar: "https://cdn.discordapp.com/avatars/200204941300727808/d9f6e7511ec9a034fa6b804e8f023505.webp?size=100",
        github: "https://github.com/lynxnb",
    },
    {
        name: "MC",
        avatar: "https://cdn.discordapp.com/avatars/508468419268706305/771b7acff39fc9ee605d9adda6140789.webp?size=100",
        github: "https://github.com/MCredstoner2004",
    },
];

const web_developers = [
    {
        name: "ducc",
        avatar: "https://cdn.discordapp.com/avatars/374688019472711701/46bcc66a4abe89ab613de4d62a7a46a8.webp?size=100",
        github: "https://github.com/msoham123",
    }
];

const bot_developers = [
    {
        name: "FinRoy",
        avatar: "https://cdn.discordapp.com/avatars/392160321696956417/23d29aacefd7b51ecaf126106a376a53.webp?size=100",
        github: "https://github.com/finr0y",
    }
];

const community_managers = [
    {
        name: "GalladeGuy",
        avatar: "https://cdn.discordapp.com/avatars/171242584507678720/fbe610906bd63f2aceb3afd29d28bdee.webp?size=100",
        github: "https://github.com/GalladeGuy",
    },
    {
        name: "King",
        avatar: "https://cdn.discordapp.com/guilds/545842171459272705/users/707984911616704604/avatars/34cb914f7199528e3c1a53f77ceaa5c8.webp?size=100",
        github: "https://github.com/MrKing202981",
    },
    {
        name: "WillFaustCuber",
        avatar: "https://cdn.discordapp.com/avatars/451407331234807830/3056ed1f40d915b7e9c5587960fa5c51.webp?size=100",
        github: "https://github.com/willfaust",
    },
    {
        name: "Ivar",
        avatar: "https://cdn.discordapp.com/avatars/290398986085597184/871fe950051d98b88195cfe164fcf1b3.webp?size=100",
        github: "https://github.com/IvarWithoutBones",
    },
];

export const team = [...lead_developers.map((i) => ({ ...i, title: "Lead Developer" })), ...developers.map((i) => ({ ...i, title: "Developer" })), ...web_developers.map((i) => ({ ...i, title: "Web Developer" })), ...bot_developers.map((i) => ({ ...i, title: "Bot Developer"})), ...community_managers.map((i) => ({ ...i, title: "Community Manager" }))];
