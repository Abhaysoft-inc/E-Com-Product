import React, { Component } from 'react'
import ImageSlider from './PCImageslider'

export default class DesktopHS extends Component {
    render() {
        return (
            <>

                <div className="hidden lg:block">
                    <ImageSlider />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/2700/233/image/764fb9b9dd00ade5.jpg?q=60" alt="" className='mt-4' />

                    <div className="grid grid-cols-4 px-4 mt-10">
                        <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/c5514b7054736f84.jpg?q=90" alt="" /></a>

                        <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/0a353140242d7139.jpg?q=90" alt="" /></a>

                        <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/9b554843c4b77947.jpg?q=90" alt="" /></a>

                        <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/91c51210ae96ab1f.jpg?q=90" alt="" /></a>

                        <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/19d78e3535aa0544.jpg?q=90" alt="" /></a>

                        <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/680f1062ce9f52d2.jpg?q=90" alt="" /></a>

                        <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/c5514b7054736f84.jpg?q=90" alt="" /></a>
                        <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/c5514b7054736f84.jpg?q=90" alt="" /></a>
                    </div>




                </div>

            </>
        )
    }
}
