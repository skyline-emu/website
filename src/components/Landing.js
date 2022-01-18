import React from "react"
import phone from "../images/phone.png"


const Landing = () => {
    return (
        <div className="px-8 mx-auto my-28 max-w-page">
            <div className="flex flex-row justify-center">
                <div className="w-full px-4 py-10 lg:w-5/12">
                    <h1 className="text-dark  font-bold text-4xl sm:text-[42px] lg:text-[40px] xl:text-[42px] leading-snug mb-3">
                        Open Source Nintendo Switch Emulator for Android
                    </h1>
                    <p className="text-base mb-8 text-body-color max-w-[480px]">
                        Skyline is an experimental emulator that runs on ARMv8 Android™ devices and emulates the functionality of a Nintendo Switch™ system.
                    </p>
                    <ul className="flex flex-wrap items-center">
                        <button class="py-2 px-5 transition-colors duration-700 transform bg-blue-500 font-bold hover:bg-blue-400 text-gray-100 text-lg 
                        rounded-lg">Download</button>
                        <button class="ml-3 py-2 px-5 transition-colors duration-700 transform text-blue-500 font-bold text-lg rounded-lg">Learn More</button>
                    </ul>
                    <div className="items-baseline pt-16 clients">
                        <h6 className="flex items-center text-sm font-bold text-gray-500 uppercase text-body-color">
                             Built using
                        </h6>
                        <div className="flex items-center">
                            <div className="w-full py-3 mr-12">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Vulkan_API_logo.svg/512px-Vulkan_API_logo.svg.png" alt="ayroui" />
                            </div>
                            <div className="w-2/3 py-3 mr-16">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/687px-Android_logo_2019_%28stacked%29.svg.png"
                                    alt="graygrids"
                                />
                            </div>
                            <div className="w-1/2 py-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/512px-Kotlin_Icon.svg.png" alt="uideck" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden px-4 lg:grow lg:flex"></div>
                {/* Device Mockup created from <a href="https://deviceframes.com/templates/google-pixel-6">Google Pixel 6 mockups</a> */}
                <div className="relative z-10 flex ml-36 ">
                    <img
                        src={phone}
                        className="justify-left w-[15rem] md:h-landingImg"
                    />
                    <span className="absolute -left-8 bottom-12 z-[-1]">
                        <svg
                            width="93"
                            height="93"
                            viewBox="0 0 93 93"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                        </svg>
                    </span>
                </div>
                {/* <div className="w-full px-4 lg:w-6/12">
                    <div className="lg:text-left lg:ml-auto">
                       
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Landing