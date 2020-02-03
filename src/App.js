/**
 * @Date:   2020-01-20T09:50:32+00:00
 * @Last modified time: 2020-02-03T09:49:00+00:00
 */



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './things/Login';


class App extends Component{


  authHandler = () => {

  };

  render(){
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
