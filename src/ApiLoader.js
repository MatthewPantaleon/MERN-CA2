/**
 * @Date:   2020-02-04T15:18:08+00:00
 * @Last modified time: 2020-02-13T16:52:14+00:00
 */

import axios from 'axios';
import $ from 'jquery';

//pass in the collection name, method and optional data and optional callbacks
export default async function ApiLoader(collection, method, auth){
  if(auth === undefined){
    auth = false;
  }

  let result = [];

  // $.ajax({
  //   url: process.env.REACT_APP_BACKEND_URI + "/" + collection,
  //   method: "GET",
  //   async: auth,
  //   success(r){
  //     result = r.data;
  //   },
  //   error(r){
  //     result = r;
  //   }
  // });

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  result = await axios[method](process.env.REACT_APP_BACKEND_URI + "/" + collection).then((r) => {
    return r.data;
  }).catch((r) => {
    return r;
  });
  // console.log(result.data);
  // return result.data;
  //
  return result;
}
