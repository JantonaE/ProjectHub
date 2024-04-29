import * as lib from "../lib/lib";

let apiUrl = null;
let filter = null;


export function getFilteredURL() {
  return apiUrl;
}

export async function setFilteredURL(newUrl) {
  if(newUrl === null) {
    console.log("Cambiado a null");
    apiUrl = null;
  } else{
    console.log("Cambiado a "+newUrl);
    apiUrl = newUrl;
  }
  
}



export function getParentId() {
  return filter;
}

export async function setParentId(newFilter) {
  if(newFilter === null) {
    console.log("Cambiado a null");
    filter = null;
  } else{
    console.log("Cambiado a "+newFilter);
    filter = newFilter;
  }
  
}
