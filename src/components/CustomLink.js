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