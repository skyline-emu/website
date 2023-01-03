/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { FaHome } from "react-icons/fa";

// markup
const NotFoundPage = () => {
    return (
        <Layout title="404 - Not Found">
            <div className="w-full min-h-screen dark:text-white flex flex-col items-center justify-center">
                <div className="mt-6 text-center">
                    <div className="max-w-xl px-5 py-6 mx-auto rounded max-w-7xl bg-stone-100 dark:bg-zinc-900 rounded">
                        <span className="text-5xl"><code>404</code> - Page not found</span>
                        <div className="text-lg mt-5">
                            Sorry, we couldn't find what you were looking for {" "}
                            <span role="img" aria-label="Pensive emoji">
                                😔
                            </span>{" "}
                            <br />
                            {process.env.NODE_ENV === "development" ? (
                                <>
                                    <br />
                                    Try creating a page in <code>src/pages/</code>
                                    <br />
                                </>
                            ) : null}
                            <br />
                            <span className="flex space-x-2 justify-center m-2">
                                <Button href="/" icon={<FaHome />} text="Go Home" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
