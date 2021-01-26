import React, {useRef} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ImageFeedback from '../images/feedback.png'
import Men from '../images/men.png'
import Woman from '../images/woman.png'

function Feedback() {
    const settingSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const sliderRef = useRef()

    const nextFeedback = () => {
        sliderRef.current.slickNext()
    }

    const prevFeedback = () => {
        sliderRef.current.slickPrev()
    }

    return (
        <div className="container px-4 py-12 mx-auto lg:py-24 md:px-8">
            <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="order-last lg:order-first">
                    <img src={ImageFeedback} alt="Feedback Visual" className="w-full h-full" />
                </div>
                <div className="order-first lg:pl-32 lg:order-first">
                    <div>
                        <p className="mb-2 text-2xl font-extrabold text-gray-800 lg:mb-6 lg:text-4xl">Students Feedback</p>
                        <div className="w-32 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="mt-6">
                        <Slider {...settingSlider} ref={sliderRef}>
                            <div>
                                <div className="flex items-center my-8 space-x-4">
                                    <div>
                                        <img src={Men} alt="" className="w-auto h-20" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-800">Faqih Alif Fauzi</p>
                                        <p className="font-bold text-gray-500">JEC @ Corporate</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold leading-loose text-gray-500 lg:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sit asperiores ratione eos dolores nulla saepe eum? Aut delectus dicta, perspiciatis, repudiandae sed minima alias, nemo labore commodi nobis voluptatibus.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center my-8 space-x-4">
                                    <div>
                                        <img src={Woman} alt="" className="w-auto h-20" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-800">Fahrizki Cecaria Oktavani</p>
                                        <p className="font-bold text-gray-500">JEC @ Corporate</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold leading-loose text-gray-500 lg:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sit asperiores ratione eos dolores nulla saepe eum? Aut delectus dicta, perspiciatis, repudiandae sed minima alias, nemo labore commodi nobis voluptatibus.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center my-8 space-x-4">
                                    <div>
                                        <img src={Woman} alt="" className="w-auto h-20" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-800">Danny Kurniawan</p>
                                        <p className="font-bold text-gray-500">JEC @ Corporate</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold leading-loose text-gray-500 lg:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sit asperiores ratione eos dolores nulla saepe eum? Aut delectus dicta, perspiciatis, repudiandae sed minima alias, nemo labore commodi nobis voluptatibus.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="flex items-center justify-end mt-6 space-x-8">
                        <button className="flex items-center p-3 text-blue-500 bg-blue-100 rounded-full" onClick={prevFeedback}>
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <button className="flex items-center p-3 text-blue-500 bg-blue-100 rounded-full" onClick={nextFeedback}>
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
