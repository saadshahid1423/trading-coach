import React from 'react';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Login from '../login/login';
import Home from '../home/home';

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={Home} />
            </Router>
        )
    }
}

export default AppRouter ;