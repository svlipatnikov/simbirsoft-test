import React, { useState } from 'react'
// import { Route } from 'react-router-dom'
import { Context } from '../../context.js'
import Filters from '../filters/Filters.js'
import Content from '../content/Content.js'
import NavMenu from '../navMenu/NavMenu.js'
import './dataBlock.css'

export default function DataBlock() {
  const [params, setParams] = useState([])
  // console.log('!DataBlock params:', params)

  return (
    <Context.Provider value={{ params, setParams }}>
      <div className="data-block">
        <NavMenu />

        {/* <Route> */}
        <div className="filter-search-block">
          <Filters />
        </div>
        {/* </Route> */}

        <div className="content">
          <Content />
        </div>
      </div>
    </Context.Provider>
  )
}
