/**
 * @Date:   2020-02-11T18:30:44+00:00
 * @Last modified time: 2020-02-11T18:56:18+00:00
 */

 import React, { Component, Fragment } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import authUser from '../auth_components/authUser';
 import ApiLoader from './../ApiLoader';

 class FormPanel extends Component{
   constructor(props){
     super(props);

     this.state = {
       games: [],

     };
   }

   componentDidMount(){
     // console.log(ApiLoader("games", false));

   }


   render(){
     return (
       <>
        <div className="card" style={{border: "none"}}>
          <div className="card-header bg-dark">
            <div className="row">
              
            </div>
          </div>
          <hr className="m-0 p-0" style={{border: "2px solid black"}}/>
          <div className="card-body bg-dark">

          </div>
        </div>
       </>
     );
   }
 }

 export default FormPanel;
