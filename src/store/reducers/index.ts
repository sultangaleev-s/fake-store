import { cartReducer } from './cartReducer'
import { productsReducer } from './productsReducer'
import { combineReducers } from 'redux'
import { categoriesReducer } from './categoriesReducer'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer,
    auth: authReducer,
})