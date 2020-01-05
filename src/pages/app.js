import React from "react"
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'

import User from "./user";
import Admin from "./admin";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/'><User/></Route>
                    <Route exact path='/admin'><Admin/></Route>
                </Switch>
            </Router>
        )
    }
}