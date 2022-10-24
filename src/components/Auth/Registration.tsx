import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import useInput from '../../hooks/useInput'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface IRegistrationProps {
    onClick: () => void
}

export default function Registration({onClick}:IRegistrationProps) {
    const email = useInput()
    const password = useInput()
    const name = useInput()
    const [isRegistered, setRegistered] = useState(false)
    const { error, loading } = useTypedSelector(state => state.auth)
    const { registrationUser } = useActions()

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email.value && password.value && name.value) {
            await registrationUser(name.value, email.value, password.value)
            if (!error) {
                setRegistered(true)
                setTimeout(() => {
                    onClick()
                }, 1500)
            }
        }
    }
    

  if (isRegistered) {
    return (
        <div className='p-5 mb-1 position-relative'>
            <h4>You have successfully registered!</h4>
            <span className='text-primary btn position-absolute end-0' onClick={onClick}>
                Login
            </span>
        </div>
    )
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
        <div className="mb-2">
            <label htmlFor="name" className="visually-hidden">Password</label>
            <input type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            {...name}/>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <p>Have an account? <span className='text-primary btn p-0' onClick={onClick}>Login</span></p>
            <div>
                {loading && 
                <div className="spinner-border spinner-border-sm me-3" role="status"></div>}
                <button type="submit" className="btn btn-primary mb-3" disabled={loading}>
                    Registration
                </button>
            </div>
        </div>
    </form>
  )
}
