/**
 * @Date:   2020-02-11T18:21:46+00:00
 * @Last modified time: 2020-02-11T19:04:23+00:00
 */


 import React, { Component, Fragment } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import authUser from '../auth_components/authUser';
 import ApiLoader from './../ApiLoader';

 class StorePanel extends Component{
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
            <div className="col-6">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <div className="col-6">
              <select className="form-control">
                <option value="none">Select Genre</option>
                {this.props.genres.map((e, i) => {
                  return(
                    <Fragment key={i}>
                      <option value={e._id}>{e.name}</option>
                    </Fragment>
                  );
                })}
                {this.props.companyName !== "" ? <option value="none">{this.props.companyName}</option> : <></>}
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

 export default StorePanel;
