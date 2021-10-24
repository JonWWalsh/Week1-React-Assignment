import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <ul className="ul">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">Link1</a></li>
                <li><a href="#contact">Link2</a></li>
                <li><a href="#about">Link3</a></li>
            </ul>
        );
    }
}

