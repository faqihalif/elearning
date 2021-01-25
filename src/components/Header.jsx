import React from 'react'
import logo from '../images/jec.png'

function Header() {
    return (
        <div className="flex items-center w-full py-4 bg-white">
            <div className="container flex items-center justify-between px-8 mx-auto">
                <div>
                    <img src={logo} alt="" className="w-auto h-12" />
                </div>
                <div>
                    <a href="https://elearning.jec.co.id/" className="inline-flex px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg">Log in</a>
                </div>
            </div>
        </div>
    )
}

export default Header
