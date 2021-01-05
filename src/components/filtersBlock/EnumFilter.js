import React from 'react'

export default function EnumFilter({ filter, setArrFilters }) {
  return (
    <div className="filters__item">
      <div>{filter.name}</div>
      <select
        onBlur={(e) => {
          setArrFilters((arr) => {
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
      >
        <option selected></option>
        {filter.list.map((item, id) => {
          return <option key={id}>{item}</option>
        })}
      </select>
    </div>
  )
}
