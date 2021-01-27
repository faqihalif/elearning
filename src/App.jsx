import React from 'react';

import Header from './components/Header'
import Banner from './components/Banner'
import Statistic from './components/Statistic'
import OurPopularCourse from './components/OurPopularCourse'
import About from './components/About'
import Feedback from './components/Feedback'
import HighlightEvents from './components/HighlightEvents'
import EnrollNow from './components/EnrollNow'
import Footer from './components/Footer'

function App() {
    return (
        <div className="antialiased">
            <Header />
            <Banner />
            <Statistic />
            <OurPopularCourse />
            <About />
            <Feedback />
            <HighlightEvents />
            <EnrollNow />
            <Footer />
        </div>
    )
}

export default App;