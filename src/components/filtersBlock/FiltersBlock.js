import React, { useState, useContext, useEffect } from 'react'
import './filtersBlock.css'
import { resources } from '../resources.js'
import { allFilters } from '../allFilters.js'
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
    // если фильтры не пустые или если удаляем из url старые
    if (arrFilters.length || (!arrFilters.length && url.search.length)) {
      urlDispatch({
        type: 'addFilter',
        payload: arrFilters,
      })
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
        }
      })}

      <button type="button" className="filters__button" onClick={submit}>
        Применить
      </button>
    </form>
  )
}
