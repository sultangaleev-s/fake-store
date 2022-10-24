import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import Slider from '../components/Slider/Slider'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import Error from '../components/Error'

export default function ProductPage() {
    const param = useParams()
    const { loading, error, products } = useTypedSelector(state => state.products)
    const { addOnCart, removeOnCart, fetchOneProducts } = useActions()

    useEffect(() => {
      fetchOneProducts(param.product)
    }, [])
    

    const { cart } = useTypedSelector(state => state.cart)
    let isBasket = false
    cart.forEach(prod => {
      if (prod.id === products[0]?.id) isBasket = true
    })

  if (error) {
    return <Error error = {error}/>
  }
      
  return (
    <main className='mt-4'>
         {loading && <div className='text-center'><Loader loading={ loading }/></div>}
         {products[0] && <div className='container'>
            <div className='row justify-content-between'>
                <Slider images={products[0].images} className = 'col-12 col-sm-6 mb-3'/>
                <div className='col-12 col-sm-5 mb-3'>
                    <h2>{products[0].title}</h2>
                    <p>{products[0].description}</p>
                    <p>Category: <Link to={`/categories/${products[0].category.id}`}>{products[0].category.name}</Link></p>
                    <p>Price: <strong>{products[0].price}$</strong></p>
                    {isBasket
                    ? <button className='btn btn-danger' onClick={() => removeOnCart(products[0])}>Remove from basket</button>
                    :<button className='btn btn-primary' onClick={() => addOnCart(products[0])}>Add to Basket</button>}
                </div>
            </div>
         </div>}
    </main>
  )
}
