/**
 * @Date:   2020-02-11T18:30:44+00:00
 * @Last modified time: 2020-02-14T18:18:16+00:00
 */

 import React, { Component, Fragment } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import authUser from '../auth_components/authUser';
 import ApiLoader from './../ApiLoader';
 import { Alert } from 'react-bootstrap';

 class FormPanel extends Component{
   constructor(props){
     super(props);

     this.state = {
       games: [],
       company: {},
       name: "",
       description: "",
       price: "",
       genres: null,
       errors: {}
     };
   }

   async componentDidMount(){
     // console.log(ApiLoader("games", false));
     let companyDetail = await ApiLoader("company/" + localStorage.getItem("company_id"), "get").then((d) => d.data);
     this.setState({company: companyDetail});
   }

   async submitGame(e){
     e.preventDefault();
     // console.log(this.state.company);
     this.setState({errors: {}});
     let data = {
       companyId: this.state.company._id,
       newGame: {
         name: this.state.name || this.props.gameToEdit.name,
         description: this.state.description || this.props.gameToEdit.description,
         price: this.state.price || this.props.gameToEdit.price,
         genres: this.state.genres || this.props.gameToEdit.genres
       }
     };

     let newGame;

     if(this.props.gameToEdit.edit){
       newGame = await ApiLoader("games/" + this.props.gameToEdit._id, "put", data).then((d) => d.data).catch((d) => "what even");
       return;
     }else{
       newGame = await ApiLoader("games", "post", data).then((d) => d.data).catch((d) => "what even");//Catch Doesn't work !??!?!?!?!?!?
     }


     //Errors seem to resolve at then?!?!?
     // console.log(newGame);
     if(newGame.success){
       delete newGame.success;
       console.log(newGame);
       this.props.addNewGame(newGame.newGame, newGame.companyGames);
       this.props.goBack("store");
     }else{
       this.setState({errors: newGame}, () => console.log(this.state.errors));
     }
     // this.setState({errors: new});
   }

   changeData(e){
     if(e.target.name != "genres"){
       this.setState({[e.target.name]: e.target.value});
     }else{
       let values = [];
       for(let i = 0; i < e.target.options.length; i++){
         if(e.target.options[i].selected){
           values.push(e.target.options[i].value);
         }
       }
        this.setState({genres: values});
     }
   }


   render(){
     return (
       <>
        <div className="card" style={{border: "none"}}>
          <div className="card-header bg-dark text-white">
            <h5>Add Game</h5>
            <small>{this.state.company.name}</small>
          </div>
          <hr className="m-0 p-0" style={{border: "2px solid black"}}/>
          <div className="card-body bg-dark text-white">
          <form onSubmit={(e) => this.submitGame(e)}>
            <div className="form-group row">
              <div className="col-3"><label className="col-form-label" htmlFor="name">Name: </label></div>
              <div className="col-9"><input name="name" className="form-control" onChange={(e) => this.changeData(e)} autoComplete="off" value={this.props.gameToEdit.name}/></div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description">Game Description:</label>
              <textarea className="form-control" name="description" rows="5" onChange={(e) => this.changeData(e)} value={this.props.gameToEdit.description}></textarea>
            </div>
            <div className="form-group row">
              <div className="col-3"><label className="col-form-label" htmlFor="price">Price: </label></div>
              <div className="input-group mb-2 col-9">
                <div className="input-group-prepend">
                  <div className="input-group-text">€</div>
                </div>
                <input type="text" className="form-control" name="price" onChange={(e) => this.changeData(e)} value={this.props.gameToEdit.price} autoComplete="off"/>
              </div>
            </div>

            <div className="form-group">
                <label htmlFor="genres">Genres:</label>
                <select multiple className="form-control" name="genres" onChange={(e) => this.changeData(e)} defaultValue={this.props.gameToEdit.genres}>
                  {this.props.genres.map((e, i) => {
                    return(<option value={e._id} key={i}>{e.name}</option>);
                  })}
                </select>
              </div>
            {this.state.errors.name ? <Alert variant="danger">{this.state.errors.name.message}</Alert> : <> </>}
            {this.state.errors.price ? <Alert variant="danger">{this.state.errors.price.message}</Alert> : <></>}
            {this.state.errors.genres ? <Alert variant="danger">{this.state.errors.genres.message}</Alert> : <></>}
            <button className="btn btn-primary">Add New Game</button>
          </form>
          </div>
        </div>
       </>
     );
   }
 }

 export default FormPanel;
