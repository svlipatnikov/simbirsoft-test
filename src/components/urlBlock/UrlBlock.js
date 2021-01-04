import React from 'react'
import './urlBlock.css'

export default function UrlBlock({ url }) {
  return (
    <div className="url-block">
      <div className="url-block__text">Текущий запрос:</div>
      <div className="url-block__url"> {url.toString()}</div>
    </div>
  )
}
