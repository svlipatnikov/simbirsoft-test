import React, { useEffect, useState, useContext } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { sendRequest } from '../const'
import { Context } from '../../context.js'
import './competition.css'

export default function Competition() {
  const [data, setData] = useState(undefined)
  const { params } = useContext(Context)
  const { url } = useRouteMatch()

  // Component Did Mount
  useEffect(() => {
    console.log('---Competition---')
    sendRequest(setData)
  }, [params])

  // Проверка на undefined
  if (data === undefined) return null
  if (data.message)
    return <div className="content__message">{data.message}</div>

  return (
    <div className="content-item competition">
      <div className="content-item__inner">
        <div className="content-item__name">{data.name}</div>
        <div className="content-item__info">
          <div>Code: {data.code}</div>
          <div>Area: {data.area.name}</div>
          <div>Plan: {data.plan}</div>
        </div>

        <Link to={`${url}/teams`} className="button">
          <div className="button__name">Teams</div>
        </Link>

        <Link to={`${url}/standings`} className="button">
          <div className="button__name">Standings</div>
        </Link>

        <Link to={`${url}/matches`} className="button">
          <div className="button__name">Matches</div>
        </Link>

        <Link to={`${url}/scorers`} className="button">
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
