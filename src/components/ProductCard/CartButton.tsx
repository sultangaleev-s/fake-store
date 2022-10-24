import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IProduct } from '../../types/models'

interface ICartButtonProps {
    product: IProduct
}

export default function CartButton({ product}: ICartButtonProps) {
    const { addOnCart, removeOnCart } = useActions()
    const { cart } = useTypedSelector(state => state.cart)
    
    let isBasket = false
    cart.forEach(prod => {
      if (prod.id === product.id) isBasket = true
    })

    const addHandler = () => {
        addOnCart(product)
    }

    const removeHandler = () => {
        removeOnCart(product)
    }

  return (
    <button 
        className={isBasket ? 'btn btn-danger' : 'btn btn-success'}
        onClick={isBasket ? removeHandler : addHandler}>
        <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"  width="15" height="15" style={isBasket ? {transform: 'rotate(45deg)'} : {}}>
            <g>
                <path fill='#fff' d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
            </g>
        </svg>
    </button>
  )
}
