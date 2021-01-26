import React from 'react'

function Statistic() {
    return (
        <div className="container px-4 pt-12 mx-auto lg:px-8">
            {/* Course */}
            <div className="grid grid-cols-1 gap-10 lg:grid lg:grid-cols-3 lg:gap-16">
                <div className="flex items-center justify-center w-full space-x-8">
                    <div className="flex items-center justify-center p-3 rounded-full shadow-2xl lg:p-6">
                        <svg className="w-10 h-10 lg:w-14 lg:h-14" id="fill" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M7,24H57a0,0,0,0,1,0,0V58.045A2.955,2.955,0,0,1,54.045,61H9.955A2.955,2.955,0,0,1,7,58.045V24A0,0,0,0,1,7,24Z" style={{fill: '#e5e6eb'}} /><rect height={8} style={{fill: '#cceaff'}} width={50} x={7} y={24} /><polygon points="22 24 30 32 40 32 32 24 22 24" style={{fill: '#444'}} /><polygon points="7 24 7 32 20 32 12 24 7 24" style={{fill: '#444'}} /><polygon points="57 24 42 24 50 32 57 32 57 24" style={{fill: '#444'}} /><rect height={8} style={{fill: '#cceaff'}} transform="translate(-2.511 8.259) rotate(-15)" width={50} x="5.113" y="9.666" /><polygon points="27.146 10.32 21.489 20.118 31.148 17.53 36.805 7.732 27.146 10.32" style={{fill: '#444'}} /><polygon points="4.929 16.273 7 24 11.83 22.706 17.487 12.908 4.929 16.273" style={{fill: '#444'}} /><polygon points="53.226 3.332 46.464 5.143 40.807 14.941 55.296 11.059 53.226 3.332" style={{fill: '#444'}} /><path d="M24.966,42H29a0,0,0,0,1,0,0v8a0,0,0,0,1,0,0H24.966A1.966,1.966,0,0,1,23,48.034V43.966A1.966,1.966,0,0,1,24.966,42Z" style={{fill: '#0468ad'}} /><polygon points="38 55 28 50 28 42 38 37 38 55" style={{fill: '#027de5'}} /><rect height={2} style={{fill: '#027de5'}} transform="translate(-8.873 12.685) rotate(-15.231)" width={4} x={41} y="38.526" /><rect height={2} style={{fill: '#027de5'}} width={4} x={41} y={45} /><rect height={4} style={{fill: '#027de5'}} transform="translate(-18.937 80.157) rotate(-74.749)" width={2} x={42} y="50.474" /><polygon points="9 40 9 34 15 34 9 40" style={{fill: '#fff'}} /><path d="M57,23H14.6l40.96-10.975a1,1,0,0,0,.707-1.225L54.191,3.073a1,1,0,0,0-1.224-.707L4.671,15.307a1,1,0,0,0-.707,1.224L6,24.131V58.045A3.959,3.959,0,0,0,9.955,62h44.09A3.959,3.959,0,0,0,58,58.045V24A1,1,0,0,0,57,23Zm-1,8H50.414l-6-6H56ZM8,25h3.586l6,6H8Zm12.414,6-6-6h7.172l6,6Zm10,0-6-6h7.172l6,6Zm10,0-6-6h7.172l6,6ZM30.489,16.671l-6.927,1.856,4.243-7.349,6.927-1.856ZM37.464,8.59l6.927-1.856-4.243,7.349-6.927,1.856ZM20.83,19.259,13.9,21.115l4.242-7.349,6.927-1.856Zm33.241-8.907-11.19,3L47.123,6l5.4-1.446ZM15.413,14.5l-4.242,7.348-3.464.928-1.553-5.8ZM54.045,60H9.955A1.957,1.957,0,0,1,8,58.045V33H56V58.045A1.957,1.957,0,0,1,54.045,60Z" /></svg>
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
                    <div className="flex items-center justify-center p-3 rounded-full shadow-2xl lg:p-6">
                        <svg className="w-10 h-10 lg:w-14 lg:h-14" id="fill" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect height={8} style={{fill: '#85b4e0'}} width={5} x={49} y={53} /><rect height={8} style={{fill: '#0468ad'}} width={5} x={49} y={45} /><rect height={8} style={{fill: '#85b4e0'}} width={5} x={49} y={37} /><rect height={8} style={{fill: '#0468ad'}} width={5} x={49} y={29} /><rect height={8} style={{fill: '#85b4e0'}} width={5} x={49} y={21} /><rect height={8} style={{fill: '#0468ad'}} width={5} x={49} y={13} /><rect height={58} style={{fill: '#d9dae2'}} width={40} x={10} y={3} /><path d="M47,18V3h3V61H10V57.876A39.993,39.993,0,0,0,47,18Z" style={{fill: '#cfcfd9'}} /><circle cx={32} cy={22} r={11} style={{fill: '#fff'}} /><rect height={6} rx={3} ry={3} style={{fill: '#027de5'}} width={6} x={29} y={17} /><path d="M33.935,23h-3.87A3.065,3.065,0,0,0,27,26.065V31.79a10.936,10.936,0,0,0,10,0V26.065A3.065,3.065,0,0,0,33.935,23Z" style={{fill: '#027de5'}} /><rect height={4} style={{fill: '#cceaff'}} width={10} x={6} y={12} /><rect height={4} style={{fill: '#cceaff'}} width={10} x={6} y={21} /><rect height={4} style={{fill: '#cceaff'}} width={10} x={6} y={30} /><rect height={4} style={{fill: '#cceaff'}} width={10} x={6} y={39} /><rect height={4} style={{fill: '#cceaff'}} width={10} x={6} y={48} /><rect height={2} style={{fill: '#444'}} width={18} x={23} y={37} /><rect height={2} style={{fill: '#444'}} width={18} x={23} y={41} /><rect height={2} style={{fill: '#444'}} width={18} x={23} y={45} /><path d="M22,56a1,1,0,0,1-.707-.293l-2-2,1.414-1.414L22,53.586l3.293-3.293,1.414,1.414-4,4A1,1,0,0,1,22,56Z" style={{fill: '#444'}} /><path d="M31,56a1,1,0,0,1-.707-.293l-2-2,1.414-1.414L31,53.586l3.293-3.293,1.414,1.414-4,4A1,1,0,0,1,31,56Z" style={{fill: '#444'}} /><path d="M40,56a1,1,0,0,1-.707-.293l-2-2,1.414-1.414L40,53.586l3.293-3.293,1.414,1.414-4,4A1,1,0,0,1,40,56Z" style={{fill: '#444'}} /><path d="M54,12H51V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3v8H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H9v3H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H9v3H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H9v3H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H9v3H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H9v8a1,1,0,0,0,1,1H54a1,1,0,0,0,1-1V13A1,1,0,0,0,54,12ZM7,15V13h8v2Zm0,9V22h8v2Zm0,9V31h8v2Zm0,9V40h8v2Zm0,7h8v2H7ZM49,60H11V53h5a1,1,0,0,0,1-1V48a1,1,0,0,0-1-1H11V44h5a1,1,0,0,0,1-1V39a1,1,0,0,0-1-1H11V35h5a1,1,0,0,0,1-1V30a1,1,0,0,0-1-1H11V26h5a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1H11V17h5a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H11V4H49Zm4,0H51V54h2Zm0-8H51V46h2Zm0-8H51V38h2Zm0-8H51V30h2Zm0-8H51V22h2Zm0-8H51V14h2Z" /></svg>
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
                    <div className="flex items-center justify-center p-3 rounded-full shadow-2xl lg:p-6">
                        <svg className="w-10 h-10 lg:w-14 lg:h-14" id="fill" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M51.129,3H8A5,5,0,0,0,3,8v5H13V59H57V8.871A5.87,5.87,0,0,0,51.129,3Z" style={{fill: '#d9dae2'}} /><path d="M51.129,3H8A5,5,0,0,0,3,8v5H13V59h0A44,44,0,0,0,57,15V8.871A5.87,5.87,0,0,0,51.129,3Z" style={{fill: '#e5e6eb'}} /><polygon points="49 44 37 56 41 56 41 61 49 53 57 61 57 55 61 55 49 44" style={{fill: '#0468ad'}} /><rect height={2} style={{fill: '#444'}} width={30} x={20} y={19} /><rect height={2} style={{fill: '#444'}} width={30} x={20} y={25} /><rect height={2} style={{fill: '#444'}} width={30} x={20} y={31} /><rect height={2} style={{fill: '#444'}} width={30} x={20} y={37} /><circle cx={35} cy={12} r={3} style={{fill: '#fff'}} /><path d="M8,3H8a5,5,0,0,1,5,5v5a0,0,0,0,1,0,0H3a0,0,0,0,1,0,0V8A5,5,0,0,1,8,3Z" style={{fill: '#cfcfd9'}} /><circle cx={49} cy={49} r={6} style={{fill: '#027de5'}} /><circle cx={49} cy={49} r={4} style={{fill: '#cceaff'}} /><polygon points="44 58 42 60 56 60 54 58 44 58" /><path d="M51.129,2H8A6.006,6.006,0,0,0,2,8v5a1,1,0,0,0,1,1h9V59a1,1,0,0,0,1,1H41V58H14V8a5.969,5.969,0,0,0-1.54-4H51.129A4.877,4.877,0,0,1,56,8.871V50.417l2,1.833V8.871A6.878,6.878,0,0,0,51.129,2ZM12,12H4V8a4,4,0,0,1,8,0Z" /><rect height={2} width={30} x={20} y={19} /><rect height={2} width={30} x={20} y={25} /><rect height={2} width={30} x={20} y={31} /><rect height={2} width={30} x={20} y={37} /><path d="M39,12a4,4,0,1,0-4,4A4,4,0,0,0,39,12Zm-6,0a2,2,0,1,1,2,2A2,2,0,0,1,33,12Z" /></svg>
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
