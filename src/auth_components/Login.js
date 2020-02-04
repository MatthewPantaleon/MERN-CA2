/**
 * @Date:   2020-01-28T11:28:50+00:00
 * @Last modified time: 2020-02-04T13:19:10+00:00
 */

import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

class Login extends Component{

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("reh");
    console.log(e.target);
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
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <input className="form-control" name="email" type="text" placeholder="Email"/>
                <input className="form-control mt-4" name="password" type="password" placeholder="Password"/>
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
