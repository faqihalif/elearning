import React from 'react'

import CourseImage from '../images/service-excellence.jpg'
import StarRating from './StarRating'

function CourseCard() {
    return (
        <a href="#" className="w-full overflow-hidden bg-white shadow-lg rounded-xl">
            <div className="relative w-full h-60">
                <img src={CourseImage} alt="" className="absolute object-cover w-full h-full" />
            </div>

            <div className="p-2">
                {/* Rating */}
                <div className="p-4 border-b">
                    <p className="mb-2 text-xl font-extrabold text-gray-800 truncate">Service Excellence</p>
                    <div className="flex space-x-2">
                        <StarRating rating="3" />
                        <div>
                            <p className="text-xs text-gray-500">5.0 (10 Rating)</p>
                        </div>
                    </div>
                </div>

                {/* Detail */}
                <div className="p-4">
                    <div className="flex space-x-4">
                        {/* Total User */}
                        <div className="flex space-x-2">
                            <div className="text-blue-500">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">500</p>
                            </div>
                        </div>
                        
                        {/* Total Time */}
                        <div className="flex space-x-2">
                            <div className="text-blue-500">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">4h</p>
                            </div>
                        </div>

                        {/* Lecturer */}
                        <div className="flex space-x-2">
                            <div className="text-blue-500">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Lectures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CourseCard
