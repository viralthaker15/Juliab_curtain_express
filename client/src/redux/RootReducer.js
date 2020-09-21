import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import mainAppReducer from "./main-app/mainAppReducer";
import shopifyReducer from './shopify/shopifyReducer';

const presistConfig = {
  key: "root",
  storage,
  whitelist: [],
};
const rootReducer = combineReducers({
  appMain: mainAppReducer,
  shopify:shopifyReducer
});
export default persistReducer(presistConfig, rootReducer);
