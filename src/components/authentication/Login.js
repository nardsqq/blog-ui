import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { userLogin } from "../../actions";
import "../../index.css";

class Login extends React.Component {
    renderInput({ input, label, type }) {
        return (
            <div>
                <label className="block uppercase tracking-wide text-grey-custom text-sm font-bold mb-2">
                    { label }
                </label>
                <input { ...input } type={ type } className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-custom mb-2"/>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.userLogin(formValues);
    }

    render() {
        return (
            <div className="flex font-sans">
                <div className="w-1/3"></div>
                <div className="container mx-auto w-1/3 mt-24">
                    <div className="mb-8 mt-8">
                        <h1 className="text-center text-3xl font-bold text-blue-custom">
                            Start your <span className="italic">Journey</span> with us!
                        </h1>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-6">
                        <div className="px-6 pt-8">
                            <form onSubmit={ this.props.handleSubmit(this.onSubmit) } className="w-full max-w-md">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3 mb-6 md:mb-0">
                                        <Field name="email" type="email" component={this.renderInput} label="Email" />                                
                                    </div>
                                    <div className="w-full px-3 py-4 mb-6 md:mb-0">
                                        <Field name="password" type="password" component={this.renderInput} label="Password"/>
                                    </div>
                                    <div className="w-full px-3 md:mb-0">
                                        <button type="submit" className="w-full bg-blue-custom hover:bg-blue text-white font-bold py-4 px-4 rounded text-lg">
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="w-full text-center px-3 mt-4">
                                        <p className="text-grey-dark text-xs">
                                            Haven't started yours yet? <Link to="/sign-up" className="text-grey-darker italic no-underline hover:text-blue-custom">
                                                Sign up for an account
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
    }
};

const formWrapped = reduxForm({
    form: 'userLogin'
})(Login);

export default connect(null, {userLogin})(formWrapped);