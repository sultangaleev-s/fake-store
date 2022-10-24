import { IUser } from './models';

export interface IAuthState {
    isAuth: boolean;
    user: IUser;
    loading: boolean;
    error: string;
    visibleAuth: boolean;
}

export interface IAuthFetchAction {
    type: AuthActionTypes.FETCH_USER;
    payload: boolean;
}

export interface IAuthErrorAction {
    type: AuthActionTypes.ERROR;
    payload: string;
}

export interface IAuthGetAction {
    type: AuthActionTypes.GET_USER;
    payload: IUser;
}

export interface IAuthLoginAction {
    type: AuthActionTypes.LOGIN;
}

export interface IAuthLogoutAction {
    type: AuthActionTypes.LOGOUT;
}


export  interface IAuthChangeAction {
    type: AuthActionTypes.CHANGE_USER;
    payload: IUser;
}

export  interface IAuthOpenAction {
    type: AuthActionTypes.OPEN_AUTH;
}

export  interface IAuthCloseAction {
    type: AuthActionTypes.CLOSE_AUTH;
}

export type AuthAction = 
    IAuthGetAction 
    | IAuthLoginAction 
    | IAuthLogoutAction 
    | IAuthChangeAction 
    | IAuthFetchAction 
    | IAuthFetchAction 
    | IAuthErrorAction
    | IAuthOpenAction
    | IAuthCloseAction

export enum AuthActionTypes {
    GET_USER = "GET_USER",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    CHANGE_USER = "CHANGE_USER",
    FETCH_USER = "FETCH_USER",
    ERROR = "ERROR",
    OPEN_AUTH = 'OPEN_AUTH',
    CLOSE_AUTH = 'CLOSE_AUTH',
}