export const queryString = query => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  return params.get(query);
}

export const setToken = () => {
  let token = queryString("token");
  if (token) {
    window.sessionStorage.setItem("token", token);
  }
  return token;
}
export const deleteToken = ()=>{
  window.sessionStorage.removeItem("token");
  window.location.href ='/';
}
export const getToken = () => {
  return window.sessionStorage.getItem("token");
}

export const getStoreUrl = () => {
  return process.env.REACT_STORE_NAME || 'https://juliab-staging.myshopify.com';
}

export const searchProduct = async (query) => {
  let store = getStoreUrl();
  let products = [];
  let resData =  await fetch(`${store}/search/suggest.json?q=${query}&resources[type]=product`);
  resData = await resData.json();
  products = resData;
  return products;
}