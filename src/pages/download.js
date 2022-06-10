/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import BuildCard from "../components/BuildCard";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import axios from "axios";
import useSWR from "swr";
import config from "../config";

const IndexPage = () => {
    const { data, isValidating } = useSWR("get-builds", async () => {
        const res = await axios.get(config.builds_api_url);
        console.log(res.status, res.data);
        return res.data;
    });

    return (
        <Layout title="Download Skyline - Nintendo Switch Emulator">
            <div className="w-full min-h-screen pb-0 md:pb-20 dark:bg-darkBackground">
                <div className="flex items-center justify-between">
                    <div className="px-8 py-12 mx-auto md:py-18 max-w-page">
                        <div className="pt-4 mx-auto text-center md:max-w-xl lg:max-w-3xl">
                            <h3 className="mb-6 text-3xl font-bold text-black dark:text-white">Builds</h3>
                            <p className="pb-2 mb-6 font-semibold text-blue-500 md:mb-12 md:pb-0">Click on Download to download the apk file for the emulator.</p>
                        </div>
                        {isValidating ? (
                            <Preloader />
                        ) : (
                            data.map((build, idx) => {
                                const split = build.commit.message.split("\n\n");
                                const title = split.shift();
                                const description = split.join("\n\n");
                                return <BuildCard key={idx} createdAt={build.createdAt} title={title} description={description || "No description provided"} download_url={`https://skyline-builds.alula.gay/cache/${build.id}/${build.apkName}`} github_url={`https://github.com/skyline-emu/skyline/commit/${build.commit.id}`} branch={build.branch} id={build.id} hash={build.commit.id} number={build.runNumber} />;
                            })
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
