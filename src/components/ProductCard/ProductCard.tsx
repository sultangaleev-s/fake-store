import React, { useRef, useState } from 'react'
import './productCard.scss'
import { Link } from 'react-router-dom'
import { IProduct } from '../../types/models'
import CartButton from './CartButton'

interface ProductProps {
    product: IProduct
}

export function ProductCard({product}: ProductProps) {
    const [open, setOpen] = useState<boolean>(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const openHandler = () => {
        setOpen(!open)
    }

  return (
        <div className='position-relative d-flex h-100' style={open ? {height: cardRef.current?.offsetHeight} : {}}>
            <div className='card text-center w-100 mb-4 d-flex flex-column align-items-center justify-content-between overflow-hidden' ref={cardRef} style={open ? {position: 'absolute', zIndex: 100}: {display: 'block'}}>
                    <Link to={`/product/${product.id}`} className = 'bg-secondary h-100 w-100'>
                        <img 
                        src={product.images[0]} 
                        alt={product.title}
                        className='card-img-top hover-zoom'
                        />
                    </Link>
                <div className='card-body d-flex flex-column justify-content-end'>
                    <Link to={`/product/${product.id}`} className = 'overflow-hidden'>
                        <h6 className={open ? 'card-title' : 'card-title text-nowrap'}>{product.title}</h6>
                    </Link>
                    <p className='card-text'>
                        Category: <br/> 
                        <Link to={`/categories/${product.category.id}`}>{product.category.name}</Link>
                    </p>
                    <strong>{product.price}$</strong>
                    {open && <p className='card-subtitle'>{product.description}</p>}
                </div>
                <div className='card-footer w-100 d-flex justify-content-between'>
                    <button 
                    className= {open ? 'btn btn-danger' : 'btn btn-primary'}
                    onClick={openHandler}
                    >
                        {open ? 'Hide Details' : 'Show Details'}
                    </button>
                    <CartButton product={product}/>
                </div>
            </div>
        </div>
  )
}
