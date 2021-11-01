import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListEmployeeComponent from '../components/ListEmployeeComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import CreateEmployeeComponent from '../components/CreateEmployeeComponent';
import ViewEmployeeComponent from '../components/ViewEmployeeComponent';

class EmployeeComponent extends Component {
    render() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/employeeblog" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employeeblog/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/employeeblog/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/employeeblog/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}
}

export default EmployeeComponent;
