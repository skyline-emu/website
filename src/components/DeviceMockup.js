/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//Device Mockup created from <a href="https://deviceframes.com/templates/google-pixel-6">Google Pixel 6 mockups</a>
const DeviceMockup = () => (
    <div className="z-10 justify-center hidden w-full px-4 py-10 lg:w-6/12 lg:flex">
        <span className="relative left-[26%]  top-[86%] justify-left align-bottom z-[-1]">
            <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#3B82F6" />
                <circle cx="2.5" cy="24.5" r="2.5" fill="#3B82F6" />
                <circle cx="2.5" cy="46.5" r="2.5" fill="#3B82F6" />
                <circle cx="2.5" cy="68.5" r="2.5" fill="#3B82F6" />
                <circle cx="2.5" cy="90.5" r="2.5" fill="#3B82F6" />
                <circle cx="24.5" cy="2.5" r="2.5" fill="#3B82F6" />
                <circle cx="24.5" cy="24.5" r="2.5" fill="#3B82F6" />
                <circle cx="24.5" cy="46.5" r="2.5" fill="#3B82F6" />
                <circle cx="24.5" cy="68.5" r="2.5" fill="#3B82F6" />
                <circle cx="24.5" cy="90.5" r="2.5" fill="#3B82F6" />
                <circle cx="46.5" cy="2.5" r="2.5" fill="#3B82F6" />
                <circle cx="46.5" cy="24.5" r="2.5" fill="#3B82F6" />
                <circle cx="46.5" cy="46.5" r="2.5" fill="#3B82F6" />
                <circle cx="46.5" cy="68.5" r="2.5" fill="#3B82F6" />
                <circle cx="46.5" cy="90.5" r="2.5" fill="#3B82F6" />
                <circle cx="68.5" cy="2.5" r="2.5" fill="#3B82F6" />
                <circle cx="68.5" cy="24.5" r="2.5" fill="#3B82F6" />
                <circle cx="68.5" cy="46.5" r="2.5" fill="#3B82F6" />
                <circle cx="68.5" cy="68.5" r="2.5" fill="#3B82F6" />
                <circle cx="68.5" cy="90.5" r="2.5" fill="#3B82F6" />
                <circle cx="90.5" cy="2.5" r="2.5" fill="#3B82F6" />
                <circle cx="90.5" cy="24.5" r="2.5" fill="#3B82F6" />
                <circle cx="90.5" cy="46.5" r="2.5" fill="#3B82F6" />
                <circle cx="90.5" cy="68.5" r="2.5" fill="#3B82F6" />
                <circle cx="90.5" cy="90.5" r="2.5" fill="#3B82F6" />
            </svg>
        </span>
        <span className="relative left-[45%]  bottom-[5%] justify-left align-bottom z-[-1]">
            <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#de313f" />
                <circle cx="2.5" cy="24.5" r="2.5" fill="#de313f" />
                <circle cx="2.5" cy="46.5" r="2.5" fill="#de313f" />
                <circle cx="2.5" cy="68.5" r="2.5" fill="#de313f" />
                <circle cx="2.5" cy="90.5" r="2.5" fill="#de313f" />
                <circle cx="24.5" cy="2.5" r="2.5" fill="#de313f" />
                <circle cx="24.5" cy="24.5" r="2.5" fill="#de313f" />
                <circle cx="24.5" cy="46.5" r="2.5" fill="#de313f" />
                <circle cx="24.5" cy="68.5" r="2.5" fill="#de313f" />
                <circle cx="24.5" cy="90.5" r="2.5" fill="#de313f" />
                <circle cx="46.5" cy="2.5" r="2.5" fill="#de313f" />
                <circle cx="46.5" cy="24.5" r="2.5" fill="#de313f" />
                <circle cx="46.5" cy="46.5" r="2.5" fill="#de313f" />
                <circle cx="46.5" cy="68.5" r="2.5" fill="#de313f" />
                <circle cx="46.5" cy="90.5" r="2.5" fill="#de313f" />
                <circle cx="68.5" cy="2.5" r="2.5" fill="#de313f" />
                <circle cx="68.5" cy="24.5" r="2.5" fill="#de313f" />
                <circle cx="68.5" cy="46.5" r="2.5" fill="#de313f" />
                <circle cx="68.5" cy="68.5" r="2.5" fill="#de313f" />
                <circle cx="68.5" cy="90.5" r="2.5" fill="#de313f" />
                <circle cx="90.5" cy="2.5" r="2.5" fill="#de313f" />
                <circle cx="90.5" cy="24.5" r="2.5" fill="#de313f" />
                <circle cx="90.5" cy="46.5" r="2.5" fill="#de313f" />
                <circle cx="90.5" cy="68.5" r="2.5" fill="#de313f" />
                <circle cx="90.5" cy="90.5" r="2.5" fill="#de313f" />
            </svg>
        </span>
        <StaticImage className="lg:w-[220px] w-[100px] h-auto" src="../images/app.png" alt="app.png" placeholder="blurred" />
    </div>
);

export default DeviceMockup;
