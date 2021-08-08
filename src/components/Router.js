import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation"
import Weak from "../routes/Weak";
import Catch from "../routes/Catch";

const AppRouter = () => {

    return (
        <div class="container">
            <div class="header">
                <title>포켓몬 약점 판별기</title>
            </div>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Weak} />
                        <Route exact path="/catch" component={Catch} />
                    </Switch>
                </Router>
                <footer className="footer">
                    <p> @ Company 2021 </p>
                </footer>
            </div>
    )
}

export default AppRouter;