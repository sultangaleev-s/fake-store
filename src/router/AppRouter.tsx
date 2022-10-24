import React from 'react'
import { routes } from './routs'
import { Routes, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Routes>
        {
            routes.map((page) => (
                <Route path={page.path} element={ <page.element />} key={page.path}/>
            ))
        }
    </Routes>
  )
}
