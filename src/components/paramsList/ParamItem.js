import React, { useContext } from 'react'
import { Context } from '../../context.js'

export default function ParamItem({ param }) {
  const { removeParam } = useContext(Context)
  return (
    <>
      <hr />
      <div className="params-list__item">
        <div>
          {param.type}: {param.value}
        </div>

        <div
          className="params-list__remove-button"
          onClick={() => {
            removeParam(param.type)
          }}
        >
          X
        </div>
      </div>
    </>
  )
}
