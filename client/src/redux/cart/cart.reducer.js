import CartActionTypes from "./cart.types";
const INITIAL_STATE = {
	hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				// instead of passing a payload can just toggle boolean value
				hidden: !state.hidden,
			};
		default:
			return state;
	}
};

export default cartReducer;
