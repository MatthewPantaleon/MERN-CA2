/**
 * @Date:   2020-02-06T12:39:02+00:00
 * @Last modified time: 2020-02-14T21:01:26+00:00
 */

import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserPanel extends Component{
  constructor(props){
    super(props);

    this.state = {
      games: [],
      genres: [],
      term: '',
      genreId: "all"
    };
  }

  componentDidMount(){

  }

  searchChange(e){
    let term = e.target.value;
    this.setState({term});
  }

  genreChange(e){
    let genreId = e.target.value;
    this.setState({genreId});
  }

  render(){

    return(
      <>
        <div className="card" style={{border: "none"}}>
          <div className="card-body bg-dark p-1">

            {/* Search form function for library */}
            <div className="col">
            <input className="form-control mt-3" type="text" placeholder="Search" disabled={this.props.games.length === 0} onChange={(e) => this.searchChange(e)}/>
            </div>
            {/* Search based on Genre*/}
            <div className="col">
            <select className="form-control mt-3" disabled={this.props.games.length === 0} onChange={(e) => this.genreChange(e)}>
              <option value="all">All Genres</option>
              {this.props.genres.map((e, i) => {
                return (
                <Fragment key={i}>
                  <option value={e._id}>{e.name}</option>
                </Fragment>
                );
              })}
              {this.props.companyName !== undefined ? <option value="company">{this.props.companyName}</option> : <></>}
            </select>
            </div>

            <hr className="m-0 p-0 mt-3 mb-3" style={{border: "2px solid black"}}/>
            {this.props.games.length > 0 ? this.props.games.filter((e, i) => {
              //if genres is also filtered
                if(this.state.genreId === "all"){
                  return e.name.toLowerCase().includes(this.state.term.toLowerCase());
                }else if(this.state.genreId === "company"){
                  return e.name.toLowerCase().includes(this.state.term.toLowerCase()) && this.props.companyIds.includes(e._id);
                }
                return e.name.toLowerCase().includes(this.state.term.toLowerCase()) && e.genres.includes(this.state.genreId);
              }).map((e, i) => {
              return(
                <Fragment key={i}>
                  <div className="list-group-item list-group-item-action bg-secondary text-white">
                  {e.name}
                  <button className="btn-danger float-right" onClick={() => this.props.removeGame(e._id)}>X</button>
                  {this.props.companyIds.includes(e._id) ? <small className="float-right mr-2">{this.props.companyName}</small> : <></>}
                  </div>
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
