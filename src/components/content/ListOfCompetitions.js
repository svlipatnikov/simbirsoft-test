import React, { useContext } from 'react'
import { Context } from '../../context.js'

export default function ListOfCompetitions({ count, competitions }) {
  const { urlDispatch, setDataType } = useContext(Context)

  // проверка на undefined
  if (!count || !competitions) {
    count = 0
    competitions = []
  }

  return (
    <div className="content">
      <div className="content__count">Найдено: {count}</div>

      {competitions.map((competition, counter) => {
        return (
          <div
            className="competition_list"
            key={counter}
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

              <div className="competition__data">
                <div>
                  Area: {competition.area.countryCode} ({competition.area.name})
                </div>
                <div>id: {competition.id}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
