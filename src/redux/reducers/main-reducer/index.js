import types from "./types";

const initialState = {
    books: [],
    cart: {
        cartItems: [],
        total: 0
    }
}

export default function mainReducer(state = initialState, action){

    return types(state, action)[action.type] || state;
}

 