import React, { useState, useContext, useEffect } from 'react'
import './filtersBlock.css'
import { resourceToFilter } from './resourceToFilter.js'
import { allFilters } from './allFilters.js'
import InputFilter from './InputFilter.js'
import EnumFilter from './EnumFilter.js'
import { Context } from '../../context.js'

export default function Filters({ url }) {
  const [arrFilters, setArrFilters] = useState([])
  const { urlDispatch } = useContext(Context)

  // обнуление массива фильтров при смене контента
  useEffect(() => {
    setArrFilters([])
  }, [url.pathname])

  // применение фильтров
  const submit = () => {
    // если есть новые фильтры или в url осталисть старые
    if (arrFilters.length || url.search.length) {
      urlDispatch({
        type: 'addFilter',
        payload: arrFilters,
      })
    }
  }

  return (
    <form className="filters">
      <h2 className="filters__header">Filters</h2>

      {/* цикл по массиву доступных фильтров для ресурса */}
      {resourceToFilter.map((item) => {
        if (item.resource === url.pathname.slice(3)) {
          //если для данного ресурса есть фильтры
          if (item.filters.length) {
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
                          setArrFilters={setArrFilters}
                        />
                      )
                    case 'Enum':
                      return (
                        <EnumFilter
                          filter={filter}
                          key={id}
                          setArrFilters={setArrFilters}
                        />
                      )
                    case 'Integer':
                      return (
                        <InputFilter
                          filter={filter}
                          key={id}
                          setArrFilters={setArrFilters}
                        />
                      )
                  }
                }
              })
            )
          } else {
            return <div>Фильтры отсутствуют</div>
          }
        }
      })}

      <button type="button" className="filters__button" onClick={submit}>
        Применить
      </button>
    </form>
  )
}
