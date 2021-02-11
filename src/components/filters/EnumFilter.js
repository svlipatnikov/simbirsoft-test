import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../context.js'

export default function EnumFilter({ filter, setFilters }) {
  const [selectedValue, setSelectedValue] = useState('null')
  const { params } = useContext(Context)

  // Очистка поля после применения фильтров
  useEffect(() => {
    setSelectedValue('null')
  }, [params])

  return (
    <div className="filters__item">
      <div className="filter__item__name">{filter.name}</div>
      <select
        className="filter__item__value"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        onBlur={(e) => {
          setFilters((arr) => {
            if (e.target.value !== 'null')
              return [
                ...arr.filter((p) => p.type !== filter.name),
                { type: filter.name, value: e.target.value },
              ]
            return arr
          })
        }}
      >
        <option value="null"></option>
        {filter.list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
