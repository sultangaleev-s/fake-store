import React, { useState } from 'react'

export default function useInput() {
    const [value, setValue] = useState<string>('')

    function onChange(event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>) {
        setValue(event.target.value)
    }
  return { value, onChange }
}
