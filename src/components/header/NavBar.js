import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation" rel="noreferrer">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                        <li><a className="smoothscroll" href="#contactus">Contact</a></li>
                    </ul> 
                </nav>
            </div>
        )
    }
}
