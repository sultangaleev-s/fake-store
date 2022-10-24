import { ProductsActionTypes, ProductAction } from "../../types/product"
import { Dispatch } from 'redux'
import axios from "axios"
 

export const fetchProducts = (offset = 0, limit = 20) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS})
            const response = await axios.get('https://api.escuelajs.co/api/v1/products', {
                params: {offset: offset, limit: limit}
            })
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'An error occurred while loading products'
                })
        }
    }
}
export const fetchCategoryProducts = (category: string | undefined) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductsActionTypes.SET_OFFSET_PAGE, payload: 0})
            dispatch({type: ProductsActionTypes.REMOVE_PRODUCTS})
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS})
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category}/products`)
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'An error occurred while loading products'
                })
        }
    }
}

export const fetchOneProducts = (productId: string | undefined) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductsActionTypes.REMOVE_PRODUCTS})
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS})
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`)
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: [response.data]})
        } catch (e) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'An error occurred while loading product'
                })
        }
    }
}

export const setOffsetPage = (value: number) => {
    return (dispatch: Dispatch<ProductAction>) => {
        dispatch({type: ProductsActionTypes.SET_OFFSET_PAGE, payload: value})
    }
}

export const setLimitPage = (limit: number) => {
    return (dispatch: Dispatch<ProductAction>) => {
        dispatch({type: ProductsActionTypes.SET_LIMIT_PAGE, payload: limit})
    }
}

export const removeProducts = () => {
    return (dispatch: Dispatch<ProductAction>) => {
        dispatch({type: ProductsActionTypes.REMOVE_PRODUCTS})
    }
}

export const sortedProducts = (sortValue: string) => {
    return (dispatch: Dispatch<ProductAction>) => {
        dispatch({type: ProductsActionTypes.SORTED_PRODUCTS, payload: sortValue})
    }
}