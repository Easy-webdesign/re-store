import { bindActionCreators } from "redux";
import store from "../../store";
import { BOOKS_LOADED, CART_LOADED, ADDED_TO_CART} from "../reducers/main-reducer/var-types";


const {dispatch} = store


const actions = {
  booksLoaded: (newBooks) => ({ type: BOOKS_LOADED, payload: newBooks }),
  cartLoaded: (cart) => ({ type: CART_LOADED, payload: cart }),
  onAddedToCart: (cart) => ({ type: ADDED_TO_CART, payload: cart }),
  onDecrease: (id) => console.log('onDecrease', id),
  onIncrease: (id) => console.log('onIncrease', id),
  onDelete: (id) => console.log('onDelete', id),
};

export default bindActionCreators(actions, dispatch)
