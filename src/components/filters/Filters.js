import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { resources } from '../resources.js'
import { allFilters } from '../allFilters.js'
import InputFilter from './InputFilter.js'
import EnumFilter from './EnumFilter.js'
import { Context } from '../../context.js'
import './filters.css'

export default function Filters() {
  console.log('---Filters')
  const [filters, setFilters] = useState([])
  const { setParams } = useContext(Context)

  // очистка фильтров при смене контента
  let location = useLocation()
  useEffect(() => {
    console.log('---Filters clear params on url:', location.pathname)
    setParams([])
  }, [location.pathname])

  // применение фильтров (отправка запроса)
  const submit = () => {
    if (filters.length) {
      console.log('---submit filters:', filters)
      setParams((curentParams) => {
        return [...curentParams]
          .filter((p) => p.type === 'search')
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
                      <InputFilter
                        filter={filter}
                        key={id}
                        setFilters={setFilters}
                      />
                    )

                  case 'Enum':
                    return (
                      <EnumFilter
                        filter={filter}
                        key={id}
                        setFilters={setFilters}
                      />
                    )
                }
              else return null
            })
          )
        else return null
      })}

      <Link
        to={{
          pathname: window.location.pathname,
          search: filters.length ? setFilterParams() : window.location.search,
        }}
        className="filters__button"
        onClick={submit}
      >
        Применить
      </Link>
    </form>
  )
}
