export default function types(state, action){
    return {
        BOOKS_LOADED: {...state, books: action.payload},
        CART_LOADED: {...state, cart: action.payload},
        ADDED_TO_CART: {...state, cart: action.payload}
    }
}