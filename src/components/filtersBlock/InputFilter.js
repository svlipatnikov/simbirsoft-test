import React from 'react'

export default function InputFilter({ filter, setFilters }) {
  return (
    <div className="filters__item">
      <div>{filter.name}</div>
      <input
        type="text"
        placeholder={filter.comment}
        pattern={filter.pattern}
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
