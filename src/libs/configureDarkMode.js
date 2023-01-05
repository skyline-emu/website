/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */


import { isBrowser } from "./utils";
import { colorSchemeMedia } from "./utils";

const configureDarkMode = () => {

    if (isBrowser()) {
        if (window.matchMedia(colorSchemeMedia).matches) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.add('light')
        }
    }

};

export default configureDarkMode;
