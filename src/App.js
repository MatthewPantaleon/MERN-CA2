/**
 * @Date:   2020-01-20T09:50:32+00:00
 * @Last modified time: 2020-02-06T12:17:59+00:00
 */



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Redirect, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

import Login from './auth_components/Login';
import Register from './auth_components/Register';

import authUser from './auth_components/authUser';
import Main from './components/main';


class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        loginState: false
      };
    }

    componentDidMount(){
      this.setState({loginState: authUser()});//check that the user is actually logged in
    }

    logOut(){
      console.log("Log Out");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      window.location = "/login";
    }

    render(){
      return(
        <>
          <Navbar bg="dark">
            <Nav.Link className="text-white" href="/register">Register</Nav.Link>
            {this.state.loginState ? <Nav.Link className="text-white" href="#" onClick={() => this.logOut()}>Logout</Nav.Link> : <Nav.Link className="text-white" href="/login">Login</Nav.Link>}
          </Navbar>

          <BrowserRouter>
            <div className="container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/main" component={Main}/>
            </div>
          </BrowserRouter>

        </>
      );
    }
}

export default App;
