import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { IoAdd, IoArrowBack } from 'react-icons/io5'
import Footer from '../components/Footer'
import { IoIosStar } from 'react-icons/io'

export default class Product extends Component {
    render() {
        return (
            <>
                <Navbar />

                {/* mobile */}

                <div className="px-4 lg:hidden">
                    <a href="/">
                        <IoArrowBack size={40} className='ml-1' />
                    </a>


                    <img src="https://rukminim1.flixcart.com/image/850/850/xif0q/mobile/b/y/g/-original-imagnfzybft7wzmp.jpeg?q=90&crop=false" alt="" className='px-12 pt-10' />

                    <p className="mt-4 text-xl">POCO C55 Black 64 GB, 4GB RAM</p>
                    <p className="text-2xl font-bold mt-4">$343/month</p>
                    <p className="">24 months Cost EMI Plan with HDFC credit card</p>
                    <a className="text-purple-600 font-bold">Details</a>
                    <p className="bg-green-300 text-green-900 p-0.5 pl-2 pb-1 font-bold w-40 mt-3">Extra $5000 off</p>
                    <p className="text-green-800 text-2xl font-bold mt-5">41% off <s className="text-gray-400 decoration-slice">11,999</s><price className='ml-3 text-black text-3xl'>$6,999</price></p>

                    <div className="grid grid-cols-2  mt-6 space-x-2 mb-10">
                        <button className="p-4 border text-xl font-bold border-gray-600">Add to Cart</button>
                        <button className="p-4  border text-xl font-bold border-blue-600 bg-blue-800 text-white">Buy Now</button>
                    </div>



                </div>



                {/* PC */}

                <div className="hidden lg:block">

                    <div className="flex">

                        <div className="div1 ml-6 mt-6 sticky">
                            <img src="https://rukminim1.flixcart.com/image/850/850/xif0q/mobile/b/y/g/-original-imagnfzybft7wzmp.jpeg?q=90&crop=false" className='w-4/5 mx-6 sticky top-24' alt="" />

                        </div>

                        <div className="div2 w-4/5 px-4 py-6">

                            <p className="pb-1 font-semibold text-[10px]">HOME / MOBILES & ACCESSORIES / MOBILES / POCO MOBILES</p>
                            <hr className='' />
                            <p className="mt-4 text-2xl">POCO C55 Black 64 GB, 4GB RAM</p>
                            <p className="bg-green-300 text-green-900 p-0.5 pl-2 pb-1 font-bold w-40 mt-3">Extra $5000 off</p>
                            <p className="text-green-800 text-2xl font-bold mt-5">41% off <s className="text-gray-400 decoration-slice">11,999</s><price className='ml-3 text-black text-3xl'>$6,999</price></p>

                            <div className="flex mt-3">
                                <IoIosStar className='mt-1' />
                                <IoIosStar className='mt-1' />
                                <IoIosStar className='mt-1' />
                                <IoIosStar className='mt-1' />
                                <p className="ml-5">1,37,935 ratings & 2,34,986 reviews</p>
                            </div>

                            <p className="text-lg mt-4 font-semibold">Storage: <si className=' text-lg text-blue-600'> 128GB</si></p>
                            <div className="flex mt-4">
                                <button className="border-gray-400 border py-2 px-3 rounded-md text-gray-400" disabled>64 GB</button>
                                <button className="text-blue-600 border border-blue-800 ml-6 py-0 px-3 rounded-md">128 GB</button>
                            </div>

                            <p className="text-lg mt-4 font-semibold">RAM: <si className=' text-lg text-blue-600'> 6 GB</si></p>
                            <div className="flex mt-4">
                                <button className="border-gray-400 border py-2 px-3 rounded-md text-gray-400" disabled>4 GB</button>
                                <button className="text-blue-600 border border-blue-800 ml-6 py-0 px-3 rounded-md">6 GB</button>
                            </div>

                            <div className="grid grid-cols-2  mt-6 space-x-2 mb-10">
                                <button className="p-4 border text-xl font-bold border-gray-600">Add to Cart</button>
                                <button className="p-4  border text-xl font-bold border-blue-600 bg-blue-800 text-white">Buy Now</button>
                            </div>

                            <div className="flex justify-between">
                                <p>Find a seller that delivers to you</p>
                                <button className='mr-10 border py-2 px-4 text-blue-700'>Enter Pincode</button>


                            </div>

                            <p className="font-semibold text-lg">Highlights</p>
                            <div className="mt-2"></div>
                            <li className="">
                                6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                            <li className="">17.04 cm (6.71 inch) HD+ Display</li>
                            <li className="">50MP Dual Rear Camera | 5MP Front Camera</li>
                            <li className="">5000 mAh Battery</li>
                            <li className="">Mediatek Helio G85 Processor</li>

                        </div>


                    </div>
                    {/* <div className="mt-10 px-10">
                        <p className="text-lg">Similar Products</p>

                        <div className="grid grid-rows-1">

                        </div>
                    </div> */}

                </div>
                <Footer />






            </>
        )
    }
}
