import React from "react";
import Username from "./username";
import Password from "./password";
import LoginButton from "./login-button";
import Header from "./header";

let e = React.createElement;

export default class LoginField extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="h3">
                    <Header />
                </div>
                <div className="card-body">
                    <Username />
                </div>
                <div className="card-body">
                    <Password />
                </div>
                <div className="card-footer">
                    <LoginButton />

                </div>
            </div>
        );
 }
}