/**
 * @Date:   2020-02-04T12:31:47+00:00
 * @Last modified time: 2020-02-14T21:03:37+00:00
 */

import React, { Component } from 'react';
import axios from 'axios';
import {Alert} from 'react-bootstrap';
import authUser from './authUser';

class Register extends Component{

  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      company_id: '',
      error: {message: ''}
    };
  }


  componentDidMount(){
    authUser(undefined, () => {
      alert("You are already Logged in! Log out to Register Account");
      window.location = "/main";
    });
  }

  handleSubmit(e){
    e.preventDefault();

    let data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      company_id: this.state.company_id
    };

    this.setState({error: {message: ''}}, () => {
      axios.post((process.env.REACT_APP_BACKEND_URI || 'http://localhost:9001') + '/register', data).then((res) => {
        console.log(res);
        window.location = "/login";
      }).catch((res) => {
        // console.log(res);
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
        <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
          <div className="card">
            <div className="card-header text-white bg-dark">
              <h4>Register</h4>
            </div>
            <div className="card-body bg-secondary">
              {/* Login Form */}
              <form onSubmit={(e) => this.handleSubmit(e)} autoComplete="off">
                <input onChange={(e) => this.onFormChange(e)} className="form-control" name="username" type="text" placeholder="UserName"/>
                <input onChange={(e) => this.onFormChange(e)} className="form-control mt-4" name="email" type="text" placeholder="Email"/>
                <input onChange={(e) => this.onFormChange(e)} className="form-control mt-4" name="password" type="password" placeholder="Password"/>
                <hr />
                <input onChange={(e) => this.onFormChange(e)} className="form-control mt-4 mb-3" name="company_id" type="text" placeholder="Company ID (Optional)"/>
                {this.state.error.message ? <Alert variant="danger">{this.state.error.message}</Alert> : <></>}
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
