import { all, call } from 'redux-saga/effects';
import {mainAppSaga} from './main-app/mainAppSaga'
/* Shopify Saga */
import { mainShopifySaga } from './shopify/shopifySaga';
export function* rootSaga() {
  yield all([
    call(mainShopifySaga),
    call(mainAppSaga)
  ])
}