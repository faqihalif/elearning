import React from 'react'

import PhotoEvent from '../images/events/event1.jpeg'

function EventCard() {
    return (
        <div className="px-4">
            <img src={PhotoEvent} alt="Event 1" className="rounded-lg" />
        </div>
    )
}

export default EventCard
