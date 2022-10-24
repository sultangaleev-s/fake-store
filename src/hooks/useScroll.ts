import React, { useRef, useCallback } from 'react'
import { useTypedSelector } from './useTypedSelector'

export default function useScroll(callback: () => any) {
    const observer = useRef<IntersectionObserver | null>(null)
    const { loading } = useTypedSelector(state => state.products)
    
    const lastItemRef = useCallback((node: any) => {
      if (loading) return 

      if (observer.current) observer.current.disconnect()
      
      observer.current = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {
          callback()
        }
      })
  
      if (node) observer.current.observe(node)
    }, [loading])
    
    return lastItemRef
}
