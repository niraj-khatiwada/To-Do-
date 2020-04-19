import React, { useState } from 'react'

export default function useForm() {
  const [currState, setnewState] = useState()
  return [currState, (value) => setnewState(value), () => setnewState('')]
}
