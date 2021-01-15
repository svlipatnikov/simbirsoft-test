import React, { useState, useContext, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import './filtersBlock.css'
import { resources } from '../resources.js'
import { allFilters } from '../allFilters.js'
import InputFilter from './InputFilter.js'
import EnumFilter from './EnumFilter.js'
import { Context } from '../../context.js'

export default function Filters() {
  const [Filters, setFilters] = useState([])
  const { urlDispatch, sendRequest } = useContext(Context)
  let { path, url } = useRouteMatch()

  function addFilter(filterArr) {
    const newUrl = new URL(window.location.pathname, window.location.origin)
    filterArr.forEach((p) => {
      newUrl.searchParams.set(p.type, p.value)
    })
    console.log('Filtered url:', newUrl.toString())
    return newUrl
  }

  // обнуление массива фильтров при смене контента
  useEffect(() => {
    setFilters([])
  }, [url.pathname])

  // применение фильтров
  const submit = () => {
    // если фильтры не пустые или если удаляем из url старые
    if (Filters.length || (!Filters.length && window.location.search.length)) {
      // urlDispatch({
      //   type: 'addFilter',
      //   payload: Filters,
      // })
      console.log('---submit filters')

      sendRequest(addFilter(Filters))
    }
  }

  return (
    <form className="filters">
      <h2 className="filters__header">Filters</h2>

      {/* цикл по массиву ресурсов для поиска доступных фильтров */}
      {resources.map((item) => {
        if (item.pathname === url.pathname) {
          // проход по найденным для ресурса фильтрам
          return item.filters.map((fItem, id) =>
            // цикл по массиву всех возможных фильтров
            allFilters.map((filter) => {
              if (filter.name === fItem) {
                // отображене фильтра в зависимости от filter.type
                switch (filter.type) {
                  case 'String':
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
                  case 'Integer':
                    return (
                      <InputFilter
                        filter={filter}
                        key={id}
                        setFilters={setFilters}
                      />
                    )
                }
              }
            })
          )
        }
      })}

      <Link
        to={`${url}`}
        type="button"
        className="filters__button"
        onClick={submit}
      >
        Применить
      </Link>
    </form>
  )
}
