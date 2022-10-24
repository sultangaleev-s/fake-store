import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export default function Account() {
    const { logoutUser, closeAuth } = useActions()
    const { user } = useTypedSelector(state => state.auth)

    const logout = () => {
      const result = window.confirm('Are you sure you want to go out?')
      if (result) {
        logoutUser()
        closeAuth()
      }
    }
  return (
    <div className='py-3 d-flex flex-column align-items-end'>
        <ul className="list-group list-group-flush w-100 mb-2">
          <li className="list-group-item d-flex justify-content-between"><strong>Email:</strong> <strong>{user.email}</strong></li>
          <li className="list-group-item d-flex justify-content-between"><strong>Name:</strong> <strong>{user.name}</strong></li>
          <li className="list-group-item d-flex justify-content-between"><strong>Role:</strong> <strong>{user.role}</strong></li>
        </ul>
        <button 
        className='btn btn-danger'
        onClick={logout}>
            Logout
        </button>
    </div>
  )
}
