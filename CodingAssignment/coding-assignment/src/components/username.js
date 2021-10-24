import React from "react";
import LoginButton from "./login-button";

export default class Username extends React.Component {
    render() {
        return (
            <div className="input-group mb-3">
                 <input type="text" className="form-control" placeholder="Username" aria-label="Username">
                     </input>
            </div>
        );
    }
}