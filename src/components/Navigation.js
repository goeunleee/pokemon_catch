import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Pokemon-Weak</a>
            <ul class="nav nav-pills pull-right mr-auto">
                <li role="presentation" className="active">
                    <Link to="/">Home</Link>
                </li>
                <li role="presentation" className="active">
                    <Link to="/">Weak</Link>
                </li>
                <li role="presentation" className="active">
                    <Link to="/catch">Catch</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;