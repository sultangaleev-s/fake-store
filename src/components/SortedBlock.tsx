import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'

export default function SortedBlock() {
    const { sortedProducts } = useActions()
    const param = useParams()
    const defaultSelectRef = useRef<HTMLOptionElement>(null)

    useEffect(() => {
        if (defaultSelectRef.current && !defaultSelectRef.current.selected) {
            defaultSelectRef.current.selected = true
        }
    }, [param.category])

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        sortedProducts(e.target.value)
    }
  return (
    <div className='p-1'>
        <select 
        className="form-select"
        onChange={onChange}
        >
            <option disabled>Sorting</option>
            <option value="id" ref={defaultSelectRef}>Date</option>
            <option value="title">Name</option>
            <option value="price">Price</option>
        </select>
    </div>
    )
}
