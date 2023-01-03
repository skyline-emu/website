/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import "react";

const colorSchemeMedia = "(prefers-color-scheme: dark)";
const isBrowser = () => typeof window !== "undefined"

const configureDarkMode = () => {

    if (isBrowser() && window.matchMedia(colorSchemeMedia).matches) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.add('light')
    }

    // TODO: Add a switch that respects local storage and allows user to choose
};

export default configureDarkMode;
