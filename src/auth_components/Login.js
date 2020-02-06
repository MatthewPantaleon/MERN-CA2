/**
 * @Date:   2020-01-28T11:28:50+00:00
 * @Last modified time: 2020-02-04T16:58:09+00:00
 */

import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
import axios from 'axios';

class Login extends Component{

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      error: {message: ''}
    };
  }

  handleSubmit(e){
    e.preventDefault();

    let data = {
      email: this.state.email,
      password: this.state.password
    };
    this.setState({
      error: {message: ''}}, () => {
      axios.post('http://localhost:9001/login', data).then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        window.location = "/main";
      }).catch((res) => {
        console.log(res);
        this.setState({error: res.response.data});
      });
    });


  }

  onFormChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return(
      <>
      <div className="row justify-content-center">
        <div className="col-4 mt-5">
          <div className="card">
            <div className="card-header text-white bg-dark">
              <h4>Login</h4>
            </div>
            <div className="card-body bg-secondary">
              {/* Login Form */}
              <form onSubmit={(e) => this.handleSubmit(e)} autoComplete="off">
                <input onChange={(e) => this.onFormChange(e)} className="form-control" name="email" type="text" placeholder="Email"/>
                <input onChange={(e) => this.onFormChange(e)} className="form-control mt-4 mb-3" name="password" type="password" placeholder="Password"/>
                {this.state.error.message ? <Alert variant="danger">{this.state.error.message}</Alert> : <></>}
                <button className="btn btn-primary float-right mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Login;
