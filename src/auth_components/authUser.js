/**
 * @Date:   2020-02-04T18:05:09+00:00
 * @Last modified time: 2020-02-06T11:10:43+00:00
 */

import axios from 'axios';
// require("dotenv").config();


//function that can be inserted in React components to authorize any component with this function and optional callbacks for 401 and 200. Can act as a boolean
async function authUser(callBackFail, callBackSucc){

  let truthiness;
  console.log(process.env.REACT_APP_BACKEND_URI);
  axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");//assigns the header with the token
  truthiness = await axios.post(process.env.REACT_APP_BACKEND_URI + '/check').then((r) => {
    if(callBackSucc)callBackSucc();
    // return true;
    truthiness =  true;
  }).catch((r) => {
    console.log(r);
    if(callBackFail)callBackFail();
    return false;
    truthiness = false;
  });
  return truthiness;
}

export default authUser;
