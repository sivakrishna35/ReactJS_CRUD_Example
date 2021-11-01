import React, { Component } from 'react'

import './Sidebar.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import EmployeeComponent from './EmployeeComponent';

class Sidebar extends Component {
    
    render() {
        return (
            <Router>
        <div className="sidenav">
            <Link to="/employeeblog"><p>Employee Blog</p></Link>
            <Link to="/"><p>First Blog</p></Link>
            <Link to="/"><p>First Blog</p></Link>
            <Link to="/"><p>First Blog</p></Link>
            <Link to="/"><p>First Blog</p></Link>
            <Link to="/"><p>First Blog</p></Link>
        </div> 
        <div className="contents">
        <Switch>
            <Route exact path="/employeeblog">
                <EmployeeComponent/>
            </Route>
        </Switch>
        </div>
    </Router>
        )
    }
}

export default Sidebar