/**
 * @Date:   2020-01-20T09:50:32+00:00
 * @Last modified time: 2020-02-11T15:32:55+00:00
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
        loginState: false,
        redirect: true
      };
    }

    componentDidMount(){

    }

    logOut(){
      console.log("Log Out");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("company_id");
      localStorage.removeItem("library_id");
      localStorage.removeItem("loggedIn");
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
            {JSON.parse(localStorage.getItem("loggedIn")) ? <></> : <Nav.Link className="text-white" href="/">Home</Nav.Link>}
            {JSON.parse(localStorage.getItem("loggedIn")) ? <></> : <Nav.Link className="text-white" href="/register">Register</Nav.Link>}
            {JSON.parse(localStorage.getItem("loggedIn")) ? <Nav.Link className="text-white" href="#" onClick={() => this.logOut()}>Logout</Nav.Link> : <Nav.Link className="text-white" href="/login">Login</Nav.Link>}
            <Nav.Link className="text-dark float-right" onClick={() => this.seeding()}>Seed database</Nav.Link>
          </Navbar>

          <BrowserRouter>
            <div className="container">
              {JSON.parse(localStorage.getItem("loggedIn")) ? <Redirect to="/main" /> : <></>}
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/main" component={Main}/>
            </div>
          </BrowserRouter>

        </>
      );
    }
}

class Welcome extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card mt-5">
                <div className="card-header bg-dark text-white" style={{borderRadius: 0}}>
                  <div class="row justify-content-center">
                    <div class="col-8 text-center">
                      <h3>Welcome to the Steam Emulator!</h3>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-4 text-center">
                      <h3>Login Or Register!</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default App;
