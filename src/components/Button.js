/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import { Link } from "gatsby";
import rippleFn from "../libs/ripple";
import classNames from "classnames";

const ButtonInner = ({ icon, text, className }) => (
    <div role="button" tabIndex={0} className={classNames("button relative overflow-hidden", className)} onMouseDown={rippleFn} onTouchStart={rippleFn}>
        {icon ? <span style={{ paddingLeft: 15, paddingRight: 10, margin: "auto" }}>{icon}</span> : <span style={{ paddingLeft: 20, margin: "auto" }}></span>}
        <span style={{ paddingRight: 20 }}>{text}</span>
    </div>
);

const GetPathName = () => {
    if (typeof window !== "undefined")
        return window.location.pathname;
    return "";
}

const Button = ({ href="", icon, text, onClick, className }) =>  {
    if (href.startsWith(GetPathName() + "#"))
        href = href.substring(GetPathName().length);
    
    return href.startsWith("http") ? (
        <a href={href} onClick={onClick} rel="noreferrer" target="_blank" tabIndex={-1}>
            <ButtonInner icon={icon} text={text} className={className} />
        </a>
    ) :
    (href.startsWith("#")) ? (
        <a href={href} onClick={onClick} tabIndex={-1}>
            <ButtonInner icon={icon} text={text} className={className} />
        </a>
    ) : (
        <Link to={href} onClick={onClick} tabIndex={-1}>
            <ButtonInner icon={icon} text={text} className={className} />
        </Link>
    );
}

export default Button;
