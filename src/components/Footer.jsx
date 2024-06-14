import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-12 mt-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                {/* Menu 1 */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Get to Know Us</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">About Techsy</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Investor Relations</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Techsy Devices</a></li>
                    </ul>
                </div>
                {/* Menu 2 */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Make Money with Us</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Sell products on Techsy</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Sell on Techsy Business</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Sell apps on Techsy</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Become an Affiliate</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Advertise Your Products</a></li>
                    </ul>
                </div>
                {/* Menu 3 */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Techsy Payment Products</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Techsy Rewards Visa Signature Cards</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Techsy.com Store Card</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Techsy Business Card</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Techsy.com Corporate Credit Line</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Shop with Points</a></li>
                    </ul>
                </div>
                {/* Menu 4 */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Let Us Help You</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Techsy and COVID-19</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Your Account</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Your Orders</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Shipping Rates & Policies</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Returns & Replacements</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto text-center mt-12 border-t border-gray-700 pt-8">
                <p>&copy; {new Date().getFullYear()} Techsy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
