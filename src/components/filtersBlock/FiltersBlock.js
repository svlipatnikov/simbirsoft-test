import React from 'react'
import './filtersBlock.css'
import { resourceToFilter } from './resourceToFilter.js'
import FilterItem from './FilterItem.js'

export default function Filters({ url }) {
  return (
    <div className="filters">
      <h2 className="filters__header">Filters</h2>
      {/* {console.log('Filter:', url.pathname.slice(3))} */}

      {resourceToFilter.map((item) => {
        if (item.resource === url.pathname.slice(3)) {
          // console.log('Felters has been founded')
          if (item.filters.length) {
            return item.filters.map((item, id) => (
              <FilterItem key={id} filter={item} />
            ))
          } else {
            return <div>Фильтры отсутствуют</div>
          }
        }
      })}
    </div>
  )
}
