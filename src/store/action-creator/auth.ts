import { AuthActionTypes, AuthAction } from "../../types/auth"
import { Dispatch } from 'redux'
import axios from "axios"

export const registrationUser = (name:string, email:string, password:string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.FETCH_USER, payload: true})
            const response = await axios.post('https://api.escuelajs.co/api/v1/users/', 
                {
                    name: name,
                    email: email,
                    password: password,
                    avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            })
            dispatch({type: AuthActionTypes.FETCH_USER, payload: false})
        } catch (e) {
            dispatch({
                type: AuthActionTypes.ERROR,
                payload: 'Error, please try again.'
                })
        }
    }
}


export const loginUser = ( email:string, password:string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.FETCH_USER, payload: true})
            const responseToken = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: email,
                password: password
            })
            localStorage.setItem('token', responseToken.data.access_token)

            try {
                const responseProfile = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                          }
                    })
                    dispatch({type: AuthActionTypes.GET_USER, payload: responseProfile.data})
            } catch (e) {
                dispatch({type: AuthActionTypes.ERROR,
                    payload: 'Error, please try again.' })
            }
        } catch (e) {
            dispatch({type: AuthActionTypes.ERROR,
                payload: 'Error, please check email and password.' })
        }
    }
}

export const getUser =  () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.FETCH_USER, payload: true})
            const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                  }
            })
            dispatch({type: AuthActionTypes.FETCH_USER, payload: false})
            dispatch({type: AuthActionTypes.GET_USER, payload: response.data})
        } catch (e) {
            dispatch({type: AuthActionTypes.FETCH_USER, payload: false})
        }
    }
}

export const openAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
            dispatch({type: AuthActionTypes.OPEN_AUTH})
    }
}

export const closeAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
            dispatch({type: AuthActionTypes.CLOSE_AUTH})
    }
}

export const logoutUser = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
            localStorage.removeItem('token')
            dispatch({type: AuthActionTypes.LOGOUT})
    }
}
