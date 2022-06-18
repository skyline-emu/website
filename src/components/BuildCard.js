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
import { marked } from "marked";

const BuildCard = ({ createdAt, title, description, download_url, github_url, branch, id, hash, number }) => (
    <div className="mt-6">
        <div className="px-5 py-6 mx-auto rounded max-w-7xl bg-stone-50 dark:bg-zinc-900">
            <div className="flex items-center justify-between">
                <span className="font-light text-gray-600 dark:text-white">{DateTime.fromISO(createdAt).toLocaleString()}</span>
            </div>
            <div className="mt-2">
                <CustomLink href={github_url} className="text-2xl font-bold text-gray-700 dark:text-white hover:underline">
                    #{number} - {title}
                </CustomLink>
            </div>
            <div
                className="mt-4 text-gray-800 dark:text-gray-200"
                dangerouslySetInnerHTML={{
                    __html: marked.parse(description),
                }}
            />
            <div className="mt-5 text-gray-800 dark:text-gray-200">
                <div className="max-w-full truncate">
                    <strong>Branch:</strong> <code>{branch}</code>
                </div>
                <div className="max-w-full truncate">
                    <strong>Commit Hash:</strong> <code>{hash}</code>
                </div>
                <div className="max-w-full truncate">
                    <strong>Run ID:</strong> {id}
                </div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-4 md:flex-row">
                <Button href={download_url} icon={<FaDownload />} text="Download" />
                <Button href={github_url} text="View On Github" />
            </div>
        </div>
    </div>
);

export default BuildCard;
