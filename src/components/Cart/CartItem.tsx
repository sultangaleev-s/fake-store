import React from 'react'
import { useActions } from '../../hooks/useActions'
import { IProduct } from '../../types/models'

interface ICartItemProps {
    product: IProduct
}

export default function CartItem({ product }: ICartItemProps) {
    const { removeOnCart } = useActions()

  return (
    <div className="row border-bottom border-opacity-50 p-2">
        <div className="col-4">
            <img src={product.images[0]} className="img-fluid rounded-start" alt={product.title}/>
        </div>
        <div className="col-8">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p>Price: {product.price}$</p>
                <button className='btn btn-danger' onClick={() => removeOnCart(product)}>Delete</button>
            </div>
        </div>
    </div>
  )
}
