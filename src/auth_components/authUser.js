/**
 * @Date:   2020-02-04T18:05:09+00:00
 * @Last modified time: 2020-02-06T15:50:19+00:00
 */

import axios from 'axios';
import $ from 'jquery';


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
      if(callBackSucc)callBackSucc(e);
      truthiness = true;
    },
    error(e){
      // console.log(e);
      if(callBackFail)callBackFail(e);
      truthiness = false;
    }
  });

  // axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  // axios.post(process.env.REACT_APP_BACKEND_URI + '/check')
  // .then((e) => {
  //   if(callBackSucc)callBackSucc(e);
  //   truthiness = true;
  //   return truthiness;
  // }).catch((e) => {
  //   if(callBackFail)callBackFail(e);
  //   truthiness = false;
  //   return truthiness;
  // });

  return truthiness;
}

export default authUser;
