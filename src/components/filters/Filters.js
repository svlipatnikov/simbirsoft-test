import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { resources } from '../resources.js'
import { allFilters } from '../allFilters.js'
import TextFilter from './TextFilter.js'
import EnumFilter from './EnumFilter.js'
import AppliedFilter from './AppliedFilter.js'
import { Context } from '../../context.js'
import './filters.css'

export default function Filters() {
  const [filters, setFilters] = useState([])
  const { setParams, params } = useContext(Context)
  // console.log('---Filters param:', params)

  // очистка фильтров при смене контента
  let location = useLocation()
  useEffect(() => {
    console.log('---Filters clear params on url:', location.pathname)
    setParams([])
  }, [location.pathname])

  // применение фильтров
  const submit = () => {
    if (filters.length) {
      console.log('---Filters submit:', filters)
      setParams((curentParams) => {
        return [...curentParams]
          .filter((p) => {
            let i = filters.findIndex((f) => f.type === p.type)
            if (i === -1) return true
            else return false
          })
          .concat(filters)
      })
      setFilters([])
    }
  }

  const setFilterParams = () => {
    let curentUrl = new URL(window.location)
    filters.forEach((p) => curentUrl.searchParams.set(p.type, p.value))
    return curentUrl.search
  }

  return (
    <form className="filters">
      <h2 className="filters__header">Filters</h2>

      <div className="params-list">
        {params.map((param) => (
          <AppliedFilter key={param.type} param={param} />
        ))}
      </div>

      <hr />

      {/* цикл по массиву ресурсов для поиска доступных фильтров */}
      {resources.map((res) => {
        // если нашли совпадение
        if (res.pathname === window.location.pathname)
          // проход по найденным для ресурса фильтрам
          return res.filters.map((fItem, id) =>
            // цикл по массиву всех возможных фильтров
            allFilters.map((filter) => {
              if (filter.name === fItem)
                // отображене фильтра в зависимости от filter.type
                switch (filter.type) {
                  default:
                    return null
                  case 'String' || 'Integer':
                    return (
                      <TextFilter
                        filter={filter}
                        key={filter.id}
                        setFilters={setFilters}
                      />
                    )
                  case 'Enum':
                    return (
                      <EnumFilter
                        filter={filter}
                        key={filter.id}
                        setFilters={setFilters}
                      />
                    )
                }
              else return null
            })
          )
        else return null
      })}

      <hr />

      <div className="filters__button-section">
        <Link
          to={{
            pathname: window.location.pathname,
            search: filters.length ? setFilterParams() : window.location.search,
          }}
          className="filters__button-section__button"
          onClick={submit}
        >
          Apply
        </Link>

        <Link
          to={{
            pathname: window.location.pathname,
          }}
          className="filters__button-section__button"
          onClick={() => {
            if (params.length) setParams([])
          }}
        >
          Clear
        </Link>
      </div>
    </form>
  )
}
