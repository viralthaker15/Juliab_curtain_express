import { takeLatest, put, all, call } from 'redux-saga/effects';
import mainAppTypes from './mainAppTypes';
import { hideToaster } from './mainAppAction';

import { getAppUrl } from '../../API/shopInstall';


function* hideToasterAction() {
  yield setTimeout(2000, () => {
    put(hideToaster());
  });
}
export function* hideToasterSaga() {
  yield takeLatest(
    mainAppTypes.SET_TOASTER_MSG,
    hideToasterAction
  )
}

/* Store Install */

function* shopInstallAction(action) {
  yield window.location.href = `${getAppUrl()}/store_installation?shop=${action.payload}`;
}
export function* shopInstall() {
  
  yield takeLatest(
    mainAppTypes.SHOP_INSTALL_START,
    shopInstallAction
  )
}

export function* mainAppSaga() {
  yield all([
    call(shopInstall),
    call(hideToasterSaga),
  ]);
}
