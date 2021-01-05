import React, { useContext } from 'react'
import { Context } from '../../context.js'

export default function Competition({ info }) {
  const { urlDispatch } = useContext(Context)

  return (
    <div
      className="competition"
      onClick={() => {
        urlDispatch({
          type: 'makeUrl',
          payload: ['competitions', info.id.toString()],
        })
      }}
    >
      <div className="competition__inner">
        <div className="competition__inner__name">{info.name}</div>

        <div className="competition__inner__data">
          <div>
            Area: {info.area.countryCode} ({info.area.name})
          </div>
          <div>id: {info.id}</div>
        </div>
      </div>
    </div>
  )
}

// urlDispatch({
//   type: 'makeUrl',
//   payload: ['teams', '86', 'matches'],
// })
