import React from "react";
import { Link } from "react-router-dom";

import "../../index.css";

const Register = () => {
  return (
		<div className="flex font-sans">
			<div className="w-1/3"></div>
			<div className="container mx-auto w-1/3 mt-8">
				<div className="mb-8 mt-8">
					<h1 className="text-center text-3xl font-bold text-blue-custom">
						Sign up for an account
					</h1>
				</div>
				<div className="max-w-sm rounded overflow-hidden shadow-lg ml-6">
					<div className="px-6 pt-8">
						<form className="w-full max-w-md">
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3 mb-6 md:mb-0">
									<label htmlFor="username" className="block uppercase tracking-wide text-grey-custom text-sm font-bold mb-2">
										Username
									</label>
									<input type="text" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-custom mb-2"/>
								</div>
                                <div className="w-full px-3 mt-4 mb-6 md:mb-0">
									<label htmlFor="username" className="block uppercase tracking-wide text-grey-custom text-sm font-bold mb-2">
										Email Address
									</label>
									<input type="email" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-custom mb-2"/>
								</div>
								<div className="w-full px-3 mt-4 mb-6 md:mb-0">
									<label htmlFor="password" className="block uppercase tracking-wide text-grey-custom text-sm font-bold mb-2">
										Password
									</label>
									<input type="password" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-custom focus:bg-white"/>
								</div>
                                <div className="w-full px-3 mt-4 mb-6 md:mb-0">
									<label htmlFor="password" className="block uppercase tracking-wide text-grey-custom text-sm font-bold mb-2">
										Confirm Password
									</label>
									<input type="password" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-custom focus:bg-white"/>
								</div>
								<div className="w-full px-3 mt-4 md:mb-0">
									<button className="w-full bg-blue-custom hover:bg-blue text-white font-bold py-4 px-4 rounded text-lg">
										Sign Up
									</button>
								</div>
								<div className="w-full text-center px-3 mt-4">
									<p className="text-grey-dark text-xs">
										Already have an account? <Link to="/sign-in" className="text-grey-darker italic no-underline hover:text-blue-custom">
											Go to Sign In
										</Link>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="w-1/3"></div>
        </div>
    );
};

export default Register;