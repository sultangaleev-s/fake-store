import { ICartState, CartAction, CartActionTypes } from "../../types/cart"

const defaultState: ICartState = {
    cart: [],
    visibleCart: false,
}
export const cartReducer = (state = defaultState, action: CartAction): ICartState => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return {...state, cart: [...state.cart, action.payload]}

        case CartActionTypes.REMOVE_PRODUCT:
            return {...state, cart: state.cart.filter(product => {
                if(product.id !== action.payload.id) return product
            })}
        
        case CartActionTypes.OPEN_CART:
            return {...state, visibleCart: true}
        
        case CartActionTypes.CLOSE_CART:
            return {...state, visibleCart: false}

        case CartActionTypes.REMOVE_ALL:
            return {...state, cart: []}

        default:
            return state
    }
}