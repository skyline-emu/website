/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: ['class'],
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
                background: "#FFFFFF",
                primary: "#1E58F0",
                primaryRipple: "#1E58F020",
                primaryHoverButton: "#1E58F00A",
                primaryActiveButton: "#1E58F013",

                darkBackground: "#121212",
                darkPrimary: "#4285F4",
                darkPrimaryRipple: "#4285F420",
                darkPrimaryHoverButton: "#4285F40A",
                darkPrimaryActiveButton: "#4285F413",
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
