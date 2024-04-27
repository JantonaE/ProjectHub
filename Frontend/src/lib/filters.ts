import * as lib from "../lib/lib";

let apiUrl = null;
let filteredButton = null;

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


export function getFilteredButton() {
  return filteredButton;
}

export async function setFilteredButton(newButton) {
  console.log("hago href: "+newButton);
  filteredButton = newButton;
    
}