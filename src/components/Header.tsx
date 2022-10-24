import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Auth from './Auth/Auth'
import Cart from './Cart/Cart'

export default function Header() {
    const { cart, visibleCart } = useTypedSelector(state => state.cart)
    const { user, visibleAuth } = useTypedSelector(state => state.auth)
    const { openCart, getUser, openAuth } = useActions()

    useEffect(() => {
        if(!user.name && localStorage.getItem('token')) {
            getUser()
        }
    }, [])

  return (
    <header className='position-fixed w-100 top-0'>
        <nav className='navbar h-100' style={{background: 'lightgray'}}>
            <div className="container-fluid mb-2">
                <Link to={'/'} className='navbar-brand fs-4'>React FakeStore</Link>
                <div className='d-flex ms-2'>
                    <span className='me-2 position-relative'>
                        <button className='btn btn-outline-light btn-sm' onClick={openAuth}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/>
                                <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
                            </svg>
                        </button>
                        <span className='position-absolute top-100 end-50 badge rounded-pill bg-light text-dark'>{user.name ? user.name : 'quest'}</span>
                    </span>
                    <span className='position-relative'>
                        <button className='btn btn-outline-light btn-sm me-2' onClick={openCart}>
                         <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/>
                                <circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/>
                            </svg>
                        </button>
                        <span className='position-absolute top-100 end-50 badge rounded-pill bg-light text-dark'>{cart.length}</span>
                    </span>
                </div>
            </div>
        </nav>
      {visibleAuth && <Auth/>}
      {visibleCart && <Cart/>}
    </header>
    )
}

