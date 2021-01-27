import React from 'react'

import CourseCard from './CourseCard'

function OurPopularCourse() {
    return (
        <div className="container px-4 pt-16 pb-24 mx-auto lg:px-8">
            {/* Title */}
            <div className="flex items-center justify-between mb-6 lg:mb-10">
                <div>
                    <p className="mb-2 text-2xl font-extrabold text-gray-800 lg:mb-6 lg:text-4xl">Our Popular Course</p>
                    <div className="w-32 h-1 bg-blue-500 rounded-full lg:h-2"></div>
                </div>
                <div className="hidden lg:block">
                    <a href="https://elearning.jec.co.id/" className="px-6 py-4 text-xl text-blue-500 bg-white border border-blue-500 rounded-xl">ALL COURSES</a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid lg:grid-cols-3 lg:gap-12">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
            <div className="flex justify-center mt-10 lg:hidden">
                <a href="https://elearning.jec.co.id/" className="px-4 py-2 text-blue-500 bg-white border border-blue-500 rounded-xl">ALL COURSES</a>
            </div>
        </div>
    )
}

export default OurPopularCourse
