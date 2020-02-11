/**
 * @Date:   2020-02-06T12:50:48+00:00
 * @Last modified time: 2020-02-11T09:29:02+00:00
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
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <div className="col-6">
              <select className="form-control">
                {this.props.genres.map((e, i) => {
                  return(
                    <Fragment key={i}>
                      <option value={e._id}>{e.name}</option>
                    </Fragment>
                  );
                })}
              </select>
            </div>
          </div>
          </div>
          <hr className="m-0 p-0" style={{border: "2px solid black"}}/>
          <div className="card-body bg-dark">
          {/*Show list of games*/}
          <ul className="list-group ">
            {this.props.games.map((e, i) => {
              return(
                <Fragment key={i}>
                  <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">{e.name}</a>
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
