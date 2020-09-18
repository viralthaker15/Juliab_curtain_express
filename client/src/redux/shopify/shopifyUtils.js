import { deleteToken } from '../../components/Helper';
export const shopifyAuth = res => {
  if (res.err) {
    deleteToken();
    return false;
  }
  return true;
}
export const graphProducts = data => {
  let productInfo = {
    nextPage: false,
    products: [],
    status: ''
  };
  try {
    data = data.data.products;
    productInfo.nextPage = data.pageInfo.hasNextPage;
    productInfo.products = data.edges.map(product => {
      let productObj = product.node;
      productObj.cursor = product.cursor;
      return productObj;
    })
  }
  catch (e) {
    productInfo.status = e.message;
  }
  productInfo.status = 0;
  return productInfo;
}