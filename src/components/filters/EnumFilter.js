import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../context.js'

export default function EnumFilter({ filter, setFilters }) {
  const [selectValue, setSelectValue] = useState('null')
  // const { params } = useContext(Context)
  console.log('---EnumFilter--- selectValue:', selectValue)

  // useEffect(() => {
  //   console.log('------EnumFilter useEffect')
  //   setSelectValue('null')
  // }, [params])

  return (
    <div className="filters__item">
      <div>{filter.name}</div>
      <select
        defaultValue={'null'}
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value)
          setFilters((arr) => {
            if (e.target.value && e.target.value !== 'null') {
              // if (selectValue !== 'null') {
              return [
                ...arr.filter((p) => p.type !== filter.name),
                { type: filter.name, value: e.target.value },
              ]
            }
            return arr
          })
        }}
        // onBlur={(e) => {
        //   setFilters((arr) => {
        //     if (e.target.value && e.target.value !== 'null') {
        //       return [
        //         ...arr.filter((p) => p.type !== filter.name),
        //         { type: filter.name, value: e.target.value },
        //       ]
        //     }
        //     return arr
        //   })
        // }}
      >
        <option selected={true} value="null"></option>
        {filter.list.map((item) => (
          <option key={item.id} selected={false} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
