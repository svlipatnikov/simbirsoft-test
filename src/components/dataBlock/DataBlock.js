import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Filters from '../filters/Filters.js'
import Content from '../content/Content.js'
import NavMenu from '../navMenu/NavMenu.js'
import Search from '../search/Search.js'
import './dataBlock.css'
import { Context } from '../../context.js'
import ParamsList from '../paramsList/ParamsList.js'

export default function DataBlock() {
  const [params, setParams] = useState([])
  console.log('!DataBlock params:', params)

  const removeParam = (pType) => {
    setParams((curentParams) =>
      [...curentParams].filter((p) => p.type !== pType)
    )
  }

  return (
    <Context.Provider value={{ params, setParams, removeParam }}>
      <div className="data-block">
        <NavMenu />

        <Route path="/:path">
          <div className="filter-search-block">
            <ParamsList />
            <Filters />
            <Search />
          </div>
        </Route>

        <div className="content">
          <Content />
        </div>
      </div>
    </Context.Provider>
  )
}
