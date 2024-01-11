import React, { useEffect, useRef } from 'react'

const FocusInput = () => {

  const input = useRef(null)

  useEffect(() => {
    // focus the input element
    input.current.focus()
  }, [])
  
  return (
    <div>
      <input className='border-2' type="text" ref={input}/>
    </div>
  )
}

export default FocusInput