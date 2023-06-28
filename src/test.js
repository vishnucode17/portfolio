import React from "react";
import keyboard from "./static/images/keyboard.jpg"
import './static/css/test.css';

function Test() {

    return (
        <>
            <nav>
                <ul>
                    <li className="nav-links"><a href="">Home</a></li>
                    <li className="nav-links"><a href="/whoami">WhoAmI?</a></li>
                    <li className="nav-links"><a href="">Projects</a></li>
                    <li className="nav-links"><a href="">Services</a></li>
                    <li className="nav-links"><a href="">CV</a></li>
                    <li className="nav-links"><a href="">Contact me</a></li>
                </ul>
            </nav>
            <div className="main">
                <h1 id="name">I'm Vishnu</h1>
            </div>
        </>
    )

}
export default Test;