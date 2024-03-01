/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import { Link } from "gatsby";
import rippleFn from "../libs/ripple";
import classnames from "classnames";
import { getPathName } from "../libs/utils";

const CustomLink = ({ style, href, children, className, ripple }) =>  {
    if (href.startsWith(getPathName() + "#"))
        href = href.substring(getPathName().length);
    
    return href.startsWith("http") ? (
        <a
            style={style}
            href={href}
            rel="noreferrer"
            target="_blank"
            className={classnames(className, {
                "relative overflow-hidden": ripple,
            })}
            onMouseDown={ripple ? rippleFn : undefined}
        >
            {children}
        </a>
    ) :
    (href.startsWith("#")) ? (
        <a
            href={href}
            style={style}
            className={classnames(className, {
                "relative overflow-hidden": ripple,
            })}
            onMouseDown={ripple ? rippleFn : undefined}
        >
            {children}
        </a>
    ) : (
        <Link
            href={href}
            style={style}
            className={classnames(className, {
                "relative overflow-hidden": ripple,
            })}
            onMouseDown={ripple ? rippleFn : undefined}
        >
            {children}
        </Link>
    );
}

export default CustomLink;
