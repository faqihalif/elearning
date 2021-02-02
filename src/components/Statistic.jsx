import React from 'react'

import CourseIcon from '../images/course.png'
import StudentIcon from '../images/student.png'
import InstructorIcon from '../images/instructor.png'

function Statistic() {
    return (
        <div className="container px-4 pt-12 mx-auto lg:px-8">
            {/* Course */}
            <div className="grid grid-cols-1 gap-10 lg:grid lg:grid-cols-3 lg:gap-16">
                <div className="flex items-center justify-center w-full space-x-8">
                    <div className="flex items-center justify-center">
                        <img src={CourseIcon} alt="Course Icon" className="w-auto h-12 lg:w-auto lg:h-16" />
                    </div>
                    <div>
                        <div className="lg:mb-2">
                            <p className="text-3xl font-extrabold text-gray-800 lg:text-4xl">20,000+</p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-600 lg:text-xl">Special Courses</p>
                        </div>
                    </div>
                </div>

                {/* Student */}
                <div className="flex items-center justify-center w-full space-x-8">
                    <div className="flex items-center justify-center">
                        <img src={StudentIcon} alt="Student Icon" className="w-auto h-12 lg:w-auto lg:h-16" />
                    </div>
                    <div>
                        <div className="lg:mb-2">
                            <p className="text-3xl font-extrabold text-gray-800 lg:text-4xl">480,000+</p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-600 lg:text-xl">Enrolled Student</p>
                        </div>
                    </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center justify-center w-full space-x-8">
                    <div className="flex items-center justify-center">
                        <img src={InstructorIcon} alt="Instructor Icon" className="w-auto h-12 lg:w-auto lg:h-16" />
                    </div>
                    <div>
                        <div className="lg:mb-2">
                            <p className="text-3xl font-extrabold text-gray-800 lg:text-4xl">4,000+</p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-600 lg:text-xl">Expert Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic
