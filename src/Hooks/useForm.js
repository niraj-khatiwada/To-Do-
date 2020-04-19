import React, { useState } from 'react'

export default function useForm(preStateValue) {
  const [currState, setnewState] = useState(preStateValue)
  return [currState, (value) => setnewState(value), () => setnewState('')]
}
