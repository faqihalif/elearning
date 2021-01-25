import React from 'react'

import ImageVisual from '../images/elearning-visual.png'

function About() {
    return (
        <div className="bg-blue-50">
            <div className="container px-8 py-24 mx-auto">
                <div className="grid items-center grid-cols-2 space-x-8">
                    <div className="pr-32">
                        <div>
                            <p className="mb-6 text-4xl font-extrabold text-gray-800">Find Your Course That Makes Bright Future</p>
                            <div className="w-32 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <p className="mt-6 text-lg leading-loose text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo debitis dolor nemo nisi exercitationem, corporis natus, magni enim necessitatibus voluptatem ex voluptatum repudiandae quibusdam, officia dignissimos nihil temporibus vero?</p>
                    </div>
                    <div>
                        <img src={ImageVisual} alt="Image Visual" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
