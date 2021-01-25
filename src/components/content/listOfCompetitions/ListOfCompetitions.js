import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import { Link, useRouteMatch } from 'react-router-dom'
import './listOfCompetitions.css'

export default function ListOfCompetitions({ competitions }) {
  const { sendRequest, addPath } = useContext(Context)
  let { url } = useRouteMatch()

  if (!competitions) return null

  return (
    <>
      {competitions.map((competition) => (
        <Link
          to={`${url}/${competition.id}`}
          key={competition.id}
          className="content-item competition-item"
          onClick={() => sendRequest(addPath(competition.id.toString()))}
        >
          <div className="content-item__inner content-item__link">
            <div className="content-item__name content-item__name--small">
              {competition.name}
            </div>
            <div className="content-item__info">
              <div>
                Area: {competition.area.countryCode} ({competition.area.name})
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
