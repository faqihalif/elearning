import React from 'react'
import ImageBanner from '../images/banner.jpg'

function Banner() {
    return (
        <div className="container py-4 mx-auto">
            <img src={ImageBanner} alt="Banner E-Learning JEC" className="rounded-xl" />
        </div>
    )
}

export default Banner
