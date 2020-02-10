/**
 * @Date:   2020-02-06T12:50:48+00:00
 * @Last modified time: 2020-02-10T19:55:27+00:00
 */

 import React, { Component, Fragment } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import ApiLoader from './../ApiLoader';

 class GamePanel extends Component{
   constructor(props){
     super(props);

     this.state = {
       games: []
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

          <div className="card-body bg-secondary">
          <ul>
            {this.props.games.map((e, i) => {
              return(
                <Fragment key={i}>
                  <li>{e.name}</li>
                </Fragment>
              );
            })}
            </ul>
          </div>
        </div>
       </>
     );
   }
 }

 export default GamePanel;
