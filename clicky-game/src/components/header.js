import React from "react";

class Header extends React.Component {
    state = {
        previousValue: "",
        highScore: 0,
        currentScore: 0,
    }

    render () {
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <ul className="navbar-nav w-100 text-white d-flex justify-content-around">
                    <li className="nav-item"><b>Current Score:</b> {this.state.currentScore}</li>
                    <li className="nav-item"><h5>Clicky Game!</h5></li>
                    <li className="nav-item"><b>High Score:</b> {this.state.highScore}</li>
                </ul>
            </nav>
        );
    }
}

export default Header;