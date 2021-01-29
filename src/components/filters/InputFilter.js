import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../context.js'

export default function InputFilter({ filter, setFilters }) {
  const { params } = useContext(Context)
  const [input, setInput] = useState('')

  useEffect(() => {
    setInput('')
  }, [params])

  return (
    <div className="filters__item">
      <div>{filter.name}</div>
      <input
        type="text"
        placeholder={filter.comment}
        pattern={filter.pattern}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        value={input}
        onBlur={(e) => {
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
      ></input>
    </div>
  )
}
