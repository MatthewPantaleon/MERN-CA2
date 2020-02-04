/**
 * @Date:   2020-02-04T12:31:47+00:00
 * @Last modified time: 2020-02-04T13:20:01+00:00
 */

import React, { Component } from 'react';

class Register extends Component{

  render(){
    return(
      <>
      <div className="row justify-content-center">
        <div className="col-4 mt-5">
          <div className="card">
            <div className="card-header text-white bg-dark">
              <h4>Register</h4>
            </div>
            <div className="card-body bg-secondary">
              {/* Login Form */}
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <input className="form-control" name="username" type="text" placeholder="UserName"/>
                <input className="form-control mt-4" name="email" type="text" placeholder="Email"/>
                <input className="form-control mt-4" name="password" type="password" placeholder="Password"/>
                <button className="btn btn-primary float-right mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}


export default Register;
