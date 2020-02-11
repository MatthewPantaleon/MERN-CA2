/**
 * @Date:   2020-02-06T12:50:48+00:00
 * @Last modified time: 2020-02-11T19:04:12+00:00
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

   switchPanel(){
     this.setState({switchPanel: !this.state.switchPanel});
   }


   render(){
     return (
       <>
       <button onClick={() => this.switchPanel()}>Switch</button>
        {this.state.switchPanel ? <StorePanel genres={this.props.genres} games={this.props.games} companyName={this.props.companyName}/> : <FormPanel />}
       </>
     );
   }
 }

 export default GamePanel;
