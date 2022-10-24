import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <main style={{ padding: "1rem" }}>
     <p>There's nothing here!</p>
     <Link to={'/'}>Redirect for main page.</Link>
   </main>
  )
}
