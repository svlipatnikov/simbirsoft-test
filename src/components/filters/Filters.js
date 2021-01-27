import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './filters.css'
import { resources } from '../resources.js'
import { allFilters } from '../allFilters.js'
import InputFilter from './InputFilter.js'
import EnumFilter from './EnumFilter.js'
// import { Context } from '../../context.js'
import { sendRequest } from '../const'

export default function Filters({ setParams }) {
  const [filters, setFilters] = useState([])
  // const { sendRequest } = useContext(Context)

  // function addFilter(filterArr) {
  //   const host = 'https://api.football-data.org/'
  //   const newUrl = new URL('/v2' + window.location.pathname, host)
  //   filterArr.forEach((p) => newUrl.searchParams.set(p.type, p.value))
  //   return newUrl
  // }

  // обнуление массива фильтров при смене контента
  useEffect(() => {
    console.log('--Filters clear on url:', window.location.pathname)
    setFilters([])
  }, [window.location.pathname])

  // применение фильтров (отправка запроса)
  const submit = () => {
    // если фильтры не пустые или если удаляем из url старые
    if (filters.length || (!filters.length && window.location.search.length)) {
      console.log('---submit filters:', filters)
      // sendRequest(addFilter(filters))
      // window.location.reload()
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
        if (res.pathname === window.location.pathname) {
          // проход по найденным для ресурса фильтрам
          {
            console.log('!!! res.pathname === window.location.pathname !!!')
          }
          return res.filters.map((fItem, id) =>
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
