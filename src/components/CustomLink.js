/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-2-Clause
 */

import React from "react"
import { Link } from "gatsby";

const CustomLink = ({ style, href, children, className }) => href.startsWith("http") ? (
    <a
        style={style}
        href={href}
        rel="noreferrer"
        target="_blank"
        className={className}
    >
        {children}
    </a>
) : (
    <Link
        to={href}
        style={style}
        className={className}
    >
        {children}
    </Link>
);

export default CustomLink;