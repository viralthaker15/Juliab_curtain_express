import shopifyType from './shopifyType';

export const error = error => ({
  type: shopifyType.ERROR,
  payload: error
})
export const startSearch = query => ({
  type: shopifyType.START_SEARCH,
  payload: query
})

export const storeSearch = query => ({
  type: shopifyType.STORE_SEARCH,
  payload: query
})