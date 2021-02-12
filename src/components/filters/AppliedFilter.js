import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context.js'

export default function AppliedFilter({ param }) {
  const { setParams } = useContext(Context)
  const location = useLocation()

  const delParam = () => {
    let curentUrl = new URL(window.location)
    if (param.type.indexOf('date') !== -1) {
      curentUrl.searchParams.delete('dateTo')
      curentUrl.searchParams.delete('dateFrom')
    } else curentUrl.searchParams.delete(param.type)
    return curentUrl.search
  }

  return (
    <div className="filters__applied-item">
      <div>
        <span className="filters__applied-item__name">{param.type} :</span>
        <span className="filters__applied-item__value">
          {param.value.slice(0, 25)}
        </span>
      </div>

      <Link
        to={{
          pathname: location.pathname,
          search: delParam(),
        }}
        className="filters__applied-item__remove-button"
        onClick={() => {
          setParams((curentParams) => {
            if (param.type.indexOf('date') !== -1) {
              return curentParams.filter((p) => p.type.indexOf('date') === -1)
            } else return curentParams.filter((p) => p.type !== param.type)
          })
        }}
      >
        &times;
      </Link>
    </div>
  )
}
