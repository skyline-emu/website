/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import mark from "../images/team/mark.webp"
 import billy from "../images/team/billy.webp"
 import lynx from "../images/team/lynx.webp"
 import mc from "../images/team/mc.webp"
 import ducc from "../images/team/ducc.webp"
 import glade from "../images/team/glade.webp"
 import king from "../images/team/king.webp"
 import will from "../images/team/will.webp"
 import ivar from "../images/team/ivar.webp"


const lead_developers = [
    {
        name: "Mark",
        avatar: mark,
        github: "https://github.com/PixelyIon",
    },
];

const developers = [
    {
        name: "Billy",
        avatar: billy,
        github: "https://github.com/bylaws",
    },
    {
        name: "Lynx",
        avatar: lynx,
        github: "https://github.com/lynxnb",
    },
    {
        name: "MC",
        avatar: mc,
        github: "https://github.com/MCredstoner2004",
    },
];

const web_developers = [
    {
        name: "Ducc",
        avatar: ducc,
        github: "https://github.com/msoham123",
    },
];

const community_managers = [
    {
        name: "GalladeGuy",
        avatar: glade,
        github: "https://github.com/GalladeGuy",
    },
    {
        name: "King",
        avatar: king,
        github: "https://github.com/MrKing202981",
    },
    {
        name: "WillFaustCuber",
        avatar: will,
        github: "https://github.com/willfaust",
    },
    {
        name: "Ivar",
        avatar: ivar,
        github: "https://github.com/IvarWithoutBones",
    },
];

export const team = [...lead_developers.map((i) => ({ ...i, title: "Lead Developer" })), ...developers.map((i) => ({ ...i, title: "Developer" })), ...web_developers.map((i) => ({ ...i, title: "Web Developer" })), ...community_managers.map((i) => ({ ...i, title: "Community Manager" }))];
