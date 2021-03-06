import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendRequest } from '../../fetch.js'
import './playerInfo.css'

export default function PlayerInfo() {
  const [data, setData] = useState(undefined)
  const location = useLocation()

  // Обновление контента при смене url
  useEffect(() => {
    sendRequest(setData, location)
  }, [location])

  // Проверка на undefined
  if (data === undefined) return null

  // Ошибка
  if (data.message)
    return <div className="content__message">{data.message}</div>

  return (
    <div className="content-item player">
      <div className="content-item__inner">
        <div className="content-item__name">{data.name}</div>

        <div className="content-item__info">FirstName: {data.firstName}</div>
        <div className="content-item__info">
          LastName: {data.lastName ? data.lastName : ''}
        </div>
        <div className="content-item__info">
          DateOfBirth: {data.dateOfBirth}
        </div>
        <div className="content-item__info">
          CountryOfBirth: {data.countryOfBirth}
        </div>
        <div className="content-item__info">
          Nationality: {data.nationality}
        </div>
        <div className="content-item__info">Position: {data.position}</div>
        <div className="content-item__info">
          ShirtNumber: {data.shirtNumber ? data.position : ''}
        </div>

        <Link
          to={`/players/${data.id}/matches`}
          className="button button__name"
        >
          Player matches
        </Link>
      </div>
    </div>
  )
}

// {
//   "id": 68,
//   "name": "Dani Ceballos",
//   "firstName": "Daniel",
//   "lastName": null,
//   "dateOfBirth": "1996-08-07",
//   "countryOfBirth": "Spain",
//   "nationality": "Spain",
//   "position": "Midfielder",
//   "shirtNumber": null,
//   "lastUpdated": "2020-09-07T20:49:31Z"
// }
