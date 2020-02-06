/**
 * @Date:   2020-02-04T18:05:09+00:00
 * @Last modified time: 2020-02-06T10:45:08+00:00
 */

import axios from 'axios';


//function that can be inserted in React components to authorize any component with this function and optional callbacks for 401 and 200. Can act as a boolean
async function authUser(callBackFail, callBackSucc){

  let truthiness;

  axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");//assigns the header with the token
  truthiness = await axios.post('http://localhost:9001/check').then((r) => {
    if(callBackSucc)callBackSucc();
    return true;
    // truthiness =  true;
  }).catch((r) => {
    console.log(r);
    if(callBackFail)callBackFail();
    return false;
    // truthiness = false;
  });
  // return truthiness;
}

export default authUser;
