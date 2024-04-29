import * as lib from "../lib/lib";
import { setFilteredURL } from "./filters";

let user = null;

export async function getUser() {
  return user;
  
}

export async function setUser(newUser) {
  if(newUser === null) {
    user = null;
  } else{
    user = newUser;
  }
  
}