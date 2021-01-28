import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import EventCard from './EventCard'

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
                breakpoint: 1024,
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

    return (
        <div className="bg-blue-50">
            <div className="container px-4 pt-12 pb-20 mx-auto lg:py-24 md:px-8">
                {/* Title */}
                <div className="flex flex-col items-center mb-6 lg:mb-10">
                    <p className="mb-2 text-2xl font-extrabold text-gray-800 lg:mb-6 lg:text-4xl">Highlight Events</p>
                    <div className="w-32 h-1 bg-blue-500 rounded-full lg:h-2"></div>
                </div>

                {/* Event Card */}
                <Slider {...settingSlider}>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </Slider>
            </div>
        </div>
    )
}

export default HighlightEvents
