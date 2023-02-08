/**
 * @license
 * Copyright © 2023 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import CustomLink from "./CustomLink";

const Footer = () => {
    return (
        <div>
            <nav className="bg-white dark:bg-darkBackground">
                <div className="px-8 mx-auto max-w-page">
                    <div className="flex flex-col-reverse pb-5 md:flex-row items-center justify-between h-20 px-4 text-sm font-bold text-gray-800 dark:text-white font-rubik">
                            <CustomLink className="flex-shrink-0 text-center" href="https://github.com/skyline-emu/website/blob/master/LICENSE.md">
                                © {new Date().getFullYear()} Skyline Team and Contributors
                            </CustomLink>
                            <CustomLink className="flex-col justify-center text-center" href="/privacy-policy">
                                Privacy Policy
                            </CustomLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Footer;
