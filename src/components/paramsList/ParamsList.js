import React, { useContext } from 'react'
import { Context } from '../../context.js'
import ParamItem from './ParamItem.js'
import './paramsList.css'

export default function ParamsList() {
  const { params } = useContext(Context)

  if (!params) return null

  return (
    <div className="params-list">
      <div>Curent Filters:</div>
      {params.map((param) => (
        <ParamItem key={param.type} param={param} />
      ))}
    </div>
  )
}
