import React from "react";

const Timeline = () => {
    return (
        <div className="relative w-10/12 py-20 mx-auto md:w-7/12 lg:6/12">
            <h1 className="text-3xl font-bold text-center text-blue-500">Timeline with Markus</h1>
            <div className="mt-10 border-l-2">
                {/* Card 1 */}
                <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white transition transform bg-blue-600 rounded cursor-pointer hover:-translate-y-2 md:flex-row md:space-y-0">
                    {/* Dot Follwing the Left Vertical Line */}
                    <div className="absolute z-10 w-5 h-5 mt-2 transform bg-blue-600 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>

                    {/* Line that connecting the box with the vertical line */}
                    <div className="absolute z-0 w-10 h-1 bg-blue-300 -left-10"></div>

                    {/* Content that showing in the box */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                        <h3>classNameroom</h3>
                    </div>
                    <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>

                {/* Card 2 */}
                <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white transition transform bg-pink-600 rounded cursor-pointer hover:-translate-y-2 md:flex-row md:space-y-0">
                    {/* Dot Follwing the Left Vertical Line */}
                    <div className="absolute z-10 w-5 h-5 mt-2 transform bg-pink-600 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>

                    {/* Line that connecting the box with the vertical line */}
                    <div className="absolute z-0 w-10 h-1 bg-pink-300 -left-10"></div>

                    {/* Content that showing in the box */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                        <h3>classNameroom</h3>
                    </div>
                    <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>

                {/* Card 3 */}
                <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white transition transform bg-green-600 rounded cursor-pointer hover:-translate-y-2 md:flex-row md:space-y-0">
                    {/* Dot Follwing the Left Vertical Line */}
                    <div className="absolute z-10 w-5 h-5 mt-2 transform bg-green-600 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>

                    {/* Line that connecting the box with the vertical line */}
                    <div className="absolute z-0 w-10 h-1 bg-green-300 -left-10"></div>

                    {/* Content that showing in the box */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                        <h3>classNameroom</h3>
                    </div>
                    <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>

                {/* Card 4 */}
                <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white transition transform bg-purple-600 rounded cursor-pointer hover:-translate-y-2 md:flex-row md:space-y-0">
                    {/* Dot Follwing the Left Vertical Line */}
                    <div className="absolute z-10 w-5 h-5 mt-2 transform bg-purple-600 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>

                    {/* Line that connecting the box with the vertical line */}
                    <div className="absolute z-0 w-10 h-1 bg-purple-300 -left-10"></div>

                    {/* Content that showing in the box */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                        <h3>classNameroom</h3>
                    </div>
                    <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>

                {/* Card 5 */}
                <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 text-white transition transform bg-yellow-600 rounded cursor-pointer hover:-translate-y-2 md:flex-row">
                    {/* Dot Follwing the Left Vertical Line */}
                    <div className="absolute z-10 w-5 h-5 -mt-2 transform bg-yellow-600 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>

                    {/* Line that connecting the box with the vertical line */}
                    <div className="absolute z-0 w-10 h-1 bg-yellow-300 -left-10"></div>

                    {/* Content that showing in the box */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                        <h3>classNameroom</h3>
                    </div>
                    <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>
            </div>
        </div>
    )
}

export default Timeline