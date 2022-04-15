import React from "react"
const elements = typeof window !== `undefined` ? require("tw-elements") : null

const Carousel = () => {
    return (
        <div className="">
            <div className="relative carousel slide" data-bs-ride="carousel">
                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="relative w-full overflow-hidden carousel-inner">
                    <div className="relative float-left w-full carousel-item active">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="absolute hidden text-center carousel-caption md:block">
                            <h5 className="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="relative float-left w-full carousel-item">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="absolute hidden text-center carousel-caption md:block">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="relative float-left w-full carousel-item">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="absolute hidden text-center carousel-caption md:block">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="inline-block bg-no-repeat carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="inline-block bg-no-repeat carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
