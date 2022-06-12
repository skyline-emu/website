/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import { Link } from "gatsby";
import rippleFn from "../libs/ripple";

const ButtonInner = ({ icon, text }) => (
    <div role="button" tabIndex={0} className="button relative overflow-hidden" onMouseDown={rippleFn} onTouchStart={rippleFn}>
        {icon ? <span style={{ paddingLeft: 15, paddingRight: 15, margin: "auto" }}>{icon}</span> : <span style={{ paddingLeft: 20, margin: "auto" }}></span>}
        <span style={{ paddingRight: 20 }}>{text}</span>
    </div>
);

const Button = ({ href, icon, text }) =>
    href.startsWith("http") ? (
        <a href={href} rel="noreferrer" target="_blank" tabIndex={-1}>
            <ButtonInner icon={icon} text={text} />
        </a>
    ) : (
        <Link to={href} tabIndex={-1}>
            <ButtonInner icon={icon} text={text} />
        </Link>
    );

export default Button;
