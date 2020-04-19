import React, { useState } from 'react'

export default function useToggle(preState) {
  const [currState, setnewState] = useState(preState)
  return [currState, () => (setnewState(!currState))]
}
