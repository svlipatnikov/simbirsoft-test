import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import { Link, useRouteMatch, useParams } from 'react-router-dom'
import './competition.css'

export default function Competition({ info }) {
  const { urlDispatch } = useContext(Context)

  let { url } = useRouteMatch()
  console.log('------Competition url:', url)

  let { id } = useParams()
  console.log('------Competition id:', id)

  console.log('------window.location.path:', window.location.pathname)

  // проверка на undefined
  if (info.name === undefined || info === {}) {
    return null
  }

  return (
    <div className="content">
      <div className="competition">
        <div className="competition__inner">
          <div className="competition__name">{info.name}</div>
          <div className="competition__info">
            <div>Code: {info.code}</div>
            <div>Area: {info.area.name}</div>
            <div>Plan: {info.plan}</div>
          </div>
          <div className="competition__buttons-block">
            <Link
              to={`${url}/teams`}
              className="competition__button"
              onClick={() => {
                urlDispatch({ type: 'addPath', payload: 'teams' })
              }}
            >
              Teams
            </Link>

            <Link
              to={`${url}/standings`}
              className="competition__button"
              onClick={() => {
                urlDispatch({ type: 'addPath', payload: 'standings' })
              }}
            >
              Standings
            </Link>
            <Link
              to={`${url}/matches`}
              className="competition__button"
              onClick={() => {
                urlDispatch({ type: 'addPath', payload: 'matches' })
              }}
            >
              Matches
            </Link>
          </div>
        </div>
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
