/**
 * @Date:   2020-02-06T12:50:48+00:00
 * @Last modified time: 2020-02-10T18:09:36+00:00
 */

 import React, { Component } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';

 class GamePanel extends Component{
   constructor(props){
     super(props);

     this.state = {};
   }

   componentDidMount(){
     
   }


   render(){
     return (
       <>
        <div className="card" style={{border: "none"}}>
          <div className="card-header bg-dark">
          <div className="row">
            <div className="col-6">
              <input type="text" className="form-control" />
            </div>
            <div className="col-6">
              <select className="form-control">
                <option>treh</option>
              </select>
            </div>
          </div>
          </div>
        </div>
       </>
     );
   }
 }

 export default GamePanel;
