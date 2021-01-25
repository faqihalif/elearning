import React from 'react'

import CourseCard from './CourseCard'

function OurPopularCourse() {
    return (
        <div className="container px-8 pt-16 pb-24 mx-auto">
            {/* Title */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <p className="mb-6 text-4xl font-extrabold text-gray-800">Our Popular Course</p>
                    <div className="w-32 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                    <a href="#" className="px-6 py-4 text-xl text-blue-500 bg-white border border-blue-500 rounded-xl">ALL COURSES</a>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-12">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}

export default OurPopularCourse
