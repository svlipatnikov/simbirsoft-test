import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendRequest } from '../const'
import './competitionInfo.css'

export default function CompetitionInfo() {
  const [data, setData] = useState(undefined)
  const location = useLocation()

  // Обновление контента при смене url
  useEffect(() => {
    sendRequest(setData, location)
  }, [location])

  // Обновление контента при смене url
  useEffect(() => {
    sendRequest(setData)
  }, [location])

  // Проверка на undefined
  if (data === undefined) return null

  // Ошибка
  if (data.message)
    return <div className="content__message">{data.message}</div>

  return (
    <div className="content-item competition">
      <div className="content-item__inner">
        <div className="competition__container">
          {data.emblemUrl ? (
            <img className="competition__img" src={data.emblemUrl} alt="img" />
          ) : null}
          <div>
            <div className="content-item__name">{data.name}</div>
            <div className="content-item__info">Code: {data.code}</div>
            <div className="content-item__info">Area: {data.area.name}</div>
            <div className="content-item__info">Plan: {data.plan}</div>
          </div>
        </div>

        <Link to={`/competitions/${data.id}/teams`} className="button">
          <div className="button__name">Teams</div>
        </Link>

        <Link
          to={{
            pathname: `/competitions/${data.id}/standings`,
            search: 'standingType=TOTAL',
          }}
          className="button"
        >
          <div className="button__name">Standings</div>
        </Link>

        <Link to={`/competitions/${data.id}/matches`} className="button">
          <div className="button__name">Matches</div>
        </Link>

        <Link to={`/competitions/${data.id}/scorers`} className="button">
          <div className="button__name">Scorers</div>
        </Link>
      </div>
    </div>
  )
}

// {
//   "id": 2000,
//   "area": {
//       "id": 2267,
//       "name": "World"
//   },
//   "name": "FIFA World Cup",
//   "code": "WC",
//   "emblemUrl": null,
//   "plan": "TIER_ONE",
//   "currentSeason": {
//       "id": 1,
//       "startDate": "2018-06-14",
//       "endDate": "2018-07-15",
//       "currentMatchday": 3,
//       "winner": {
//           "id": 773,
//           "name": "France",
//           "shortName": "France",
//           "tla": "FRA",
//           "crestUrl": "https://crests.football-data.org/773.svg"
//       }
//   },
//   "seasons": [
//       {
//           "id": 1,
//           "startDate": "2018-06-14",
//           "endDate": "2018-07-15",
//           "currentMatchday": 3,
//           "winner": {
//               "id": 773,
//               "name": "France",
//               "shortName": "France",
//               "tla": "FRA",
//               "crestUrl": "https://crests.football-data.org/773.svg"
//           }
//       },
//       {
//           "id": 464,
//           "startDate": "2014-06-12",
//           "endDate": "2014-07-13",
//           "currentMatchday": null,
//           "winner": null
//       }
//   ],
//   "lastUpdated": "2020-09-10T13:58:14Z"
// }
