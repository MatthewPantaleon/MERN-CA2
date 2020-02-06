/**
 * @Date:   2020-01-20T09:50:32+00:00
 * @Last modified time: 2020-02-06T17:04:15+00:00
 */



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Redirect, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import axios from 'axios';

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

    auth = (cf, cs) => {
      return authUser(cf, cs);
    };

    componentDidMount(){
      //check that the user is actually logged in and redirect accordingly
      this.setState({
        loginState: this.auth()
      });
    }

    logOut(){
      console.log("Log Out");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      window.location = "/login";
    }

    seeding(){
      if(!window.confirm("Are you sure you want to reseed the database?\nAll Collections will be reset.\nExcept Users where the libraries are cleared instead.\nThis action cannot be undone.")){
        console.log("Pranked");
        return;
      }else{
        axios.get(process.env.REACT_APP_BACKEND_URI + '/seed').then((r) => {

        }).catch((r) => {

        });
      }
    }

    render(){
      return(
        <>

          <Navbar bg="dark">
            {this.state.loginState ? <></> : <Nav.Link className="text-white" href="/register">Register</Nav.Link>}
            {this.state.loginState ? <Nav.Link className="text-white" href="#" onClick={() => this.logOut()}>Logout</Nav.Link> : <Nav.Link className="text-white" href="/login">Login</Nav.Link>}
            <Nav.Link className="text-dark float-right" onClick={() => this.seeding()}>Seed database</Nav.Link>
          </Navbar>

          <BrowserRouter>
            <div className="container">
              {this.state.loginState ? <Redirect to="/main" /> : <></>}
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
