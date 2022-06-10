/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
    theme: {
        extend: {
            spacing: {
                10: "2.5rem",
                landingImg: "32rem",
            },
            maxWidth: {
                page: "80rem",
                "4.5xl": "60rem",
            },
            colors: {
                colorPrimary: "#FF1E58F0",
                darkBackground: "#121212",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            zIndex: ["hover", "active"],
            display: ["dark"],
        },
    },
    plugins: [],
    future: {
        purgeLayersByDefault: true,
    },
};
