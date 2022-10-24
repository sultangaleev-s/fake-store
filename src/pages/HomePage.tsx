import React, { useEffect } from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { IProduct } from '../types/models';
import { useTypedSelector } from '../hooks/useTypedSelector'
import Loader from '../components/Loader/Loader';
import Error from '../components/Error';
import { useActions } from '../hooks/useActions';
import useScroll from '../hooks/useScroll';

export default function HomePage() {
    const { loading, error, products, offset, limit } = useTypedSelector(state => state.products)
    const { fetchProducts, setOffsetPage, removeProducts } = useActions()
    
    useEffect(() => {
      removeProducts()
      setOffsetPage(0)
    }, [])
    
    const lastItemRef = useScroll(
      () => {
      setOffsetPage(offset + limit)
      fetchProducts(offset, limit)
      })
     
    if(error) {
      return <Error error={error}/>
    }

    return (
      <main>
        <div className="text-center my-0 mx-auto pt-3 row">
          {products.map((product: IProduct) => (
            <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12' key={product.id}>
              <ProductCard product = {product} key={product.id}/>
            </div>
            ))}
            <div className='text-center' ref={lastItemRef}><Loader loading={ loading }/></div>
        </div>
      </main>
    );
}
