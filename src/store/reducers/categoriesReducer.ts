import { CategoriesAction, ICategoriesState, CategoriesActionTypes } from "../../types/categories"

const defaultState: ICategoriesState = {
    categories: [],
    loading: false,
    error: null,
}

export const categoriesReducer = (state = defaultState, action:CategoriesAction): ICategoriesState => {
    switch (action.type) {
        case CategoriesActionTypes.FETCH_CATEGORIES:
            return {...state, loading: true, error: null,}

        case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
            return {...state, loading: false, categories: action.payload}

        case CategoriesActionTypes.FETCH_CATEGORIES_ERROR:
            return {...state, loading: false, error: action.payload}

        default:
            return state
    }
}