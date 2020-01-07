import React from "react"
import {BrowserRouter as Router , Route ,Switch,Redirect} from 'react-router-dom'

import User from "./user";
import Admin from "./admin";
import Login from './login'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/admin'><Admin/></Route>
                    <Route path='/login'><Login/></Route>
                    <Route exact path='/'>
                        <Redirect to={'/user'}/>
                    </Route>
                    <Route path='/user'>
                        <User/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}