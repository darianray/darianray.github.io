import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

const Paths = () => {

    //We give the route a target component or we can send functions  in render or children
    //that return valid nodes. 'children' always returns the given node whether there is a match or not

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path="/home" exact component={() => <Home />} />
                        <Route path="/about" exact component={() => <About />} />
                        <Route path="/portfolio" exact component={() => <Portfolio />} />
                        <Route path="/blog" exact component={() => <Blog />} />
                        <Route path="/contact" exact component={() => <Contact />} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}