import React from "react";
import './static/css/about.css';
    function WhoAmI() {
        return (
            <>
                <nav>
                    <ul>
                        <li className="nav-links"><a href="/">Home</a></li>
                        <li className="nav-links"><a href="/whoami">WhoAmI?</a></li>
                        <li className="nav-links"><a href="">Projects</a></li>
                        <li className="nav-links"><a href="">Services</a></li>
                        <li className="nav-links"><a href="">CV</a></li>
                        <li className="nav-links"><a href="">Contact me</a></li>
                    </ul>
                </nav>
                <div className="whoami_content">
                    <div className="shell">
                        <p className="term-text"><span className="terminal">>></span>whoami</p>
                        <p className="term-text"><span className="terminal">>></span>Vishnu</p>
                    </div>
                </div>
            </>
        )
    }
export default WhoAmI;