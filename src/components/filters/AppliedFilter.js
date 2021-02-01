import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context.js'

export default function AppliedFilter({ param }) {
  const { setParams } = useContext(Context)

  const delParam = () => {
    let curentUrl = new URL(window.location)
    curentUrl.searchParams.delete(param.type)
    return curentUrl.search
  }

  return (
    <>
      <hr />
      <div className="filters__applied-item">
        <div>
          {param.type}: {param.value}
        </div>

        <Link
          to={{
            pathname: window.location.pathname,
            search: delParam(),
          }}
          className="filters__applied-item__remove-button"
          onClick={() => {
            setParams((curentParams) =>
              curentParams.filter((p) => p.type !== param.type)
            )
          }}
        >
          X
        </Link>
      </div>
    </>
  )
}
