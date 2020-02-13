/**
 * @Date:   2020-02-11T18:21:46+00:00
 * @Last modified time: 2020-02-13T16:23:08+00:00
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
       term: "",
       genreId: "all"
     };
   }

   componentDidMount(){
     // console.log(ApiLoader("games", false));

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
     return (
       <>
        <div className="card" style={{border: "none"}}>
          <div className="card-header bg-dark">
          <div className="row">
            <div className="col-6">
              <input type="text" className="form-control" placeholder="Search" onChange={(e) => this.searchChange(e)}/>
            </div>
            <div className="col-6">
              <select className="form-control" onChange={(e) => this.genreChange(e)}>
                <option value="all">Select Genre</option>
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
            {this.props.games.filter((e, i) => {
              //if genres is also filtered
              if(this.state.genreId == "all"){
                return e.name.toLowerCase().includes(this.state.term.toLowerCase());
              }
              return e.name.toLowerCase().includes(this.state.term.toLowerCase()) && e.genres.includes(this.state.genreId);
            }).map((e, i) => {
              return(
                <Fragment key={i}>
                  <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
                  {e.name}
                  <button className="btn-primary float-right ml-3">Add to Library</button>
                  {this.props.companyIds.includes(e._id) ? <button className="btn-warning float-right">Edit Game</button> : <></>}
                  {this.props.companyIds.includes(e._id) ? <button className="btn-danger float-right">Delete Game</button> : <></>}
                  </a>
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
