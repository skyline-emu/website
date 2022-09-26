/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import CustomLink from "./CustomLink";
import Button from "./Button";
import { FaDownload } from "react-icons/fa";
import { DateTime } from "luxon";

const Markdown = ({ string }) => {
    var html = "";

    var isInCodeBlock = false;
    var isInItalicsBlock = false;
    var isInBoldBlock = false;

    for (var i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        const nextChar = string.charAt(i + 1);

        if (char === "\n") {
            html += "<br/>";
        } else if (char === "&") {
            html += "&amp;";
        } else if (char === "<") {
            html += "&lt;";
        } else if (char === ">") {
            html += "&gt;";
        } else if (char === '"') {
            html += "&quot;";
        } else if (char === "'") {
            html += "&#039;";
        } else if (char === "`") {
            if (!isInCodeBlock) html += "<code>";
            else html += "</code>";

            isInCodeBlock = !isInCodeBlock;
        } else if (char === "*" && nextChar !== "*") {
            if (!isInItalicsBlock) html += "<i>";
            else html += "</i>";

            isInItalicsBlock = !isInItalicsBlock;
        } else if (char === "*" && nextChar === "*") {
            if (!isInBoldBlock) html += "<b>";
            else html += "</b>";

            isInBoldBlock = !isInBoldBlock;
            i++;
        } else {
            html += string.charAt(i);
        }
    }

    return (
        <span
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        />
    );
};

const BuildCard = ({ createdAt, message, download_url, github_url, branch, hash, number }) => {
    const titleEnd = message.indexOf("\n", 1);
    const title = titleEnd !== -1 ? message.slice(0, titleEnd) : message;
    var description = message.slice(titleEnd + 1);
    while (description.charAt(0) === "\n") description = description.slice(1);

    return (
        <div className="mt-6">
            <div className="max-w-7xl px-5 py-6 mx-auto rounded max-w-7xl bg-stone-50 dark:bg-zinc-900 rounded">
                <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-600 dark:text-white">{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_SHORT)}</span>
                </div>
                <div className="mt-2">
                    <CustomLink href={github_url} className="text-2xl font-bold text-gray-700 dark:text-white hover:underline">
                        #{number} - <Markdown string={title} />
                    </CustomLink>
                </div>
                {description.length !== 0 && (
                    <div className="mt-4 text-gray-800 dark:text-gray-200">
                        <Markdown string={description} />
                    </div>
                )}
                <div className="mt-5 text-gray-800 dark:text-gray-200">
                    <div className="max-w-full truncate">
                        <strong>Branch:</strong> <code>{branch}</code>
                    </div>
                    <div className="max-w-full truncate">
                        <strong>Commit Hash:</strong> <code>{hash}</code>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3 mt-4 md:flex-row">
                    <Button href={download_url} icon={<FaDownload />} text="Download" />
                    <Button href={github_url} text="View On Github" />
                </div>
            </div>
        </div>
    );
};

export default BuildCard;
