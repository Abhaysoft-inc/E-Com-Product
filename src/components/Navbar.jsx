import React, { Component } from 'react'
import { CiShop } from 'react-icons/ci';
import { IoMdMenu } from "react-icons/io";
import { IoBusinessOutline, IoCart, IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { RxAvatar } from 'react-icons/rx';

export default class Navbar extends Component {
    render() {
        return (
            <>

                {/* Mobile Navbar */}

                <div className="mobile-nav bg-white p-4 block lg:hidden md:block">
                    <div className="topto flex">
                        {/* <IoMdMenu size={35} color='blue' /> */}
                        <a href='/' className="text-2xl text-blue-800 ml-2 font-[700] ">techsy</a>

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
                <div className="desk-nav hidden lg:block md:hidden sticky top-0 z-10">
                    <div className="navb flex bg-white p-5">
                        <ul className='flex'>
                            <a href='/' className="text-blue-700 font-[700] text-3xl scale-x-110 ml-4 mr-16">techsy</a>
                            <ul className="flex space-x-6">

                                {/* searchbar */}

                                <div className="searchbar relative">
                                    <input type="text" className='border px-12 mt-0 py-2 rounded-md w-96  text-black' placeholder='Search for Phones, Laptops and More' />
                                    <div className="absolute inset-y-0 left- pl-2  
                    flex items-center  
                    pointer-events-none">

                                        <IoSearchSharp size={24} className='mt-0' />
                                    </div>

                                </div>

                                <div className="flex login">
                                    <RxAvatar size={24} className='mt-1.5 mr-2' />
                                    <a href='/login' className="text-black text-lg  font-[500] mt-1">Login</a>
                                </div>

                                <div className="flex cart">
                                    <IoCartOutline size={24} className='mt-1.5 mr-2 ml-4' />
                                    <p className="text-black text-lg font-[500] mt-1">Cart</p>
                                </div>

                                <div className="flex login">
                                    < CiShop size={24} className='mt-1.5 mr-2 ml-4' />
                                    <p className="text-black text-lg font-[500] mt-1">Become a Seller</p>
                                </div>

                                <div className="flex login">

                                </div>




                                {/* <li className='text-black text-lg mt-1'>Home</li>
                                <li className='text-white text-lg mt-1'>Smartphones</li>
                                <li className='text-white text-lg mt-1'>Laptops</li>
                                <li className='text-white text-lg mt-1'>Computers</li>
                                <li className='text-white text-lg mt-1'>Accessories</li>
                                <li className='text-white text-lg mt-1'></li> */}

                            </ul>
                        </ul>

                    </div>

                </div>


            </>
        )
    }
}
