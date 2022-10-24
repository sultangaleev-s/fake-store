import * as ProductActionCreators from './products'
import * as CategoriesActionCreators from './categories'
import * as CartActionCreators from './cart'
import * as AuthActionCreators from './auth'

export const ActionCreators = () => {
    return {
        ...ProductActionCreators,
        ...CategoriesActionCreators,
        ...CartActionCreators,
        ...AuthActionCreators,
    }
}