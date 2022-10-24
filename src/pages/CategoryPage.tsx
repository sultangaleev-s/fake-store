import React, { useEffect } from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { IProduct } from '../types/models';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import SortedBlock from '../components/SortedBlock';

export default function CategoryPage() {
  
  const { loading, error, products } = useTypedSelector(state => state.products)
  const { categories } = useTypedSelector(state => state.categories)
  const param = useParams()
  const { fetchCategoryProducts } = useActions()

  let category 
  categories.forEach(cat => {
    if (cat.id === Number(param.category)) category = cat.name
  })

  useEffect(() => {
    fetchCategoryProducts(param.category)
  }, [param.category])

  if (error) {
    return <Error error={error}/>
  }

    return (
      <main>
        <div className='mt-3 ms-3 d-flex justify-content-between align-items-end'>
          <div>
            <h4>{category}</h4>
            {!loading && <h6>{products.length} products</h6>}
          </div>
            <SortedBlock/>
        </div>
        {loading && <div className='text-center'><Loader loading={ loading }/></div>}
        <div className="text-center my-0 mx-auto pt-3 row">
          {products.map((product: IProduct) => (
            <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12' key={product.id}>
              <ProductCard product = {product} key={product.id}/>
            </div>
            ))}
        </div>
      </main>
    );
}