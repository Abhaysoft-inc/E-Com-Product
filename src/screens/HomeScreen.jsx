import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import HeroComp from '../components/HeroComp'
import Footer from '../components/Footer'
import DesktopHS from '../components/DesktopHS'

export default class HomeScreen extends Component {
    render() {
        return (
            <>
                <Navbar />
                <HeroComp />
                <DesktopHS />
                <Footer />



            </>
        )
    }
}
