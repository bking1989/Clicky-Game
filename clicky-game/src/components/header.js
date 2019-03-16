import React from "react";

class Header extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <ul className="navbar-nav w-100 text-white d-flex justify-content-around">
                    <li className="nav-item"><b>Current Score:</b> {this.props.currentScore}</li>
                    <li className="nav-item"><h3>Clicky Game!</h3></li>
                    <li className="nav-item"><b>High Score:</b> {this.props.highScore}</li>
                </ul>
            </nav>
        );
    }
}

export default Header;