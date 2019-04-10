import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Home from "./Home";
import Navbar from "./Navbar";

import "../index.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/sign-in" exact component={ Login }/>
                <Route path="/sign-up" exact component={ Register } />
            </Switch>
        </Router>
            
    );
};

export default App;