import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context.js'

export default function AppliedFilter({ param }) {
  const { setParams } = useContext(Context)
  const location = useLocation()

  const delParam = () => {
    let curentUrl = new URL(window.location)
    curentUrl.searchParams.delete(param.type)
    return curentUrl.search
  }

  return (
    <div className="filters__applied-item">
      <div>
        <span className="filters__applied-item__name">{param.type} :</span>
        <span className="filters__applied-item__value">{param.value}</span>
      </div>

      <Link
        to={{
          pathname: location.pathname,
          search: delParam(),
        }}
        className="filters__applied-item__remove-button"
        onClick={() => {
          setParams((curentParams) =>
            curentParams.filter((p) => p.type !== param.type)
          )
        }}
      >
        &times;
      </Link>
    </div>
  )
}
