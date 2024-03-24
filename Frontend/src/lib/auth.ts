import * as lib from "../lib/lib";

let user = null;

export function getUser() {
  return user;
}

export async function setUser(newUser) {
  if(newUser === null) {
    user = null;
  } else{
    user = newUser;
  }
  
}