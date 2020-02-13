/**
 * @Date:   2020-02-04T15:59:03+00:00
 * @Last modified time: 2020-02-13T18:39:08+00:00
 */


 import React, { Component } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import authUser from '../auth_components/authUser';
 import ApiLoader from './../ApiLoader';
 import axios from 'axios';

 import UserPanel from './UserPanel';
 import GamePanel from './GamePanel';

 class Main extends Component{
   constructor(props){
     super(props);
     this.state = {
       username: localStorage.getItem("username") || "ử̶̧̛͙̪͓̘̟͇̹̼͈̻͂͑̇͋̄̅͘s̴̫̥͍͎̘̙̪͙̪͎̏̈͐̃̔̿̑̌̐̄̔̄͘͝͝ͅe̴̟͇͎͓͖̝̺͓͛̀͒̈́̒̇r̴̹̻͕̣͎̲̲̰̈̇̇n̶̮̮̯̟̥̠̺̲̍́̈̍͒̅͑̈́̔ã̶͎̳̤͚͇͕͚̫̥̣͋̽̽́̐̆̋͒͋͛̚̚͝͠m̷͚̖͇͖̄e̴̡̧̝̦͗̐̉̌.̷̫͎̱͔̭̩̥̗̙̥̼͙̺̀́̇̌͌̍ͅ",
       games: [],
       genres: [],
       companyGameIds: [],
       userLibraryGames: {games: []},
       companyName: "",
       storePage: true
     };
   }

   componentDidMount(){
     authUser((e) => {
       alert("You are Unauthorized!");
       window.location = "/login";
     }, async (e) => {
       // console.log(await ApiLoader("genres"));
       // console.log("I SHould be below");
       let genres = await ApiLoader("genres", "get").then((d) => {return d.data;});
       let games = await ApiLoader("games", "get").then((d) => {return d.data;});
       let companyDetail = await ApiLoader("company/" + localStorage.getItem("company_id"), "get").then((d) => d).catch((d) => {return {data: [], name: ""}});
       let companyName = companyDetail.data.name;
       let companyGameIds = companyDetail.data.games;
       let userLibraryGames = await ApiLoader("library/" + localStorage.getItem("library_id"), "get").then((d) => d.data);

       this.setState({
         genres,
         games,
         companyGameIds,
         userLibraryGames,
         companyName
       }, () => {
         console.log(this.state);
       });

     });
   }

   checkUserLibrarygames = async (newValue) => {
     let temp = this.state.userLibraryGames.games;
     // console.log(temp[0]._id);
     // console.log(newValue._id);

     // console.log(temp.findIndex(t => t._id == newValue._id));
     if(temp.findIndex(t => t._id == newValue._id) >= 0){
       alert(newValue.name + ", is already in your library!");
       return;
     }else{
       temp.push(newValue);
       this.setState({userLibraryGames: temp}, () => {
         console.log(this.state.userLibraryGames);
       });
       // console.log(await axios.post(process.env.REACT_APP_BACKEND_URI + "/library/" + newValue._id).then((d) => d.data));
       console.log(await ApiLoader("library/" + localStorage.getItem("library_id"), "post", {gameId: newValue._id}).then((d) => d.data));
       // this.setState({userLibraryGames: await axios.post(process.env.REACT_APP_BACKEND_URI + "/library/" + newValue._id).then((d) => d.data)});
     }


   };

   render(){
     return(
       <>
        <div className="card mt-4">
          <div className="card-header bg-dark text-white">
            <h4>Hello, {this.state.username}</h4>
            {this.state.companyName !== "" ? <h6>{this.state.companyName}</h6> : <></>}
          </div>
          <div className="card-body bg-secondary">
            <div className="row">
              <div className="col-4">
                <UserPanel
                  genres={this.state.genres}
                  games={this.state.userLibraryGames.games}
                  company={this.state.companyName}
                  companyIds={this.state.companyGameIds}
                  companyName={this.state.companyName}
                />
              </div>
              <div className="col-8">
                <GamePanel
                  games={this.state.games}
                  userGames={this.state.userLibraryGames.games}
                  genres={this.state.genres}
                  companyName={this.state.companyName}
                  companyIds={this.state.companyGameIds}
                  addToLibrary={this.checkUserLibrarygames}
                />
              </div>
            </div>
          </div>
        </div>
       </>
     );
   }
 }

 export default Main;
