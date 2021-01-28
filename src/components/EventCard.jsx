import React,{useState} from 'react'

import PhotoEvent from '../images/events/event1.jpeg'

function EventCard() {
    const [detailPhoto, setDetailPhoto] = useState(true)

    return (
        <div className="px-4">
            <div className="relative flex">
                <div className="absolute top-0 right-0 flex flex-col items-center justify-center px-4 py-2 m-4 bg-white rounded-lg">
                    <p className="text-lg font-extrabold leading-5">21</p>
                    <p className="text-xs font-semibold leading-3">DEC</p>
                </div>
                <img src={PhotoEvent} alt="Event 1" className="w-full h-full rounded-lg" onMouseEnter={() => setDetailPhoto(true)} onMouseLeave={() => setDetailPhoto(false)} />
                <div className={`absolute bottom-0 left-0 w-full px-2 py-1 lg:p-4 rounded-b-lg bg-gradient-to-t from-gray-500`}>
                    <p className="text-sm font-bold text-white lg:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-xs text-white">21 December 2020</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard
