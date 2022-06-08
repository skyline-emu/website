/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import CustomLink from "./CustomLink";
import { DateTime } from "luxon";
import { marked } from "marked";

const BuildCard = ({ createdAt, title, description, download_url, github_url, branch, id, hash, number }) => (
    <div className="mt-6">
        <div className="max-w-4xl px-10 py-6 mx-auto shadow-md bg-stone-200 dark:bg-zinc-900 round">
            <div className="flex items-center justify-between">
                <span className="font-light text-gray-600 dark:text-white">
                    {DateTime.fromISO(createdAt).toLocaleString()}
                </span>
            </div>
            <div className="mt-2">
                <CustomLink
                    href={github_url}
                    className="text-2xl font-bold text-gray-700 dark:text-white hover:underline"
                >
                    #{number} - {title}
                </CustomLink>
            </div>
            <div className="mt-4 text-gray-800 dark:text-gray-200" 
                dangerouslySetInnerHTML={{
                    __html: marked.parse(description)
                }}
            />
            <div className="mt-5 text-gray-800 dark:text-gray-200">
                <strong>Branch:</strong> {branch}<br />
                <strong>Commit Hash:</strong> {hash}<br />
                <strong>Run ID:</strong> {id}<br />
                <strong>Built At:</strong> {DateTime.fromISO(createdAt).toLocaleString()}
            </div>
            <div className="flex items-center justify-between mt-4">
                <CustomLink
                    href={download_url}
                    ripple
                    className="flex px-5 py-3 text-sm font-medium leading-normal text-white uppercase transition duration-150 ease-in-out bg-green-500 rounded-lg shadow-md lg:px-8 hover:bg-green-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg align-center font-roboto"
                >
                    Download
                </CustomLink>
                <CustomLink
                    href={github_url}
                    ripple
                    className="flex px-5 py-3 text-sm font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out border-2 border-blue-600 rounded-lg lg:px-8 font-roboto focus:outline-none focus:ring-0 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                >
                    View On Github
                </CustomLink>
            </div>
        </div>
    </div>
)

export default BuildCard;