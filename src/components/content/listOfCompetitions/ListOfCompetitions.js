import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import { Link, useRouteMatch } from 'react-router-dom'
import './listOfCompetitions.css'

export default function ListOfCompetitions({ data }) {
  const { sendRequest, addPath } = useContext(Context)
  let { url } = useRouteMatch()

  // проверка на undefined
  if (!data.count || !data.competitions) {
    return null
  }

  return (
    <div className="content">
      <div className="content__count">Найдено: {data.count}</div>

      {data.competitions.map((competition) => (
        <Link
          to={`${url}/${competition.id}`}
          className="competition-item"
          key={competition.id}
          onClick={() => sendRequest(addPath(competition.id.toString()))}
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
