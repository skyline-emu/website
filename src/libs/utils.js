/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

export const colorSchemeMedia = "(prefers-color-scheme: dark)";
export const isBrowser = () => typeof window !== "undefined"
export const getPathName = () => {

    if (isBrowser()) {
        return window.location.pathname; 
    } else {
        return "";
    }
    
}
