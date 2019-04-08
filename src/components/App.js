import React from "react";
import Helmet from "react-helmet";
import "../index.css";

const App = () => {
    return (
        <div className="flex font-sans mt-12">
            <Helmet bodyAttributes={{ style: 'background-color: #2637DD' }} />
            <div className="w-1/3"></div>
            <div className="w-1/3 container mx-auto mt-32">
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

export default App;