import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Skeleton from './Skeleton/Skeleton'
import { ICategory } from '../types/models'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import Error from './Error'

export default function Sidebar() {
    const { loading, error, categories  } = useTypedSelector(state => state.categories)
    const { fetchCategories } = useActions()

    useEffect(() => {
      fetchCategories()
    }, [])
  
    if (loading) {
        return (
            <Skeleton/>
        )
    }  

    if (error) {
        return (
            <Error error={error}/>
        )
    }
        
    return (
        <aside className='position-sticky'>
            <ul className="nav flex-sm-column flex-row p-3">
                <li className='nav-item pt-sm-3 pt-2'>
                    <strong>Category:</strong> 
                </li>
                {categories.map((cat: ICategory, index) => (
                    index < 5 && 
                    <li className="nav-item d-flex" key={cat.id}>
                        <NavLink to={`/categories/${cat.id}`} className="nav-link link-secondary px-xs-0">{cat.name}</NavLink>
                    </li>
                ))}
                <li className="nav-item d-flex" >
                    <NavLink to={'/categories'} className="nav-link link-secondary" end>All categories</NavLink>
                </li>
            </ul>
        </aside>
        )
    }
