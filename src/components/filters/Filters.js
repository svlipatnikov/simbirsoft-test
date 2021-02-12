import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation, matchPath } from 'react-router-dom'
import { resources } from './resources.js'
import { allFilters } from './allFilters.js'
import InputFilter from './InputFilter.js'
import EnumFilter from './EnumFilter.js'
import DateFilter from './DateFilter.js'
import AppliedFilter from './AppliedFilter.js'
import { Context } from '../../context.js'
import './filters.css'

export default function Filters() {
  const [filters, setFilters] = useState([])
  const { setParams, params } = useContext(Context)
  const location = useLocation()

  // Активность кнопки Apply
  let classApplyBtn = 'filters__button-section__button'
  if (!filters.length)
    classApplyBtn =
      'filters__button-section__button filters__button-section__button--disabled'

  // Активность кнопки Clear
  let classClearBtn = 'filters__button-section__button'
  if (!params.length)
    classClearBtn =
      'filters__button-section__button filters__button-section__button--disabled'

  // Загрузка фильтров из url после обновления страницы или смены контента
  useEffect(() => {
    const curentURL = new URL(window.location)
    let curentParams = []
    for (let [name, val] of curentURL.searchParams) {
      curentParams = [...curentParams, { type: name, value: val }]
    }
    setParams(curentParams)
  }, [location.pathname])

  // Применение фильтров
  const filtersSubmit = () => {
    if (filters.length) {
      setParams((curentParams) =>
        curentParams
          // удаляем параметры, которые будем сабмитить
          .filter((p) => {
            if (filters.findIndex((f) => f.type === p.type) === -1) return true
            else return false
          })
          // добавляем текущие выбранные
          .concat(filters)
      )
      setFilters([])
    }
  }

  // учтановка параметров в url
  const setFilterParams = () => {
    const newUrl = new URL(window.location)
    filters.forEach((p) => newUrl.searchParams.set(p.type, p.value))
    return newUrl.search
  }

  // Наличие доступных фильтров для контента
  const hasFilters = () => {
    let hasFiltersFlag = false
    resources.forEach((res) => {
      if (
        matchPath(location.pathname, {
          path: res.pathname,
          exact: true,
          strict: false,
        })
      )
        if (res.filters.length) hasFiltersFlag = true
    })
    return hasFiltersFlag
  }

  return (
    <div className="filter-search-block">
      <form className="filters">
        <h2 className="filters__header">Filters</h2>

        <div className="params-list">
          {params.map((param) => (
            <AppliedFilter key={param.type} param={param} />
          ))}
        </div>

        <hr />

        {!hasFilters() ? (
          <div className="filters__item filters__no-resources">
            Filters not found for curent resource
          </div>
        ) : null}
        {/* цикл по массиву ресурсов для поиска доступных фильтров */}
        {resources.map((res) => {
          if (
            matchPath(location.pathname, {
              path: res.pathname,
              exact: true,
              strict: false,
            }) // если совпадает путь
          )
            // проход по найденным для ресурса фильтрам
            return res.filters.map((fItem) =>
              // цикл по массиву всех возможных фильтров
              allFilters.map((filter) => {
                if (filter.name === fItem)
                  // отображене фильтра в зависимости от filter.type
                  switch (filter.type) {
                    default:
                      return null
                    case 'Input':
                      return (
                        <InputFilter
                          filter={filter}
                          key={filter.name}
                          setFilters={setFilters}
                        />
                      )
                    case 'Enum':
                      return (
                        <EnumFilter
                          filter={filter}
                          key={filter.name}
                          setFilters={setFilters}
                        />
                      )
                    case 'Date':
                      return (
                        <DateFilter
                          filter={filter}
                          key={filter.name}
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

        <div className="filters__button-section ">
          <Link
            to={{
              pathname: location.pathname,
              search: filters.length
                ? setFilterParams()
                : window.location.search,
            }}
            className={classApplyBtn}
            onClick={filtersSubmit}
          >
            Apply
          </Link>

          <Link
            to={{
              pathname: location.pathname,
            }}
            className={classClearBtn}
            onClick={() => {
              if (params.length) setParams([])
            }}
          >
            Clear all
          </Link>
        </div>
      </form>
    </div>
  )
}
