import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-custom p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <Link to="/" className="text-white no-underline font-sans font-bold text-xl hover:italic">Journey</Link>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                </div>
                <div>
                    <Link to="/sign-in" className="font-bold no-underline text-white hover:italic">Sign In</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;