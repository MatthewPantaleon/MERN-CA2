/**
 * @Date:   2020-02-14T19:48:59+00:00
 * @Last modified time: 2020-02-14T19:54:55+00:00
 */

 import React, { Component, Fragment } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';

 class ViewPanel extends Component{
   constructor(props){
     super(props);
     this.state = {};
   }

   componentDidMount(){
     // console.log(this.props.game);
   }

   render(){
     return(
       <>
         <div className="card" style={{border: "none"}}>

         <div className="card-header bg-dark text-white">
          <h4>{this.props.game.name}</h4>
         </div>
         <div className="card-body">
         
         </div>
         </div>
       </>
     );
   }
 }

 export default ViewPanel;
