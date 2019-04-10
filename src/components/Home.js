import React from "react";
import Helmet from "react-helmet";

const Home = () => {
    return (
        <div className="flex font-sans mt-12">
            <div className="w-1/3"></div>
            <div className="w-1/3 container mx-auto mt-16">
                <Helmet bodyAttributes={{ style: 'background-color: #2637DD' }} />
                <h1 className="text-xxl text-white">
                    Hello! <br />Welcome to <span className="italic">Journey</span>.
                </h1>
                <p className="text-3xl text-white mt-10">
                    An online <span className="font-bold">blogging</span> platform for tech loving <span className="font-bold">geeks</span>.
                </p>
            </div>
            <div className="w-1/3"></div>
        </div>
    );
};

export default Home;