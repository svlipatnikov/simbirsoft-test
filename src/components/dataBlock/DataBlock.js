import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

  // обнуление массива фильтров при смене контента
  // const location = useLocation()
  useEffect(() => {
    console.log('---DataBlock useLocation')
    setParams([])
  }, [])

  const removeParam = (pType) => {
    setParams((curentParams) =>
      [...curentParams].filter((p) => p.type !== pType)
    )
  }

  return (
    <Context.Provider value={{ params, setParams, removeParam }}>
      <div className="data-block">
        <NavMenu />

        <div className="filter-search-block">
          <Filters />
          <Search />
          <ParamsList />
        </div>

        <div className="content">
          <Content />
        </div>
      </div>
    </Context.Provider>
  )
}
