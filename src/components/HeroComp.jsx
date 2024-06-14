import React, { Component } from 'react'
import ImageSlider from './Imageslider'

export default class HeroComp extends Component {
    render() {
        return (
            <>
                {/* Mobile */}

                <div className="hero block lg:hidden">
                    {/* banner */}
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1100/250/image/7cd015eba6f64fe8.jpg?q=90" alt="" />

                    <div className=" cats bg-white space-x-2 mt-1  p-1">
                        <ul className='grid grid-row-3 grid-flow-col overflow-x-scroll'>
                            <li className="row-auto">
                                <img src="https://rukminim1.flixcart.com/fk-p-flap/200/300/image/f21f565c1ed01753.jpg?q=90" alt="" />
                            </li>
                            <li className="row-auto">
                                <img src="https://rukminim1.flixcart.com/fk-p-flap/200/300/image/f4c98c002201865e.jpg?q=90" alt="" />
                            </li>
                            <li className="">
                                <img src="https://rukminim1.flixcart.com/fk-p-flap/200/300/image/73878deda3984107.jpg?q=90" alt="" />
                            </li>
                            <li className="">
                                <img src="https://rukminim1.flixcart.com/fk-p-flap/200/300/image/e8d23ba6e8ebf67b.jpg?q=90" alt="" />
                            </li>
                            <li className="">
                                <img src="https://rukminim1.flixcart.com/fk-p-flap/200/300/image/acd0843e721b1e53.jpg?q=90" alt="" />
                            </li>
                        </ul>
                    </div>

                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1100/200/image/aec9828024908da9.jpg?q=90" alt="" className='mt-0.5' />

                    <img src="https://rukminim1.flixcart.com/fk-p-flap/850/300/image/ffd38f92645218e6.jpg?q=90" alt="" className='mt-0.5' />
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/850/200/image/ceb5c6ebfa76df60.jpg?q=90" alt="" className='mt-0.5' />

                    {/* products */}

                    <div>

                        <div className="grid grid-cols-3">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/300/400/image/18a17297a86ec8b7.jpeg?q=90" alt="" />
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/300/400/image/18a17297a86ec8b7.jpeg?q=90" alt="" />
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/300/400/image/18a17297a86ec8b7.jpeg?q=90" alt="" />
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/300/400/image/18a17297a86ec8b7.jpeg?q=90" alt="" />
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/300/400/image/18a17297a86ec8b7.jpeg?q=90" alt="" />
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/300/400/image/18a17297a86ec8b7.jpeg?q=90" alt="" />

                        </div>

                        <div className="slider my-3">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/1100/250/image/03c18645031e57ae.png?q=90" alt="" />


                            <ImageSlider />


                        </div>

                        <div className="grid grid-cols-2">

                            <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/91c51210ae96ab1f.jpg?q=90" alt="" /></a>

                            <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/19d78e3535aa0544.jpg?q=90" alt="" /></a>
                            <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/680f1062ce9f52d2.jpg?q=90" alt="" /></a>
                            <a href="/product"><img src="https://rukminim1.flixcart.com/fk-p-flap/550/800/image/c5514b7054736f84.jpg?q=90" alt="" /></a>


                        </div>







                    </div>
                </div>

            </>
        )
    }
}
