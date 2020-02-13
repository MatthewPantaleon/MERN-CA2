/**
 * @Date:   2020-02-06T12:50:48+00:00
 * @Last modified time: 2020-02-13T18:35:30+00:00
 */

 import React, { Component, Fragment } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import ApiLoader from './../ApiLoader';
 import StorePanel from './StorePanel';
 import FormPanel from './FormPanel';

 class GamePanel extends Component{
   constructor(props){
     super(props);

     this.state = {
       games: [],
       switchPanel: true
     };
   }

   componentDidMount(){
     // console.log(ApiLoader("games", false));

   }

   switchPanel(e){
     this.setState({switchPanel: e});
   }


   render(){
     return (
       <>
        <div className="card" style={{border: "none"}}>
          <div className="card-header bg-dark">
            <button className="btn btn-primary" onClick={() => this.switchPanel(true)}>Store Page</button>
            {localStorage.getItem("company_id") !== "null" ? <button className="btn btn-primary float-right" onClick={() => this.switchPanel(false)}>Add Game</button> : <></>}
          </div>
        </div>
        {this.state.switchPanel  ? <StorePanel
          genres={this.props.genres}
          games={this.props.games}
          userGames={this.props.userGames}
          companyName={this.props.companyName}
          companyIds={this.props.companyIds}
          addToLibrary={this.props.addToLibrary}
        /> : <FormPanel />}
       </>
     );
   }
 }

 export default GamePanel;
