/**
 * @Date:   2020-02-11T18:30:44+00:00
 * @Last modified time: 2020-02-14T15:36:54+00:00
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
       existingGame: {},
       name: "",
       description: "",
       price: "",
       genres: [],
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
     let data = {
       companyId: this.state.company._id,
       newGame: {
         name: this.state.name,
         description: this.state.description,
         price: this.state.price,
         genres: this.state.genres
       }
     };
     console.log(data);
     let newGame = await ApiLoader("games", "post", data).then((d) => d.data).catch((d) => "what even");//Catch Doesn't work !??!?!?!?!?!?
     //Errors seem to resolve at then?!?!?
     console.log(newGame);
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
              <div className="col-9"><input name="name" className="form-control" onChange={(e) => this.changeData(e)} autoComplete="off"/></div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description">Game Description:</label>
              <textarea className="form-control" name="description" rows="5" onChange={(e) => this.changeData(e)}></textarea>
            </div>
            <div className="form-group row">
              <div className="col-3"><label className="col-form-label" htmlFor="price">Price: </label></div>
              <div className="input-group mb-2 col-9">
                <div className="input-group-prepend">
                  <div className="input-group-text">€</div>
                </div>
                <input type="text" className="form-control" name="price" onChange={(e) => this.changeData(e)} autoComplete="off"/>
              </div>
            </div>

            <div className="form-group">
                <label htmlFor="genres">Genres:</label>
                <select multiple className="form-control" name="genres" onChange={(e) => this.changeData(e)}>
                  {this.props.genres.map((e, i) => {
                    return(<option value={e._id} key={i}>{e.name}</option>);
                  })}
                </select>
              </div>
            {<Alert variant="danger">Test</Alert>}
            <button className="btn btn-primary">Add New Game</button>
          </form>
          </div>
        </div>
       </>
     );
   }
 }

 export default FormPanel;
