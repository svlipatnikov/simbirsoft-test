import React from 'react'
import './content.css'

export default function Content({ data }) {
  return (
    <div className="content">
      <pre className="json-text">{JSON.stringify(data, null, '    ')}</pre>
    </div>
  )
}
