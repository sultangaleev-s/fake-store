import { ICategory } from './models';

export interface ICategoriesState {
    categories: ICategory[];
    loading: boolean;
    error: null | string;
  }
export type CategoriesAction =
      IFetchCategoriesAction
    | IFetchCategoriesSuccessAction
    | IFetchCategoriesErrorAction

export interface IFetchCategoriesAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES;
}

export interface IFetchCategoriesSuccessAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS;
    payload: ICategory[];
}

export interface IFetchCategoriesErrorAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR;
    payload: string;
}


export enum CategoriesActionTypes {
    FETCH_CATEGORIES = "FETCH_CATEGORIES",
    FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
}