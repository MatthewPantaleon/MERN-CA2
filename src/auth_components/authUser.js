/**
 * @Date:   2020-02-04T18:05:09+00:00
 * @Last modified time: 2020-02-14T20:36:26+00:00
 */

import axios from 'axios';


//function that can be inserted in React components to authorize any component with this function and optional callbacks for 401 and 200. Can act as a boolean
async function authUser(callBackFail, callBackSucc){

  let truthiness = false;
  // $.ajax({
  //   url: process.env.REACT_APP_BACKEND_URI + '/check',
  //   method: "POST",
  //   async: false,
  //   headers:{
  //     Authorization: localStorage.getItem("token")
  //   },
  //   success(e){
  //     // console.log(e);
  //     if(callBackSucc)callBackSucc(e);
  //     truthiness = true;
  //   },
  //   error(e){
  //     // console.log(e);
  //     if(callBackFail)callBackFail(e);
  //     truthiness = false;
  //   }
  // });
  // return truthiness;
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    // let headers = {
    //   headers: {
    //     Authorization: localStorage.getItem('token')
    //   }
    // };
    // console.log(localStorage.getItem('token'));
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    truthiness = await axios.post((process.env.REACT_APP_BACKEND_URI || 'http://localhost:9001') + '/check')
    .then((e) => {
      if(callBackSucc)callBackSucc(e);
      return true;
    }).catch((e) => {
      if(callBackFail)callBackFail(e);
      return false;
    });

    return truthiness;

}

export default authUser;
