/**
 * @Date:   2020-02-04T15:59:03+00:00
 * @Last modified time: 2020-02-10T19:55:59+00:00
 */


 import React, { Component } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import authUser from '../auth_components/authUser';
 import ApiLoader from './../ApiLoader';

 import UserPanel from './UserPanel';
 import GamePanel from './GamePanel';

 class Main extends Component{
   constructor(props){
     super(props);
     this.state = {
       username: localStorage.getItem("username") || "ử̶̧̛͙̪͓̘̟͇̹̼͈̻͂͑̇͋̄̅͘s̴̫̥͍͎̘̙̪͙̪͎̏̈͐̃̔̿̑̌̐̄̔̄͘͝͝ͅe̴̟͇͎͓͖̝̺͓͛̀͒̈́̒̇r̴̹̻͕̣͎̲̲̰̈̇̇n̶̮̮̯̟̥̠̺̲̍́̈̍͒̅͑̈́̔ã̶͎̳̤͚͇͕͚̫̥̣͋̽̽́̐̆̋͒͋͛̚̚͝͠m̷͚̖͇͖̄e̴̡̧̝̦͗̐̉̌.̷̫͎̱͔̭̩̥̗̙̥̼͙̺̀́̇̌͌̍ͅ",
       games: []
     };
   }

   componentDidMount(){
     authUser(() => {
       alert("You are not Authorized!");
       window.location = "/login";
     }, () => {
       this.setState({games: ApiLoader("games", false)});
     });
   }

   render(){
     return(
       <>
        <div className="card mt-4">
          <div className="card-header bg-dark text-white">
            <h4>Hello, {this.state.username}</h4>
          </div>
          <div className="card-body bg-secondary">
            <div className="row">
              <div className="col-4">
                <UserPanel />
              </div>
              <div className="col-8">
                <GamePanel games={this.state.games}/>
              </div>
            </div>
          </div>
        </div>
       </>
     );
   }
 }

 export default Main;
