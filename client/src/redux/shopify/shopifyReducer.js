import shopifyType from './shopifyType';

const INITIAL_VALUE = {
  searchProducts:{products:[]}
}
const shopifyReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case shopifyType.STORE_SEARCH:
      return {
        ...state,
        searchProducts:action.payload
      }
    default:
      return state
  }
}
export default shopifyReducer;