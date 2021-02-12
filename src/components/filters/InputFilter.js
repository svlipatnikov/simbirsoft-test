import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../context.js'

export default function InputFilter({ filter, setFilters }) {
  const { params } = useContext(Context)
  const [input, setInput] = useState('')

  // Очистка поля после применения фильтров
  useEffect(() => {
    setInput('')
  }, [params])

  return (
    <div className="filters__item">
      <div className="filter__item__name">{filter.name}</div>
      <input
        className="filter__item__value"
        type="text"
        maxlength="20"
        placeholder={filter.comment}
        title={filter.comment}
        onChange={(e) => {
          setInput(e.target.value)
          setFilters((arr) => {
            if (e.target.value) {
              return [
                ...arr.filter((p) => p.type !== filter.name),
                { type: filter.name, value: e.target.value },
              ]
            } else {
              return [...arr.filter((p) => p.type !== filter.name)]
            }
          })
        }}
        value={input}
      ></input>
    </div>
  )
}
