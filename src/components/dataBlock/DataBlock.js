import React, { useState } from 'react'
import { Context } from '../../context.js'
import Filters from '../filters/Filters.js'
import Content from '../content/Content.js'
import './dataBlock.css'

export default function DataBlock() {
  const [params, setParams] = useState([])
  // console.log('!DataBlock params:', params)

  return (
    <Context.Provider value={{ params, setParams }}>
      <div className="data-block">
        <Filters />
        <Content />
      </div>
    </Context.Provider>
  )
}
