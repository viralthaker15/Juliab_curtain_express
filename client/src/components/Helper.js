export const queryString = query => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  return params.get(query);
}

export const setToken = () => {
  let token = queryString("token");
  if(token){
    window.sessionStorage.setItem("token", token);
  }
  return token;
}

export const getToken = () => {
  return window.sessionStorage.getItem("token");
}