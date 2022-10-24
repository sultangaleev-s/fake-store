import { CategoriesActionTypes, CategoriesAction } from "../../types/categories"
import { Dispatch } from 'redux'
import axios from "axios"
 

export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoriesAction>) => {
        try {
            dispatch({type: CategoriesActionTypes.FETCH_CATEGORIES})
            const response = await axios.get('https://api.escuelajs.co/api/v1/categories')
            dispatch({type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR,
                payload: 'An error occurred while loading categories'
                })
        }
    }
}
