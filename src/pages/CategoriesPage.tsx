import React from 'react'
import { ICategory } from '../types/models'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error'
import CategoryCard from '../components/CategoryCard'
import { useTypedSelector } from '../hooks/useTypedSelector'

export default function CategoriesPage() {
  const { loading, error, categories  } = useTypedSelector(state => state.categories)
  
  if (error) {
    return (
      <Error error={error}/>
    )
  }

  return (
    <main className='p-2'>
        {loading && <div className='text-center'><Loader loading={loading}/></div>}
        <div className='row'>
            {categories.map((cat: ICategory) => (
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12' key={cat.id}>
                  <CategoryCard category={cat}/>
                </div>
            ))}
        </div>
    </main>
  )
}
