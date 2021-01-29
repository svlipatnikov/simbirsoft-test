import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context.js'

export default function ParamItem({ param }) {
  const { removeParam } = useContext(Context)

  const delParam = () => {
    let curentUrl = new URL(window.location)
    curentUrl.searchParams.delete(param.type)
    return curentUrl.search
  }

  return (
    <>
      <hr />
      <div className="params-list__item">
        <div>
          {param.type}: {param.value}
        </div>

        <Link
          to={{
            pathname: window.location.pathname,
            search: delParam(),
          }}
          className="params-list__remove-button"
          onClick={() => {
            removeParam(param.type)
          }}
        >
          X
        </Link>
      </div>
    </>
  )
}
