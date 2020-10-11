// combines all our states together from individual reducers
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// use this function to create root reducer object
export default combineReducers({
	user: userReducer,
	cart: cartReducer,
});
