import { IProduct } from './models';

export interface IProductsState {
    products: IProduct[];
    loading: boolean;
    error: null | string;
    offset: number;
    limit: number;
  }
export type ProductAction =
      IFetchProductsAction
    | IFetchProductsSuccessAction
    | IFetchProductsErrorAction
    | ISetOffsetPage
    | ISetLimitPage
    | IRemoveProducts
    | ISortedProducts

export interface IFetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS;
}

export interface IFetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: IProduct[];
}

export interface IFetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}

export interface ISetOffsetPage {
    type: ProductsActionTypes.SET_OFFSET_PAGE;
    payload: number;
}

export interface ISetLimitPage {
    type: ProductsActionTypes.SET_LIMIT_PAGE;
    payload: number;
}

export interface IRemoveProducts {
    type: ProductsActionTypes.REMOVE_PRODUCTS;
}

export interface ISortedProducts {
    type: ProductsActionTypes.SORTED_PRODUCTS;
    payload: string;
}


export enum ProductsActionTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    SET_OFFSET_PAGE = 'SET_OFFSET_PAGE',
    SET_LIMIT_PAGE = 'SET_LIMIT_PAGE',
    REMOVE_PRODUCTS = 'REMOVE_PRODUCTS',
    SORTED_PRODUCTS = 'SORTED_PRODUCTS',
}