import React, { useState } from 'react'
import Modal from './Modal'

interface ErrorProps {
    error: string
}
const reloadPage = () => window.location.reload()

export default function Error({error}: ErrorProps) {
  const [visibleError, setVisibleError] = useState(true)
 if (visibleError) {
    return (
      <Modal
      title='Error!'
      btnText='Reload'
      onClick={reloadPage}
      onClose= {() => setVisibleError(false)}>
        <p className='mt-3'>{error}</p>
        <p>Please, reload page.</p>
      </Modal>
    )
 } else {
  return null
 }
}
