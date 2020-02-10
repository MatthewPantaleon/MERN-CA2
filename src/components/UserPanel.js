/**
 * @Date:   2020-02-06T12:39:02+00:00
 * @Last modified time: 2020-02-10T17:35:08+00:00
 */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiLoader from './../ApiLoader';

class UserPanel extends Component{
  constructor(props){
    super(props);

    this.state = {
      games: [],
      genres: []
    };
  }

  componentDidMount(){
    //get genres for the drop down
  }

  render(){
    return(
      <>
        <div className="card" style={{border: "none"}}>
          <div className="card-header bg-dark" style={{borderRadius: 0}}>
            <button className="btn btn-primary">Store Page</button>
            <button className="btn btn-primary float-right">Add Game</button>
          </div>
          <div className="card-body bg-secondary p-1">

            {/* Search form function fir library */}
            <input className="form-control mt-3" type="text" placeholder="Saerch"/>

            {/* Search based on Genre*/}
            <select className="form-control mt-3">
              <option>rtet</option>
            </select>

          </div>
        </div>
      </>
    );
  }
}

export default UserPanel;
