/**
 * @Date:   2020-02-11T18:21:46+00:00
 * @Last modified time: 2020-02-14T21:00:22+00:00
 */


 import React, { Component, Fragment } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';

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

   deleteGame(e){
     this.props.deleteGame(e);
   }

   editGame(path, obj){
     if(obj){
       obj.edit = true;
     }
     this.props.editGame(path, obj);
   }

   viewGame(g){
     // console.log(g._id);
     this.props.viewGame("view", g);
   }

   render(){
     return (
       <>
        <div className="card" style={{border: "none"}}>
          <div className="card-header bg-dark">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <input type="text" className="form-control mb-3" placeholder="Search" onChange={(e) => this.searchChange(e)}/>
            </div>
            <div className="col-md-6 col-sm-12">
              <select className="form-control" onChange={(e) => this.genreChange(e)}>
                <option value="all">All Genres</option>
                {this.props.genres.map((e, i) => {
                  return(
                    <Fragment key={i}>
                      <option value={e._id}>{e.name}</option>
                    </Fragment>
                  );
                })}
                {this.props.companyName !== undefined ? <option value="company">{this.props.companyName}</option> : <></>}
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
                    <div className="row">

                      <div className="col-lg-4 col-sm-6 text-white" onClick={() => this.viewGame(e)}>
                        <b className="hoverName">{e.name}</b>
                      </div>
                      <div className="col-lg-2 col-sm-6 mb-4">
                        <b>€{e.price}</b>
                      </div>

                      <div className="col-lg-6 col-sm-8">
                        <div className="row">
                        <div className="col-md-4 col-sm-12">
                        {this.props.userGames.findIndex(g => g._id === e._id) < 0 ? <button className="btn-primary" onClick={() => this.props.addToLibrary(e)}>Add To Library</button> : <button className="btn-success"><b>In Library</b></button>}
                        </div>
                        <div className="col-md-4 col-sm-12">
                        {this.props.companyIds.includes(e._id) ? <button className="btn-warning" onClick={() => this.editGame("edit", e)}>Edit Game</button> : <></>}
                        </div>

                        <div className="col-md-4 col-sm-12">
                        {this.props.companyIds.includes(e._id) ? <button className="btn-danger" onClick={() => this.deleteGame(e)}>Delete Game</button> : <></>}
                        </div>
                        </div>
                      </div>

                    </div>
                  </div>
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
