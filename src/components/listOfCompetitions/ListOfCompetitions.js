import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { sendRequest } from '../const'
import './listOfCompetitions.css'
import { Context } from '../../context.js'

export default function ListOfCompetitions() {
  const [data, setData] = useState(undefined)
  const { params } = useContext(Context)

  // Component Did Mount
  useEffect(() => {
    console.log('---ListOfCompetitions--- params:', params)
    sendRequest(setData)
  }, [params])

  if (data === undefined) return null
  if (data.message)
    return <div className="content__message">{data.message}</div>

  return (
    <>
      <div className="content__count">Найдено: {data.count}</div>
      {data.competitions.map((competition) => (
        <Link
          to={`competitions/${competition.id}`}
          key={competition.id}
          className="content-item competition-item"
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
