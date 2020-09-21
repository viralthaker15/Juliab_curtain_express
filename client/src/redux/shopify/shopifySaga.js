import { takeLatest, put, all, call } from 'redux-saga/effects';
import shopifyType from './shopifyType';
import { storeSearch } from './shopifyAction';
import { setToaster } from '../main-app/mainAppAction';
import shopify from '../../API/shopify';
import { shopifyAuth,graphProducts } from './shopifyUtils';
import { getToken } from '../../components/Helper';

function* searchProductAction(action) {
  let query = action.payload;
  let res;
  try {
    res = yield shopify('/search?q=' + query, { headers: { token: getToken() } });
    res = res.data;
  yield call(shopifyAuth,res);
  let products = yield call(graphProducts,res);
    yield put(storeSearch(products));
  }
  catch (e) {
    yield put(setToaster(e.message));
  }
}
export function* searchProduct() {

  yield takeLatest(
    shopifyType.START_SEARCH,
    searchProductAction
  )
}

export function* mainShopifySaga() {
  yield all([
    call(searchProduct),
  ]);
}
