import React from 'react'

import Men from '../images/men.png'
import Woman from '../images/woman.png'

function FeedbackCard() {
    return (
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
    )
}

export default FeedbackCard
