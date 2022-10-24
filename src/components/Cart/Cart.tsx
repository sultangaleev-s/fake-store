import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import CartItem from './CartItem'

export default function Cart() {
  const { closeCart, removeAll } = useActions()
  const { cart, visibleCart } = useTypedSelector(state => state.cart)
  const finallyPrice = cart.reduce((prev, current) => prev + current.price, 0)

  if(visibleCart) {
    document.body.style.overflow = 'hidden'
  } 
  const onClose = () => {
    closeCart()
    document.body.style.overflow = 'auto'
  }

  return (
    <div className='modal bg-dark bg-opacity-50 d-block'>
      <div className='d-flex flex-row-reverse w-100 h-100 '>
        <div className='col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3'>
          <div className={'modal-content h-100 ms-auto' }>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Cart</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body py-0 overflow-auto">
              {cart.length
              ? <>
                  {cart.map(product => 
                  <CartItem product={product} key={product.id}/>
                  )}
              </>
              : <p className='my-2'>Сart is empty</p>} 
            </div>
            <div className="modal-footer justify-content-between">
              <p className='my-2'>Total cost: {finallyPrice}$</p>
                <button type="button" 
                className="btn btn-primary" 
                onClick={cart.length ? removeAll : onClose}>
                  {cart.length ? 'Buy' : 'close'}
                  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}