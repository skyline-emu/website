/**
 * @license
 * Copyright © 2022 Skyline Team and Contributors (https://github.com/skyline-emu/)
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from "react";
import Layout from "../components/Layout";
import CustomLink from "../components/CustomLink";
import configureDarkMode from "../libs/configureDarkMode";

const PrivacyPolicyPage = () => {

    configureDarkMode();

    return (
        <Layout title="Privacy Policy">
            <div className="mx-16 text-gray-800 dark:text-white">
                <h2><strong>Privacy Policy</strong></h2>
                <p>The Skyline Emulator Team ("us", "we", or "our") operates the <CustomLink href="https://skyline-emu.one">https://skyline-emu.one</CustomLink> website (the "Service") at no cost and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>
                <br/>
                <p>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service.</p>
                <br/>
                <p><strong>Information Collection and Use</strong></p>
                <p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy. This Service uses third-party services (Google Analytics) that may collect and process identifiable information.</p>
                <br/>
                <p><strong>Cookies</strong></p>
                <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device&#39;s internal memory.</p>
                <p>This Service may use cookies itself. Additionally, this Service uses third-party code and libraries that may use cookies to collect information and improve their services. You have the option to allow or disallow the storage of these cookies on your devices. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
                <br/>
                <p><strong>Service Providers</strong></p>
                <p>We may employ third-party companies and individuals which have access to your Personal Information only to perform tasks designated to them on our behalf and are obligated not to disclose or use Personal Information for any other purpose. They may be employed due to one or more of the following reasons:
                <ul className="list-disc">
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                </ul>
                </p>
                <br/>
                <p><strong>Links to External Sites</strong></p>
                <p>This Service may contain links to external sites. These external sites are not operated by us and therefore we forfeit any liabilities arising from their usage. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                <br/>
                <p><strong>Children’s Privacy</strong></p>
                <p>These Services is not intended to be used by anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with Personal Information, we work to remove this data from our servers. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, notify us at the earliest for removal of the information.</p>
                <br/>
                <p><strong>Changes to This Privacy Policy</strong></p>
                <p>We may update our Privacy Policy from time to time without any prior notification, you are advised to review this page periodically for any changes.</p>
                <p>This policy is effective as of 12th of October 2022</p>
                <br/>
                <p><strong>Contact Us</strong></p>
                <p>If you have any questions or suggestions about our Privacy Policy, contact us at <CustomLink href="mailto:support@skyline-emulator.one">support@skyline-emulator.one</CustomLink>.</p>
            </div>
        </Layout>
    );
};

export default PrivacyPolicyPage;
