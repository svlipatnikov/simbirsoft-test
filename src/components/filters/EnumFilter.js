import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../context.js'

export default function EnumFilter({ filter, setFilters }) {
  const [selectedValue, setSelectedValue] = useState('null')
  const { params } = useContext(Context)

  useEffect(() => {
    setSelectedValue('null')
  }, [params])

  return (
    <div className="filters__item">
      <div>{filter.name}</div>
      <select
        value={selectedValue}
        defaultValue="null"
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
          <option key={item.id} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
