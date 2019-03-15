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
            {/* eslint-disable-next-line */}
                <a className="navbar-brand navbar-nav text-white">Clicky Game!</a>
                <ul className="navbar-nav text-white ml-auto d-inline text-right">
                    <li classname="list-item"><b>Current Score:</b> {this.state.currentScore}</li>
                    <li classname="list-item"><b>High Score:</b> {this.state.highScore}</li>
                </ul>
            </nav>
        );
    }
}

export default Header;