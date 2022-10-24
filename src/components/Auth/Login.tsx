import React from 'react'
import { useActions } from '../../hooks/useActions'
import useInput from '../../hooks/useInput'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface ILoginProps {
    onToggle: () => void
}

export default function Login({onToggle}: ILoginProps) {
    const email = useInput()
    const password = useInput()
    const { loginUser, closeAuth } = useActions()
    const { error, loading, user } = useTypedSelector(state => state.auth)

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(email.value && password.value) {
            await loginUser(email.value, password.value)
                
            if (user.name) {
                closeAuth()
                document.body.style.overflow = 'auto'
            }
        }
    }
  return (
    <form className="mt-2" onSubmit={onSubmitHandler}>
        {error && <p className='text-danger'>{error}</p>}
        <div className="mb-2">
            <label htmlFor="email" className="visually-hidden">Email</label>
            <input type="text"
            className="form-control"
            id="email"
            placeholder="Email"
            {...email}/>
        </div>
        <div className="mb-2">
            <label htmlFor="password" className="visually-hidden">Password</label>
            <input type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...password}/>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Don't have an account? <span className='text-primary btn p-0' onClick={onToggle}>Registration</span></p>
            <div>
                {loading && 
                <div className="spinner-border spinner-border-sm me-3" role="status"></div>}
                <button type="submit" className="btn btn-primary mb-3" disabled={loading}>
                    Login
                </button>
            </div>
        </div>
    </form>
  )
}
