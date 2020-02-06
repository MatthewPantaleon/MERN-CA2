/**
 * @Date:   2020-02-04T15:59:03+00:00
 * @Last modified time: 2020-02-05T20:12:50+00:00
 */


 import React, { Component } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import authUser from '../auth_components/authUser';

 class Main extends Component{
   constructor(props){
     super(props);
     this.state = {};

   }

   componentDidMount(){
     authUser(() => {
       alert("You are not Authorized!");
       window.location = "/login";
     });
   }

   render(){
     return(
       <>
        <p>Guhrguergugruhrgujhrg</p>
       </>
     );
   }
 }

 export default Main;
