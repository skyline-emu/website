/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react"
import BuildCard from "../components/BuildCard"
import Layout from "../components/Layout"
import axios from "axios"
import useSWR from "swr"
import config from "../config";

const IndexPage = () => {
  const {data, isValidating} = useSWR("get-builds", async () => {
    const res = await axios.get(config.builds_api_url);
    console.log(res.status, res.data);
    return res.data;
  });
  
  return (
    <Layout title="Download Skyline - Nintendo Switch Emulator">
      <div className="w-full pb-0 md:pb-20 md:h-full dark:bg-darkBackground">
        <div className="flex items-center justify-between">
          <div className="px-8 py-12 mx-auto md:py-18 max-w-page">
            <h1
              className="text-xl items-center font-bold  md:text-3xl dark:text-white"
            >
              Skyline Builds
            </h1>
            {isValidating ? <span className="text-white">Loading</span> : data.map((build, idx) => {
              const split = build.commit.message.split("\n\n");
              const title = split.shift();
              const description = split.join("\n\n");
              return (
                <BuildCard 
                  key={idx}
                  createdAt={build.createdAt}
                  title={title}
                  description={description || "No description provided"}
                  download_url={`https://skyline-builds.alula.gay/cache/${build.id}/${build.apkName}`}
                  github_url={`https://github.com/skyline-emu/skyline/commit/${build.commit.id}`}
                  branch={build.branch}
                  id={build.id}
                  hash={build.commit.id}
                  number={build.runNumber}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout> 
  )
}

export default IndexPage
