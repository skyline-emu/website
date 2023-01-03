/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from "react";
import ReactGA from 'react-ga4';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Button from "./Button";
import Cookies from "js-cookie";

const addAnalyticsScripts = () => {
    console.log('Analytics Enabled');
    ReactGA.initialize('G-7JTJ3Z6VSN', {
        testMode: process.env.NODE_ENV === 'development',
    });
};

const getCookieConsent = () => {
    const consent = Cookies.get("cookieConsent");
    if (consent === "true") {
        return true;
    } else {
        return false;
    }
};

const setCookieConsent = (consent) => {
    Cookies.set("cookieConsent", consent, { expires: 365 });
};

var cookiesInitialized = false;
const initializeCookies = () => {
    if (cookiesInitialized) return;
    cookiesInitialized = true;

    addAnalyticsScripts();
};

const deinitalizeCookies = () => {
    if (!cookiesInitialized) return;
    cookiesInitialized = false;

    ReactGA.ga('remove');
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
};

const handleAcceptCookie = () => {
    console.log('Cookies Accepted');
    setCookieConsent(true);
    initializeCookies();
};

var cookiesDeclined = false;
const handleDeclineCookie = () => {
    console.log('Cookies Declined');
    deinitalizeCookies();
    cookiesDeclined = true;
};


const Layout = ({ children, title}) => {

    const hasConsent = getCookieConsent();
    if (hasConsent)
        initializeCookies();

    return (
        <main> 
            <Helmet htmlAttributes={{ lang: "en" }}>
                <title>{title}</title>
            </Helmet>
            <div className="dark:bg-darkBackground">
                <Navbar />
                {(!hasConsent && !cookiesDeclined) &&
                    <div className="fixed bottom-5 left-5 right-5 rounded bg-white bg-zinc-100 dark:bg-zinc-900 dark:text-white z-50">
                        <div className="flex flex-col md:flex-row justify-between items-center p-4">
                            <div className="flex flex-col">
                                <div className="text-lg font-bold">Cookies</div>
                                <div className="text-sm">We use cookies for analytics to understand how everyone uses the Skyline website to help improve it in the future.</div>
                            </div>
                            <div className="flex flex-row items-center gap-2 mt-2 mx-1">
                                <Button text="Accept" onClick={handleAcceptCookie} />
                                <Button text="Decline" onClick={handleDeclineCookie} />
                            </div>
                        </div>
                    </div>
                }
                {children}
                <Footer />
            </div>
        </main>
    );
};

export default Layout;
