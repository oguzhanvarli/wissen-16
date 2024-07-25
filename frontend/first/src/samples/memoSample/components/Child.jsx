import React, { memo } from 'react'

function Child() {
  console.log("Child Render Oldu")
  return (
    <h1>Ben Child Component Yazısıyım</h1>
  )
}

export default memo(Child)