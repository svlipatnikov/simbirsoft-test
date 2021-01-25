import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import { Link, useRouteMatch, useParams } from 'react-router-dom'
import './competition.css'

export default function Competition({ info }) {
  const { sendRequest, addPath } = useContext(Context)

  let { url } = useRouteMatch()
  console.log('----Competition url:', url)

  // проверка на undefined
  if (info.name === undefined || info === {}) {
    return null
  }

  return (
    <div className="content-item competition">
      <div className="content-item__inner">
        <div className="content-item__name">{info.name}</div>
        <div className="content-item__info">
          <div>Code: {info.code}</div>
          <div>Area: {info.area.name}</div>
          <div>Plan: {info.plan}</div>
        </div>
        <Link
          to={`${url}/teams`}
          className="button"
          onClick={() => sendRequest(addPath('teams'))}
        >
          <div className="button__name">Teams</div>
        </Link>

        <Link
          to={`${url}/standings`}
          className="button"
          onClick={() => sendRequest(addPath('standings'))}
        >
          <div className="button__name">Standings</div>
        </Link>
        <Link
          to={`${url}/matches`}
          className="button"
          onClick={() => sendRequest(addPath('matches'))}
        >
          <div className="button__name">Matches</div>
        </Link>
        <Link
          to={`${url}/scorers`}
          className="button"
          onClick={() => sendRequest(addPath('scorers'))}
        >
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
