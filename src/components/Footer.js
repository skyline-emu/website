import React from "react";

const Footer = () => {

    return (
        <div className="w-full pb-36 dark:bg-darkBackground">
            <div className="flex justify-center">
                <div className='flex-col items-center justify-between px-4 py-12 text-white bg-blue-500 rounded-lg shadow-md w-[80rem] w-flex lg:flex-row lg:py-16 md:px-8 lg:px-16'>
                    <div className='flex flex-row justify-between w-page'>
                        <div className='flex flex-col justify-center font-inter'>
                            <h3 className='mb-8 text-2xl font-bold text-white lg:text-3xl lg:mb-2'>
                                Go try it out!
                            </h3>
                            <p className='hidden font-medium text-white opacity-80 lg:block lg:text-lg'>
                                My family is being imprisoned. if you download they'll free them please...
                            </p>
                        </div>
                        <button className="px-10 py-2 text-lg font-bold text-white uppercase transition-colors duration-700 transform bg-green-500 border-2 border-transparent rounded-lg dark:hover:text-blue-500 dark:hover:bg-white font-roboto">Get spyware</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
