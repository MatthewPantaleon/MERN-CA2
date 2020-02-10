/**
 * @Date:   2020-02-04T15:18:08+00:00
 * @Last modified time: 2020-02-10T19:39:51+00:00
 */

import axios from 'axios';
import $ from 'jquery';

//pass in the collection name, method and optional data and optional callbacks
export default function ApiLoader(collection, async){
  if(async === undefined){
    async = true;
  }

  let result = undefined;

  $.ajax({
    url: process.env.REACT_APP_BACKEND_URI + "/" + collection,
    method: "GET",
    async: async,
    success(r){
      result = r.gs;
    },
    error(r){
      result = r;
    }
  });

  return result;
}
