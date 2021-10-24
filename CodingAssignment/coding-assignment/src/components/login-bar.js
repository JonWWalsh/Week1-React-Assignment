import React from "react";
import LoginField from "./login-field";
import NavBar from "./navbar";

export default class LoginBar extends React.Component {
    render() {
        return (
            <div className="container">
                <NavBar />
                <LoginField />
            </div>
        );
    }
}