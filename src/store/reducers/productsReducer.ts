import { ProductAction, IProductsState, ProductsActionTypes } from "../../types/product"

const defaultState: IProductsState = {
    products: [],
    loading: false,
    error: null,
    offset: 0,
    limit: 20,
}

export const productsReducer = (state = defaultState, action: ProductAction): IProductsState => {
    switch (action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS:
            return {...state, loading: true, error: null,}

        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {...state, loading: false, products: [...state.products, ...action.payload]}

        case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
            return {...state, loading: false, error: action.payload}

        case ProductsActionTypes.SET_OFFSET_PAGE:
            return {...state, offset: action.payload}

        case ProductsActionTypes.SET_LIMIT_PAGE:
            return {...state, limit: action.payload}

        case ProductsActionTypes.REMOVE_PRODUCTS:
            return {...state, products: []}

        case ProductsActionTypes.SORTED_PRODUCTS:
            if (typeof state.products[0][action.payload] === 'number') {
                return {...state, products: [...state.products].sort((a, b) => a[action.payload] - (b[action.payload]))}
            } else {
                return {...state, products: [...state.products].sort((a, b) => a[action.payload].localeCompare(b[action.payload]))}
            }

        default:
            return state
    }
}