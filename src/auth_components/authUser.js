/**
 * @Date:   2020-02-04T18:05:09+00:00
 * @Last modified time: 2020-02-06T12:08:01+00:00
 */

// import axios from 'axios';
import $ from 'jquery';
// require("dotenv").config();


//function that can be inserted in React components to authorize any component with this function and optional callbacks for 401 and 200. Can act as a boolean
function authUser(callBackFail, callBackSucc){

  let truthiness = null;
  $.ajax({
    url: process.env.REACT_APP_BACKEND_URI + '/check',
    method: "POST",
    async: false,
    headers:{
      Authorization: localStorage.getItem("token")
    },
    success(e){
      // console.log(e);
      if(callBackSucc)callBackSucc();
      truthiness = true;
    },
    error(e){
      // console.log(e);
      if(callBackFail)callBackFail();
      truthiness = false;
    }
  });
  return truthiness;
}

export default authUser;
