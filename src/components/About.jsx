import React from 'react'

import ImageVisual from '../images/elearning-visual.png'

function About() {
    return (
        <div className="bg-blue-50">
            <div className="container px-4 py-12 mx-auto lg:py-24 md:px-8">
                <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="lg:pr-32">
                        <div>
                            <p className="mb-2 text-2xl font-extrabold text-gray-800 lg:mb-6 lg:text-4xl">Find Your Course That Makes Bright Future</p>
                            <div className="w-32 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <p className="mt-2 leading-loose text-gray-500 lg:mt-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo debitis dolor nemo nisi exercitationem, corporis natus, magni enim necessitatibus voluptatem ex voluptatum repudiandae quibusdam, officia dignissimos nihil temporibus vero?</p>
                    </div>
                    <div>
                        <img src={ImageVisual} alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
