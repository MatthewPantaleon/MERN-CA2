/**
 * @Date:   2020-02-06T12:39:02+00:00
 * @Last modified time: 2020-02-13T16:34:29+00:00
 */

import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiLoader from './../ApiLoader';

class UserPanel extends Component{
  constructor(props){
    super(props);

    this.state = {
      games: [],
      genres: [],
    };
  }

  componentDidMount(){

  }



  render(){

    return(
      <>
        <div className="card" style={{border: "none"}}>
          <div className="card-body bg-dark p-1">

            {/* Search form function fir library */}
            <input className="form-control mt-3" type="text" placeholder="Search" disabled={this.props.games.length == 0} />

            {/* Search based on Genre*/}
            <select className="form-control mt-3" disabled={this.props.games.length == 0}>
              <option value="none">All Genres</option>
              {this.props.genres.map((e, i) => {
                return (
                <Fragment key={i}>
                  <option value={e._id}>{e.name}</option>
                </Fragment>
                );
              })}
            </select>

            <hr className="m-0 p-0 mt-3 mb-3" style={{border: "2px solid black"}}/>
            {this.props.games.length > 0 ? this.props.games.map((e, i) => {
              return(
                <Fragment key={i}>
                  <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
                  {e.name}
                  <button className="btn-danger float-right">X</button>
                  {this.props.companyIds.includes(e._id) ? <button className="btn-warning float-right">Edit Game</button> : <></>}
                  </a>
                </Fragment>
              );
            }) :
            <ul className="lit-group p-0">
              <li className="list-group-item list-group-item-action bg-dark text-white">No Games in your Library</li>
            </ul>
            }

          </div>
        </div>
      </>
    );
  }
}

export default UserPanel;
