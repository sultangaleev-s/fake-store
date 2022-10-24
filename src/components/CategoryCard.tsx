import React from 'react'
import { Link } from 'react-router-dom'
import { ICategory } from '../types/models'

interface ICategoryProps {
  category: ICategory
}

export default function CategoryCard({ category }: ICategoryProps) {
  return (
    <Link to={`/categories/${category.id}`} className='d-flex text-decoration-none w-100 h-100'>
        <div className="card w-100 mb-4">
            <img src={category.image} className="card-img-top" alt={category.name}/>
            <div className="card-body d-flex align-items-end justify-content-center">
                <p className="card-text fs-4 fw-bold text-dark">{category.name}</p>
            </div>
        </div>
    </Link>
  )
}
