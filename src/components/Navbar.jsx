import React, { Component } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

export default class Navbar extends Component {
    render() {
        return (
            <>

                {/* Mobile Navbar */}

                <div className="mobile-nav bg-white p-4 block lg:hidden md:hidden">
                    <div className="topto flex">
                        {/* <IoMdMenu size={35} color='blue' /> */}
                        <p className="text-2xl text-blue-800 ml-2 font-[700] ">Abhay's Tech Shop</p>

                    </div>

                    <div className="searchbar relative">
                        <input type="text" className='border px-10 mt-3 py-2 w-full' placeholder='Search for phones' />
                        <div className="absolute inset-y-0 left- pl-2  
                    flex items-center  
                    pointer-events-none">

                            <IoSearchSharp size={24} className='mt-3' />
                        </div>

                    </div>


                </div>

                {/* Desktop Navbar */}
                <div className="desk-nav hidden lg:block md:block">
                    <div className="navb flex bg-blue-600 p-5">
                        <ul className='flex'>
                            <li className="text-white font-[700] text-2xl ml-4 mr-16">Aman's Tech Shop</li>
                            <ul className="flex space-x-6">
                                <li className='text-white text-lg mt-1'>Home</li>
                                <li className='text-white text-lg mt-1'>Smartphones</li>
                                <li className='text-white text-lg mt-1'>Laptops</li>
                                <li className='text-white text-lg mt-1'>Computers</li>
                                <li className='text-white text-lg mt-1'>Accessories</li>
                                <li className='text-white text-lg mt-1'></li>

                            </ul>
                        </ul>

                    </div>

                </div>


            </>
        )
    }
}
