import React, { useEffect, useState } from 'react'
import { sendRequest } from '../const'

export default function Json() {
  const [data, setData] = useState(undefined)

  // Component Did Mount
  useEffect(() => {
    console.log('---unknown JSON data---')
    sendRequest(setData)
  }, [])

  return <pre className="json-text">{JSON.stringify(data, null, '    ')}</pre>
}
