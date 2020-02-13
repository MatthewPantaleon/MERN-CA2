/**
 * @Date:   2020-02-11T18:30:44+00:00
 * @Last modified time: 2020-02-13T13:13:37+00:00
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
       company: {},
       existingGame: {}
     };
   }

   async componentDidMount(){
     // console.log(ApiLoader("games", false));
     let companyDetail = await ApiLoader("company/" + localStorage.getItem("company_id")).then((d) => d.data).catch((d) => {return {data: [], name: ""}});
     this.setState({company: companyDetail}, () => console.log(this.state.company));
   }


   render(){
     return (
       <>
        <div className="card" style={{border: "none"}}>
          <div className="card-header bg-dark text-white">
            <h5>Add Game</h5>
            <small>{this.state.company.name}</small>
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
