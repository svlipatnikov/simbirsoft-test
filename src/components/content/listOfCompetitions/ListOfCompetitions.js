import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import ListOfTeams from '../listOfTeams/ListOfTeams.js'
import { Link, useRouteMatch } from 'react-router-dom'

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

      {competitions.map((competition, key) => {
        return (
          <Link
            to={`${match.url}/competition`}
            className="competition_list"
            key={key}
            onClick={() => {
              urlDispatch({
                type: 'makeUrl',
                payload: ['competitions', competition.id.toString()],
              })
              setDataType('competition')
            }}
          >
            <div className="competition__inner interactive">
              <div className="competition__name">{competition.name}</div>

              <div className="competition__info">
                <div>
                  Area: {competition.area.countryCode} ({competition.area.name})
                </div>
                <div>id: {competition.id}</div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
