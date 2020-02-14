/**
 * @Date:   2020-02-04T15:18:08+00:00
 * @Last modified time: 2020-02-14T20:40:12+00:00
 */

import axios from 'axios';

//pass in the collection name, method and optional data and optional callbacks
export default function ApiLoader(collection, method, data, auth){
  if(auth === undefined){
    auth = false;
  }
  if(method === undefined){
    let e = {message : "Invalid Method Or Something"};
    throw e.message;
  }

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  return axios[method](process.env.REACT_APP_BACKEND_URI + "/" + collection, data).then((r) => {
    return r.data;
  }).catch((r) => {
    return r;
  });

  // return result;
}
