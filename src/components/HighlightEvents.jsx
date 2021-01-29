import React, {useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import EventCard from './EventCard'
import PhotoEvent from '../images/events/event1.jpeg'


function HighlightEvents() {
    const settingSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplayspeed: 1000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            },
        ]
    }

    const [event, setEvent] = useState(false)

    const showEvent = () => {
        setEvent(true)
    }

    return (
        <>
            <div className="bg-blue-50">
                <div className="container px-4 pt-12 pb-20 mx-auto lg:py-24 md:px-8">
                    {/* Title */}
                    <div className="flex flex-col items-center mb-6 lg:mb-10">
                        <p className="mb-2 text-2xl font-extrabold text-gray-800 lg:mb-6 lg:text-4xl">Highlight Events</p>
                        <div className="w-32 h-1 bg-blue-500 rounded-full lg:h-2"></div>
                    </div>

                    {/* Event Card */}
                    <Slider {...settingSlider} className="relative">
                        <EventCard showEvent={showEvent} />
                        <EventCard showEvent={showEvent} />
                        <EventCard showEvent={showEvent} />
                        <EventCard showEvent={showEvent} />
                        <EventCard showEvent={showEvent} />
                        <EventCard showEvent={showEvent} />
                        <EventCard showEvent={showEvent} />
                        <EventCard showEvent={showEvent} />
                    </Slider>
                </div>
            </div>

            {/* View Event */}
            <div className={`${event ? 'fixed' : 'hidden'} fixed inset-0 flex justify-center items-center`}>
                <div className="absolute w-full h-full bg-black opacity-75"></div>
                <div className="relative flex flex-col p-4 m-2 space-y-4 bg-white rounded-lg shadow-lg lg:m-40 lg:p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-base font-bold text-gray-800 lg:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <button className="text-gray-800" onClick={() => setEvent(false)}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <img src={PhotoEvent} alt="Event 1" className="w-full h-full rounded-lg" />
                    </div>
                    <div>
                        <div>
                            <p className="text-sm font-semibold text-gray-700 lg:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate enim impedit minima porro soluta dolorem cum omnis amet, expedita atque. Illo quibusdam commodi voluptatibus eum dolorem. Atque enim ipsa fuga.</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <p className="text-xs text-gray-500 lg:text-sm">21 December 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HighlightEvents
