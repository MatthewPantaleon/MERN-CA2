/**
 * @Date:   2020-02-14T19:48:59+00:00
 * @Last modified time: 2020-02-14T20:43:55+00:00
 */

 import React, { Component, Fragment } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';

 class ViewPanel extends Component{
   constructor(props){
     super(props);
     this.state = {};
   }

   componentDidMount(){
     this.props.game.edit = "edit";
     // console.log(this.props.game);
   }

   render(){
     return(
       <>
         <div className="card" style={{border: "none"}}>

         <div className="card-header bg-dark text-white">
          <h4>{this.props.game.name}</h4>
         </div>
         <hr className="m-0 p-0" style={{border: "2px solid black"}}/>
         <div className="card-body bg-dark text-white">
          <b>Description:</b>
          <p>{this.props.game.description}</p>
          <b className="mt-4"> Genres</b>
          <div className="row mt-2 mb-5">
            {this.props.genres.filter((g, i) => {
              return this.props.game.genres.includes(g._id);
            }).map((g, i) => {
              return (
                <Fragment key={i}>
                  <div className="col-6">
                    <b>{g.name}</b>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <p>Price: €{this.props.game.price}</p>
          <div className="row">
            <div className="col-4">
            {this.props.userGames.findIndex(g => g._id === this.props.game._id) < 0 ? <button className="btn-primary" onClick={() => this.props.addToLibrary(this.props.game)}>Add To Library</button> : <button className="btn-success"><b>Game Already In Library</b></button>}
            </div>
            <div className="col-4">
            {this.props.companyIds.includes(this.props.game._id) ? <button className="btn-warning" onClick={() => this.props.editGame("edit", this.props.game)}>Edit Game</button> : <></>}
            </div>

            <div className="col-4">
            {this.props.companyIds.includes(this.props.game._id) ? <button className="btn-danger" onClick={() => {this.props.deleteGame(this.props.game); this.props.goBack("store")}}>Delete Game</button> : <></>}
            </div>
          </div>
         </div>
         </div>
       </>
     );
   }
 }

 export default ViewPanel;
