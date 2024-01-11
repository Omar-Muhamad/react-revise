import React from "react"

const Title = () => {
  console.log('Rendering Title')
  return (
    <h1>React.memo, useCallback, useMemo performance improvment EX</h1>
  )
}

export default React.memo(Title)