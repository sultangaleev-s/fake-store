import { CartActionTypes, CartAction } from "../../types/cart"
import { Dispatch } from 'redux'
import { IProduct } from "../../types/models"
 
export const addOnCart = (product: IProduct) => {
    return (dispatch: Dispatch<CartAction>) => {
            dispatch({type: CartActionTypes.ADD_PRODUCT, payload: product})
            }
}

export const removeOnCart = (product: IProduct) => {
    return (dispatch: Dispatch<CartAction>) => {
            dispatch({type: CartActionTypes.REMOVE_PRODUCT, payload: product})
            }
}

export const removeAll = () => {
    return (dispatch: Dispatch<CartAction>) => {
            dispatch({type: CartActionTypes.REMOVE_ALL})
            }
}

export const openCart = () => {
    return (dispatch: Dispatch<CartAction>) => {
            dispatch({type: CartActionTypes.OPEN_CART})
            }
}

export const closeCart = () => {
    return (dispatch: Dispatch<CartAction>) => {
            dispatch({type: CartActionTypes.CLOSE_CART})
            }
}