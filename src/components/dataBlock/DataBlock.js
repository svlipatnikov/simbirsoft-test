import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Filters from '../filters/Filters.js'
import Content from '../content/Content.js'
import NavMenu from '../navMenu/NavMenu.js'
import Search from '../search/Search.js'
import './dataBlock.css'
// import { Context } from '../../context.js'

export default function DataBlock() {
  console.log('!DataBlock')
  const [params, setParams] = useState({})

  return (
    // <Context.Provider value={{ filters }}>
    <BrowserRouter>
      <div className="data-block">
        <NavMenu />

        <div className="filter-search-block">
          <Filters setParams={setParams} />
          <Search setParams={setParams} />
        </div>

        <div className="content">
          <Content />
        </div>
      </div>
    </BrowserRouter>
    // </Context.Provider>
  )
}
