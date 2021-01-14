import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import { Link, useRouteMatch } from 'react-router-dom'
import './listOfCompetitions.css'

export default function ListOfCompetitions({ count, competitions }) {
  const { urlDispatch, setDataType } = useContext(Context)

  let match = useRouteMatch()

  // проверка на undefined
  if (!count || !competitions) {
    count = 0
    competitions = []
  }

  return (
    <div className="content">
      <div className="content__count">Найдено: {count}</div>

      {competitions.map((competition) => (
        <Link
          to={`${match.url}/${competition.id}`}
          className="competition-item"
          key={competition.id}
          onClick={() => {
            urlDispatch({
              type: 'makeUrl',
              payload: ['competitions', competition.id.toString()],
            })
            setDataType('competition')
          }}
        >
          <div className="competition-item__inner interactive">
            <div className="competition-item__name">{competition.name}</div>

            <div className="competition-item__info">
              <div>
                Area: {competition.area.countryCode} ({competition.area.name})
              </div>
              <div>id: {competition.id}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
