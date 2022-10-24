import { AuthActionTypes, AuthAction, IAuthState } from "../../types/auth"

const defaultState: IAuthState = {
    isAuth: false,
    user: {
        email: '',
        name: '',
        password: '',
        id: 0,
        role: '',
    },
    loading: false,
    error: '',
    visibleAuth: false,
}

export const authReducer = (state = defaultState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case AuthActionTypes.GET_USER:
            return {...state, isAuth: true, user: action.payload, error: '', loading: false }

        case AuthActionTypes.OPEN_AUTH:
            return {...state, visibleAuth: true}

        case AuthActionTypes.CLOSE_AUTH:
            return {...state, visibleAuth: false}
        
        case AuthActionTypes.ERROR:
            return {...state, error: action.payload, loading: false}
        
        case AuthActionTypes.FETCH_USER:
            return {...state, loading: action.payload}

        case AuthActionTypes.LOGOUT:
            return {...state, isAuth: false, user: defaultState.user}

        default:
            return state
    }
}