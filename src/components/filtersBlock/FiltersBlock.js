import React from 'react'
import './filtersBlock.css'
import { resourceToFilter } from './resourceToFilter.js'
import FilterItem from './FilterItem.js'

export default function Filters({ url }) {
  let curentResource = url.slice(url.indexOf('v2') + 3, url.indexOf('?'))
  console.log('Filter:', curentResource)

  return (
    <div className="filters">
      <h2 className="filters__header">Filters</h2>
      {resourceToFilter.map((item) => {
        if (item.resource === curentResource) {
          console.log('++++')
          item.filters.map(() => <FilterItem />)
        }
      })}
    </div>
  )
}
