import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './filters.css'
import { resources } from '../resources.js'
import { allFilters } from '../allFilters.js'
import InputFilter from './InputFilter.js'
import EnumFilter from './EnumFilter.js'
import { Context } from '../../context.js'

export default function Filters() {
  console.log('---Filters')
  const [filters, setFilters] = useState([])
  const { setParams } = useContext(Context)

  // применение фильтров (отправка запроса)
  const submit = () => {
    if (filters || (!filters && window.location.search)) {
      console.log('---submit filters:', filters)
      setParams(filters)
    }
  }

  const setFilterParams = () => {
    let curentUrl = new URL(window.location)
    if (filters.length) {
      filters.forEach((p) => curentUrl.searchParams.set(p.type, p.value))
      return curentUrl.search
    } else return ''
  }

  return (
    <form className="filters">
      <h2 className="filters__header">Filters</h2>

      {/* цикл по массиву ресурсов для поиска доступных фильтров */}
      {resources.map((res) => {
        // если нашли совпадение
        if (res.pathname === window.location.pathname) {
          // проход по найденным для ресурса фильтрам
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
          search: setFilterParams(),
        }}
        className="filters__button"
        onClick={submit}
      >
        Применить
      </Link>
    </form>
  )
}
