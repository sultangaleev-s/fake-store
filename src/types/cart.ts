import { IProduct } from './models';

export interface ICartState {
    cart: IProduct[],
    visibleCart: boolean,
}

export  interface ICartGetAction {
    type: CartActionTypes.ADD_PRODUCT,
    payload: IProduct,
}

export  interface ICartRemoveAction {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: IProduct
}

export  interface ICartToggleAction {
    type: CartActionTypes.OPEN_CART | CartActionTypes.CLOSE_CART,
}

export  interface ICartRemoveAllAction {
    type: CartActionTypes.REMOVE_ALL,
}

export type CartAction = ICartGetAction | ICartToggleAction | ICartRemoveAction | ICartRemoveAllAction

export enum CartActionTypes {
    ADD_PRODUCT = "ADD_PRODUCT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    OPEN_CART = "OPEN_CART",
    CLOSE_CART = "CLOSE_CART",
    REMOVE_ALL = 'REMOVE_ALL',
}