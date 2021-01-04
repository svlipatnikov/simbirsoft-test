import React, { useState, useContext, useEffect } from 'react'
import './filtersBlock.css'
import { resourceToFilter } from './resourceToFilter.js'
import { filters } from './filters.js'
import InputFilter from './InputFilter.js'
import EnumFilter from './EnumFilter.js'
import { Context } from '../../context.js'

export default function Filters({ url }) {
  const [arrFilters, setArrFilters] = useState([])
  const { urlDispatch } = useContext(Context)

  // обнуление фильтров при смене контента
  useEffect(() => {
    console.log('Clear Filters!')
    setArrFilters([])
  }, [url])

  const submit = () => {
    urlDispatch({
      type: 'addFilter',
      payload: arrFilters,
    })
  }

  return (
    <div className="filters">
      <h2 className="filters__header">Filters</h2>

      {resourceToFilter.map((item) => {
        if (item.resource === url.pathname.slice(3)) {
          if (item.filters.length) {
            return item.filters.map((fItem, id) =>
              filters.map((filter) => {
                if (filter.name === fItem) {
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
    </div>
  )
}
