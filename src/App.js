/**
 * @Date:   2020-01-20T09:50:32+00:00
 * @Last modified time: 2020-02-04T13:10:42+00:00
 */



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './auth_components/Login';
import Register from './auth_components/Register';
import {BrowserRouter, Link, Redirect, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{


  componentDidMount(){

  }

  authHandler = () => {

  };

  render(){
    return (
      <>
        <BrowserRouter>
          <Redirect from='/' to='/login'/>

          <div className="card bg-dark text-white">
            <div className="card-header">
              <Link className="text-white" to="/register">Register </Link>
              <Link className="text-white" to="/login">Login </Link>
            </div>
          </div>

          <div className="container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
          </div>

        </BrowserRouter>
      </>
    );
  }
}

export default App;
