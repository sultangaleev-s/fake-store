import React from 'react'
import './loader.scss'

interface LoaderProps {
  loading: boolean
}

export default function Loader({ loading }:LoaderProps) {
  return (
    <div className={loading ? "lds-roller lds-roller-anim" : 'lds-roller'}>
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  )
}
