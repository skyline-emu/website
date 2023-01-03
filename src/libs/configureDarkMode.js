/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

const colorSchemeMedia = "(prefers-color-scheme: dark)";

const configureDarkMode = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.add('light')
    }

    // TODO: Add a switch that respects local storage and allows user to choose
};

export default configureDarkMode;
