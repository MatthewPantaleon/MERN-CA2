/**
 * @Date:   2020-02-06T12:50:48+00:00
 * @Last modified time: 2020-02-14T18:10:49+00:00
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
       switchPanel: "store",
       existingGame: {}
     };
   }

   componentDidMount(){
     // console.log(ApiLoader("games", false));

   }

   switchPanel = (e, obj) => {
     this.setState({switchPanel: e, existingGame: obj || {}}, () => console.log(this.state.existingGame));
   }




   render(){
     return (
       <>
        <div className="card" style={{border: "none"}}>
          <div className="card-header bg-dark">
            <button className="btn btn-primary" onClick={() => this.switchPanel("store")}>Store Page</button>
            {localStorage.getItem("company_id") !== "null" ? <button className="btn btn-primary float-right" onClick={() => this.switchPanel("add")}>Add Game</button> : <></>}
          </div>
        </div>
        {this.state.switchPanel == "store"  ? <StorePanel
          genres={this.props.genres}
          games={this.props.games}
          userGames={this.props.userGames}
          companyName={this.props.companyName}
          companyIds={this.props.companyIds}
          addToLibrary={this.props.addToLibrary}
          editGame={this.switchPanel}
          deleteGame={this.props.deleteGame}
          /> : <> </>}

          {this.state.switchPanel == "add" ? <FormPanel
          genres={this.props.genres}
          goBack={this.switchPanel}
          addNewGame={this.props.addNewGame}
          gameToEdit={{name: "", description: "", price: "", genres: null}}
          /> : <></>}

          {this.state.switchPanel == "edit" ? <FormPanel
          genres={this.props.genres}
          goBack={this.switchPanel}
          addNewGame={this.props.addNewGame}
          gameToEdit={this.state.existingGame}
          /> : <></>}
       </>
     );
   }
 }

 export default GamePanel;
